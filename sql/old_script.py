import requests;
import unicodedata;
import json;
import sys;
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
        'srsearch': album_name,
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


def getAlbumList(artist_id):
    album_list = {
        "title" : [],
        "id"    : []
    }
    headers = {'Application': 'jevsMusicDB/<0.0.1> (jordanevans5588@gmail.com)'}
    r = requests.get('http://musicbrainz.org/ws/2/release-group/?query=arid:'+artist_id+'%20AND%20type:album&fmt=json', headers=headers);
    r_json = r.json();

    result_count = r_json['count'];
    call_amt     = result_count // 25;
    
    i = 0;
    while(i <= call_amt):
        offset_val = i * 25;

        cur_request = requests.get('http://musicbrainz.org/ws/2/release-group/?query=arid:'+artist_id+'%20AND%20type:album&offset='+str(offset_val)+'&fmt=json', headers=headers);
        cur_result  = cur_request.json();

        j = 0;
        while(j < len(cur_result['release-groups'])):
            album_list['title'].append(cur_result['release-groups'][j]['title']);
            album_list['id'].append(cur_result['release-groups'][j]['id']);
            j += 1;
        
        i += 1;

    return album_list;


def getAlbumInfo(album_id, album_name, artist_name):
    print("Getting Album Info For \""+album_name+"\"");
    
    wiki_id = getAlbumWikiId(album_name);

    headers = {'Application': 'jevsMusicDB/<0.0.1> (jordanevans5588@gmail.com)'}
    album_request = requests.get('http://musicbrainz.org/ws/2/release-group/'+album_id+'?inc=artist-credits&fmt=json', headers=headers);
    album_result  = album_request.json();
    release_date = "";
    if 'first-release-date' in album_result:
        release_date = album_result['first-release-date'];
    else:
        print(json.dumps(album_result, indent=4, sort_keys=True));

    album_type = "";
    if(len(album_result['secondary-types']) == 0):
        album_type = "Album"
    else:
        album_type = album_result['secondary-types'][0];

    ret = {
        'title': album_name,
        'wiki_id': wiki_id,
        'mb_id': album_id,
        'release_date': release_date,
        'type': album_type,
        'artist_name': artist_name
    }

    return ret;


#
# ARTIST FUNCTIONS
#
def getArtistMbId(artist_name):

	result = musicbrainzngs.search_artists(artist=artist_name);
	for artist in result['artist-list']:
	    print(u"{id}: {name}".format(id=artist['id'], name=artist["name"]))
	    
    headers = {'Application': 'jevsMusicDB/<0.0.1> (jordanevans5588@gmail.com)'}
    artist_request = requests.get('http://musicbrainz.org/ws/2/artist/?query=artist:'+artist_name.replace(' ', '%20')+'&fmt=json', headers=headers);
    artist_result  = artist_request.json();
    # print(json.dumps(artist_result, indent=4, sort_keys=True));
    artist_id = artist_result['artists'][0]['id'];
    return artist_id;

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

    artist_insert = "INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ('"+artist_info['wiki_id']+"', '"+artist_info['mb_id']+"', '"+artist_info['name']+"', (SELECT id FROM GENRE WHERE GENRE.name='"+artist_info['genre']+"'));";
    
    lines.append(artist_insert);

    for a_info in album_info_list:
        cur_insert = "INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ('"+a_info['wiki_id']+"', '"+a_info['mb_id']+"', '"+a_info['title']+"', (SELECT id FROM ARTIST WHERE name='"+a_info['artist_name']+"'), '"+a_info['release_date']+"', '"+a_info['type']+"');";
        lines.append(cur_insert);

    return lines;



def main(name_filename, out_fn):
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

        album_list = getAlbumList(cur_artist_info['mb_id']);

        album_info_arr = []

        for i in range(0, len(album_list['id'])):
            cur_album_info = getAlbumInfo(album_list['id'][i], album_list['title'][i], name_genre[0]);
            album_info_arr.append(cur_album_info);

        to_write = createInsertStatements(cur_artist_info, album_info_arr);

        out = open(out_fn, "a");
        for line in to_write:
            try:
                out.write(line + '\n');
            except UnicodeEncodeError:
                print(line);

        out.write("\n");
        out.close();


main(sys.argv[1], sys.argv[2]);
