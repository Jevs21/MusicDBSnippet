# encoding: utf-8

import requests;
import unicodedata;
import json;
import sys;
import mysql.connector;
import musicbrainzngs;

musicbrainzngs.set_useragent(
    "jevsMusicDB",
    "0.1",
    "jordanevans5588@gmail.com",
)

#
# ALBUM FUNCTIONS
#
def getAlbumWikiId(album_name):
    data = {
        'action'  : 'query',
        'list'    : 'search',
        'srsearch': album_name+' Album',
        'format'  : 'json'
    }
    wiki_request = requests.get('https://en.wikipedia.org/w/api.php', params=data);
    wiki_result  = wiki_request.json();
    # print(json.dumps(wiki_result, indent=4, sort_keys=True));
    wiki_id = "";
    if(len(wiki_result['query']['search']) > 0):
        wiki_id = wiki_result['query']['search'][0]['pageid'];
    else:
        wiki_id = "0";

    return str(wiki_id);


def getAlbumIdList(artist_id):
    album_id_list = []
    result = musicbrainzngs.get_artist_by_id(artist_id, includes=["release-groups"], release_type=["album"])
    for release_group in result["artist"]["release-group-list"]:
        album_id_list.append(release_group['id']);
    return album_id_list;


def getAlbumInfo(album_id, artist_name):
    result = musicbrainzngs.get_release_group_by_id(album_id, includes=['artists']);
    # print(json.dumps(result, indent=4, sort_keys=True));

    album_name   = result['release-group']['title'];
    release_date = result['release-group']['first-release-date'];
    album_type   = "";
    if('secondary-type-list' in result['release-group']):
        if(len(result['release-group']['secondary-type-list']) > 0):
            album_type = result['release-group']['secondary-type-list'][0];
        else:
            album_type = "Studio Album";
    else:
        album_type = "Studio Album";


    wiki_id = getAlbumWikiId(album_name);

    ret = {
        'title': album_name,
        'wiki_id': wiki_id,
        'mb_id': album_id,
        'release_date': release_date,
        'type': album_type,
        'artist_name': artist_name
    }
    print("Getting Album Info For \""+album_name+"\"");
    return ret;


#
# ARTIST FUNCTIONS
#
def getArtistMbId(artist_name):
    result = musicbrainzngs.search_artists(artist=artist_name);
    
    if(len(result['artist-list']) > 0):
        return result['artist-list'][0]['id'];
    else:
        return "";


def getArtistWikiId(artist_name):
    data = {
        'action'  : 'query',
        'list'    : 'search',
        'srsearch': artist_name,
        'format'  : 'json'
    }
    wiki_request = requests.get('https://en.wikipedia.org/w/api.php', params=data);
    wiki_result  = wiki_request.json();
    # print(json.dumps(wiki_result, indent=4, sort_keys=True));
    wiki_id = wiki_result['query']['search'][0]['pageid'];
    return str(wiki_id);


def getArtistInfo(artist_name, genre):
    print("\nGetting Artist Info For \""+artist_name+"\"");
    mb_id = getArtistMbId(artist_name);
    wiki_id = getArtistWikiId(artist_name);
    
    ret = {
        'wiki_id': wiki_id,
        'mb_id': mb_id,
        'name': artist_name,
        'genre': genre
    }

    return ret;

#
# SQL FUNCTIONS
#
def createInsertStatements(artist_info, album_info_list):
    lines = [];

    artist_insert = "INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES (\""+artist_info['wiki_id']+"\", \""+artist_info['mb_id']+"\", \""+artist_info['name']+"\", (SELECT id FROM GENRE WHERE GENRE.name=\""+artist_info['genre']+"\"));";
    
    lines.append(artist_insert);

    for a_info in album_info_list:
        cur_insert = "INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES (\""+a_info['wiki_id']+"\", \""+a_info['mb_id']+"\", \""+a_info['title']+"\", (SELECT id FROM ARTIST WHERE name=\""+a_info['artist_name']+"\"), \""+a_info['release_date']+"\", \""+a_info['type']+"\");";
        lines.append(cur_insert);

    return lines;


#
# OPERATION for ^
#
def nameListToSQL(name_filename, out_fn):
    create_outfile = open(out_fn, "w");
    create_outfile.write("\n");
    create_outfile.close();

    name_array = [];
    with open(name_filename, "r") as ins:
        for line in ins:
            name_array.append(line.rstrip());

    for name in name_array:
        name_genre = name.split(',');

        cur_artist_info = getArtistInfo(name_genre[0], name_genre[1]);

        album_list = getAlbumIdList(cur_artist_info['mb_id']);

        album_info_arr = []

        for cur_id in album_list:
            cur_album_info = getAlbumInfo(cur_id, name_genre[0]);
            album_info_arr.append(cur_album_info);

        to_write = createInsertStatements(cur_artist_info, album_info_arr);

        out = open(out_fn, "a");
        for line in to_write:
            try:
                out.write(line + '\n');
            except UnicodeEncodeError:
                print("Unicode Err");
                raw = line.replace(u'’', u"'");
                out.write(raw.encode("utf-8") + '\n');
                #print(line);

        out.write("\n");
        out.close();

#########################################################

def getArtistIdListFromDb():
    mydb = mysql.connector.connect(
      host="mysql.studynoteswap.com",
      user="jevsadmin",
      passwd="Harley0727",
      database='jevs_music_db'
    )

    mycursor = mydb.cursor()
    mycursor.execute("SELECT mb_id FROM ARTIST")
    myresult = mycursor.fetchall()

    for x in myresult:
      print(x)

#
# OPERATION for ^
#
def update():
    getArtistIdListFromDb();


#
# RATE ALBUMS
#
def getUnratedAlbums():
    mydb = mysql.connector.connect(
      host="mysql.studynoteswap.com",
      user="jevsadmin",
      passwd="Harley0727",
      database='jevs_music_db'
    )

    mycursor = mydb.cursor();
    mycursor.execute("SELECT * FROM ALBUM INNER JOIN ARTIST ON ALBUM.artist_id=ARTIST.id WHERE ALBUM.rating=0 ORDER BY RAND()");
    myresult = mycursor.fetchall();

    return myresult;


def rateAlbums(out_fn):
    res = getUnratedAlbums();

    for x in res:
        a_id = x[0];
        title = x[3];
        a_type = x[6];
        artist = x[12];

        album_str = "\n"+ title + ' - ' + artist + ' ['+a_type+']';
        print(album_str);

        exit_bool = False;

        while not exit_bool:
            user_rate = str(input("Rate this album? > "));

            if(user_rate == "y"):
                print("Rate.");
                comment = str(input("Comments > "));
                rating  = str(input("Rating (out of 100) > "));
                addUpdateStatement(out_fn, a_id, comment, rating);
                exit_bool = True;
            elif(user_rate == ""):
                print("Skipped.");
                exit_bool = True;
            elif(user_rate == "exit"):
                print("Goodbye.");
                exit(1);
            else:
                print("Retry!!");

def addUpdateStatement(fn, album_id, comment, rating):

    query = "UPDATE ALBUM SET comments=\""+str(comment)+"\", rating="+str(rating)+" WHERE id="+str(album_id)+";";
    
    out_file = open(fn, "a");
    try:
        out_file.write(query + '\n');
    except UnicodeEncodeError:
        print("Unicode Err (Fix manually)");
        # raw = line.replace(u'’', u"'");
        # out.write(raw.encode("utf-8") + '\n');
        #print(line);
    out_file.close();


def main(args):
    arg_amt = len(args);

    if(arg_amt < 2):
        print("Invalid parameters. Run 'python script.py --help'.");
        return;

    if(args[1] == '--update'):
        #UPDATE CALL
        update();

    elif(args[1] == '--add-artists'):
        #ADD ARTISTS
        if(arg_amt != 4):
            print("Invalid parameters for [--add-artists]");
        else:
            nameListToSQL(args[2], args[3]);

    elif(args[1] == '--rate'):
        if(arg_amt != 3):
            print("Invalid parameters for [--rate]");
        else:
            rateAlbums(args[2]);
        

    elif(args[1] == '--help'):
        help_str = '''
        Usage: python script.py --[operation] [params]\n
        Operations:
        \t--update      : Checks for any new albums of artists currently in the music database. (No arguments)
        \t--add-artists : Takes a file with artist names and genres (Line format: "name,genre") and creates the
        \t                sql insert statements for that artist and all of their albums. (arg 1: filename of 
        \t                name list, arg2: output sql filename)
        \t--rate        : Goes through unrated albums and prompts you for comments and a rating (Creates update
        \t                statements) (arg 1: output sql filename)
        ''';
        print(help_str);
    else:
        print("Invalid operation. Run 'python script.py --help'.");
        return;


main(sys.argv);


