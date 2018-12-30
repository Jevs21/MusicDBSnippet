
INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("54318036", "3ac96b4c-4f42-48c8-b793-84dbf54d7ac6", "Brockhampton", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("54979256", "5417e003-d352-4a69-b4dc-6cc85e9edac2", "SATURATION II", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2017-08-25", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("58286927", "54a385ba-1bc0-448a-bc59-b85914355060", "iridescence", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2018-09-21", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("55028548", "56be3edf-c1a9-4727-ab74-0b68c37facc2", "SATURATION I II III", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2017-12-15", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("55028548", "90f67573-cb0b-4208-b714-2f21454a363a", "SATURATION III", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2017-12-15", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("41676", "dbce2564-724f-412b-8503-2cfb06729f9d", "SATURATION", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2017-06-09", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("54318036", "fe21df6a-90ab-4d7b-82b8-78985effccee", "All-American Trash", (SELECT id FROM ARTIST WHERE name="Brockhampton"), "2016-04-03", "Mixtape/Street");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("53594450", "2f3c4d70-0462-40da-bba3-0aec5772c556", "Cardi B", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("56217125", "1e849968-daf8-42aa-85ad-6f703323bf7b", "Gangsta Bitch Music, Vol. 1", (SELECT id FROM ARTIST WHERE name="Cardi B"), "2016-03-07", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("56951898", "45c6de75-bea5-4dd9-a912-55fb9497c3fc", "Invasion of Privacy", (SELECT id FROM ARTIST WHERE name="Cardi B"), "2018-04-05", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("56217125", "6ad75aa2-2523-48b8-ad77-e1366bcffb91", "Gangsta Bitch Music, Vol. 2", (SELECT id FROM ARTIST WHERE name="Cardi B"), "2017-01-20", "Mixtape/Street");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("43576183", "dc329a4a-1d76-469c-ba08-c9a28e69a866", "Cozz", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("56495564", "2a82654a-f7dd-4403-8130-675d492fc2db", "Effected", (SELECT id FROM ARTIST WHERE name="Cozz"), "2018-02-13", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("48902036", "4f56d654-3050-4418-a624-f0fb106223f7", "Nothin Personal", (SELECT id FROM ARTIST WHERE name="Cozz"), "2016-01-04", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("46402105", "c921f2cb-5ffa-468d-88b7-393193cd0809", "Cozz & Effect", (SELECT id FROM ARTIST WHERE name="Cozz"), "2014-10-03", "Studio Album");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("4429395", "b95ce3ff-3d05-4e87-9e01-c97b66af13d4", "Eminem", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("11937084", "03508b88-5857-49b5-9f37-61f77250d727", "Eminem & Friends: Game Over Sessions", (SELECT id FROM ARTIST WHERE name="Eminem"), "2005-08-30", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("151497", "09bdf667-357f-48d4-a72c-1ac6d8860a42", "Mathers Massacre", (SELECT id FROM ARTIST WHERE name="Eminem"), "2013-07-08", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("2294060", "25fa1b75-421e-4ce3-9689-ed1d4a97b700", "The Marshall Mathers LP (Slowed & Chopped)", (SELECT id FROM ARTIST WHERE name="Eminem"), "2000", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("956310", "38a1cae8-d480-3a44-835a-19b0fe768813", "Encore", (SELECT id FROM ARTIST WHERE name="Eminem"), "2004-11-12", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("19043622", "3a08ad72-b9da-35d6-b39e-63d10d878959", "Off the Wall", (SELECT id FROM ARTIST WHERE name="Eminem"), "2000-12-01", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("10073112", "623f9c6b-e665-4a36-8c44-6d88ed215101", "Unmastered Sequence", (SELECT id FROM ARTIST WHERE name="Eminem"), "1999", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("151497", "6c69085f-d4db-47a4-8ee1-b5e53691feeb", "Marshall's Law", (SELECT id FROM ARTIST WHERE name="Eminem"), "2014-04-29", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("52441225", "715be5e7-3677-35c0-a39a-abf300ff9ba1", "Infinite", (SELECT id FROM ARTIST WHERE name="Eminem"), "1996-11-12", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("38309771", "73ccdc34-3877-4509-9d82-8a6fe9941957", "Whiteboy Wasted", (SELECT id FROM ARTIST WHERE name="Eminem"), "2011-09-25", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("151497", "76f259e7-b81d-3e96-8185-d15629a80445", "Fucking Crazy", (SELECT id FROM ARTIST WHERE name="Eminem"), "2000", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("470178", "78630ee5-f28d-412b-8057-9829dddc9219", "Double", (SELECT id FROM ARTIST WHERE name="Eminem"), "2004", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("19444288", "7c5968db-8ab0-4977-bae6-3bacd8b03b57", "Detroit King", (SELECT id FROM ARTIST WHERE name="Eminem"), "2015", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("182021", "7ec0ac2d-1b8b-4283-ad2f-d4d9cb6b6249", "Shady Situation", (SELECT id FROM ARTIST WHERE name="Eminem"), "2010", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("58343260", "802d62ee-65c3-4666-8f47-44844321a6a0", "Kamikaze", (SELECT id FROM ARTIST WHERE name="Eminem"), "2018-08-31", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("21830970", "a5056c3b-730f-493b-b10e-52f678d72b85", "Recovery", (SELECT id FROM ARTIST WHERE name="Eminem"), "2010-06-18", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("151497", "b0fa91c8-0996-38f1-ab84-797f58d7c4eb", "The Marshall Mathers LP", (SELECT id FROM ARTIST WHERE name="Eminem"), "2000-05-22", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("37474878", "b1fdc9cc-8680-44da-abab-59edca6b2ad3", "The Marshall Mathers LP 2", (SELECT id FROM ARTIST WHERE name="Eminem"), "2013-09-20", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("182021", "be725de4-4633-3c8a-9a03-f2c4392b6e0d", "The Slim Shady LP", (SELECT id FROM ARTIST WHERE name="Eminem"), "1999-02-23", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("10073112", "cbaa675f-0d6d-45cc-8b06-1e9f94cc896c", "Unmastered Sequence", (SELECT id FROM ARTIST WHERE name="Eminem"), "1999", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("55626713", "cfc62e61-686c-46cd-a453-608979646f71", "Revival", (SELECT id FROM ARTIST WHERE name="Eminem"), "2017-12-15", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("23110428", "dc5dacf7-9347-4685-ad13-1ab50e252a6e", "Encore (Instrumentals)", (SELECT id FROM ARTIST WHERE name="Eminem"), "2004", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("63480", "e9585ed4-d148-3711-bbee-55a97b58325a", "The Eminem Show", (SELECT id FROM ARTIST WHERE name="Eminem"), "2002-05-27", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("11937084", "ea1d0073-b586-3545-8607-f2632d53b0c0", "Relapse", (SELECT id FROM ARTIST WHERE name="Eminem"), "2009-05-15", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("21277532", "f4ce6f2d-c2c3-44bc-b359-362130d02e1e", "The Underground Collection", (SELECT id FROM ARTIST WHERE name="Eminem"), "2004", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("34210", "f8560693-3b90-44cf-936a-53e09b8ad4b6", "The Freestyle Show", (SELECT id FROM ARTIST WHERE name="Eminem"), "2002", "Studio Album");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("31004243", "e520459c-dff4-491d-a6e4-c97be35e0044", "Frank Ocean", (SELECT id FROM GENRE WHERE GENRE.name="R&B"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("200020", "0da340a0-6ad7-4fc2-a272-6f94393a7831", "Blonde", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2016-08-20", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("31004243", "143eb007-3c7f-4bf7-ae20-f1e3f8269035", "The Lonny Breaux Collection", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2012", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("7758365", "1a75468e-b63c-45ee-8824-ac61b21bffe8", "unreleased, MISC.", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2013", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("12587230", "59d84657-3381-4db8-a36c-a6cdf86d526c", "Dream Killa", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2011-09-02", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("3181387", "b08e36e5-762e-4e81-81bd-0ea49996e461", "undocumented, RARE.", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2017", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("29421293", "b69366e3-8145-405e-9220-c0a575f23474", "Endless", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2016-08-19", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("31623818", "c2dde373-d47b-45a9-8b7e-0a9f5f011ed4", "nostalgia,ULTRA.", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2011-03-24", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("36086750", "f8f4167d-897c-4b25-a171-638374d1dfa4", "Channel Orange", (SELECT id FROM ARTIST WHERE name="Frank Ocean"), "2012-07-10", "Studio Album");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("163103", "48262e82-db9f-4a92-b650-dfef979b73ec", "Future", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("23865343", "3dd5b469-9358-4ccf-a5fe-35b1634777d6", "Monster", (SELECT id FROM ARTIST WHERE name="Future"), "2015-05-12", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("55578192", "448b222c-62e9-4914-b17d-dde87c4bc674", "SUPER SLIMEY", (SELECT id FROM ARTIST WHERE name="Future"), "2017-10-20", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("56307593", "578808db-949d-40df-931e-a7cc0abb6b3f", "The Movie", (SELECT id FROM ARTIST WHERE name="Future"), "2013-01-15", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("35172181", "5dde348f-b9f0-461d-aa72-2a7582bc0218", "Freebricks", (SELECT id FROM ARTIST WHERE name="Future"), "2011-06-04", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("58824928", "62ffd2e4-6dec-4154-86d7-2356a4f5fc26", "Project E.T. Esco Terrestrial", (SELECT id FROM ARTIST WHERE name="Future"), "2016-06-24", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47763823", "6be82a22-a9b2-4c04-8dcd-da45db560515", "True Story", (SELECT id FROM ARTIST WHERE name="Future"), "2011-06-09", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("57839637", "6d243760-f8e5-4f7f-a0b4-76d1fc9d1266", "BEASTMODE 2", (SELECT id FROM ARTIST WHERE name="Future"), "2018-07-06", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("49320790", "82dad51c-9403-416f-9e2f-88482a5114b9", "EVOL", (SELECT id FROM ARTIST WHERE name="Future"), "2016-02-06", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("35187708", "8ec38ab1-27a9-481d-a55b-2684c5ef8352", "Pluto", (SELECT id FROM ARTIST WHERE name="Future"), "2012-04-12", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("53190330", "98c84b94-3445-4dcc-ad01-9e5e3e1271e2", "Future", (SELECT id FROM ARTIST WHERE name="Future"), "2017-02-17", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47093343", "9ac43ae5-c0de-42f6-8365-b68de4966833", "DS2", (SELECT id FROM ARTIST WHERE name="Future"), "2015-07-17", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47863261", "a2e3ca75-1e07-457b-973a-069e8d9c6c56", "What a Time to Be Alive", (SELECT id FROM ARTIST WHERE name="Future"), "2015-09-20", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47093343", "a44641ec-bfd6-45c2-ab2e-cc98c4107f73", "Dirty Sprite", (SELECT id FROM ARTIST WHERE name="Future"), "2011-01-11", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("1032697", "a8c3a68f-2f87-4301-b0b5-4ea4a3130d4b", "Codeine Astronauts, Volume 2", (SELECT id FROM ARTIST WHERE name="Future"), "2012-09-11", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("49130738", "ab734858-6d73-45cf-bb6e-f7afbe0a7c8e", "Purple Reign", (SELECT id FROM ARTIST WHERE name="Future"), "2016-01-16", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("5164500", "bbd50b67-b1bd-47b8-9a4c-ad84fca62a7e", "Streetz Calling", (SELECT id FROM ARTIST WHERE name="Future"), "2011-09-11", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("36033328", "bc4d0974-32ea-46b5-80e3-d59ca8b330ff", "Astronaut Status", (SELECT id FROM ARTIST WHERE name="Future"), "2012-01-12", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47498547", "c61031a8-5cdc-476c-b20f-d061439965d4", "Beast Mode", (SELECT id FROM ARTIST WHERE name="Future"), "2015-01-15", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("45609408", "ccaf2862-59ca-4170-aa07-9c929569aa65", "56 Nights", (SELECT id FROM ARTIST WHERE name="Future"), "2015-03-20", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("23865343", "cea00e8a-ed12-4baf-b3c6-2e60225b07c9", "Monster", (SELECT id FROM ARTIST WHERE name="Future"), "2014-10-28", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("52290206", "e1a3d167-73a5-4096-a194-82483a139c25", "Free Bricks 2 (Zone 6 Edition)", (SELECT id FROM ARTIST WHERE name="Future"), "2016-11-14", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("670013", "e31d8b44-af35-4f8b-8386-d3155d1a71db", "Dirty VII$N", (SELECT id FROM ARTIST WHERE name="Future"), "2015-08-22", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("40179756", "e49e28c6-e228-4c35-808c-bd977b268def", "Honest", (SELECT id FROM ARTIST WHERE name="Future"), "2014-04-22", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("53269451", "ecd7a38f-4ffc-4489-903b-955fdd6dec0f", "HNDRXX", (SELECT id FROM ARTIST WHERE name="Future"), "2017-02-24", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("341134", "edc0532d-d32a-4a89-887d-20a1b22a1952", "Playa Chronicles (Chapter 2)", (SELECT id FROM ARTIST WHERE name="Future"), "2015-09-09", "Mixtape/Street");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("12217789", "ddce4f6c-d2a5-4e59-845c-a50f60c8ec05", "Gallant", (SELECT id FROM GENRE WHERE GENRE.name="R&B"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("50068160", "8071e7be-0213-4fd3-a4a3-c97888069afd", "Ology", (SELECT id FROM ARTIST WHERE name="Gallant"), "2016-04-06", "Studio Album");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("23306612", "875203e1-8e58-4b86-8dcb-7190faf411c5", "J Cole", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("57152921", "16cc33ac-c71a-4be9-a42d-cdf75995156e", "KOD", (SELECT id FROM ARTIST WHERE name="J Cole"), "2018-04-20", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("30927651", "2db2b64b-03e6-4961-b99b-ecf604217fb3", "The Genesis Of Cole", (SELECT id FROM ARTIST WHERE name="J Cole"), "2010-11", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("37997750", "57db9419-f0a0-4060-8003-b7737b9dab4d", "Born Sinner", (SELECT id FROM ARTIST WHERE name="J Cole"), "2013-06-14", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("44425475", "5995738d-4b6f-4db6-847b-310a9dc67085", "2014 Forest Hills Drive", (SELECT id FROM ARTIST WHERE name="J Cole"), "2014-09-14", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("27914702", "5aadf6f8-bbf7-4675-8b83-771c1e0fb08f", "Cole World: The Sideline Story", (SELECT id FROM ARTIST WHERE name="J Cole"), "2011-09-26", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("613669", "779b58aa-a7df-426e-bf0e-4427c837b621", "The Blow Up", (SELECT id FROM ARTIST WHERE name="J Cole"), "2010-07", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("33585777", "7fbb5ce2-39bd-48ce-bb3c-f39ce4bb0434", "Roc Nation 2011", (SELECT id FROM ARTIST WHERE name="J Cole"), "2011", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("613669", "9a74836d-66c6-4da5-85bb-07d0563f2a68", "The Blow Up", (SELECT id FROM ARTIST WHERE name="J Cole"), "2010", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("27482770", "a6e07e03-d35c-4e00-b594-df686dca9f40", "The Warm Up", (SELECT id FROM ARTIST WHERE name="J Cole"), "2009-06-15", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("52444110", "acd4faf8-73c4-41f2-906d-e0d014d7e863", "4 Your Eyez Only", (SELECT id FROM ARTIST WHERE name="J Cole"), "2016-12-09", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("27485911", "bcb13924-0767-4071-8af9-0906ce5793eb", "The Come Up", (SELECT id FROM ARTIST WHERE name="J Cole"), "2007", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("49245490", "dce1ac63-868b-41f2-abdb-8c69b3935628", "Forest Hills Drive: Live from Fayetteville, NC", (SELECT id FROM ARTIST WHERE name="J Cole"), "2016-01-28", "Live");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("29443750", "ed9d4684-203a-4a51-8c1b-a31974caa512", "Friday Night Lights", (SELECT id FROM ARTIST WHERE name="J Cole"), "2010-11-12", "Mixtape/Street");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("21429855", "9880800a-f6f8-4f8f-a00e-b4b664776c0c", "Jay Rock", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47495546", "0f2e5a30-1ace-44dd-802f-a2d35c4d4366", "Coming Soon 2 a Hood Near You", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2009-02-09", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("28134643", "14ebf563-ebc8-472f-9fd9-e0088fcec37f", "Follow Me Home", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2011-07-26", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("32310764", "166132b8-9bf2-46c4-b71c-aa432067826d", "Watts Finest, Vol. I", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2006-05-18", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("57479642", "2fb24ecb-761a-43c6-ac4f-7e085d490963", "Redemption", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2018-06-15", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("21429855", "5d0d508e-0869-4134-8a06-344911192db9", "From Hood Tales to the Cover of XXL", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2010-03-22", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("53816380", "5fa357d2-ad08-42c3-b8ef-beff26f2b4b1", "Watts Finest, Vol. III: The Watts Riots", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2007-05-12", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47453914", "64c2f0c7-52f0-4c28-bdde-252d706b9f33", "90059", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2015-09-11", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("36197760", "76987bdb-989b-4f6a-a47e-ef300f7a28d3", "No Sleep 'Til NYC", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2008-06-15", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("10972664", "a3ee72b1-ff0e-44c3-ba86-e07a70417bec", "Gudda Muzik", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2009-05-26", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("47495546", "a69c83ca-3f2d-4ab5-8625-876bc46fb9f1", "Coming Soon to a Hood Near You", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2008-08-06", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("21000624", "c8279a97-5c55-4267-a0ef-d892e94329a9", "Black Friday", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2010-11-26", "Mixtape/Street");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("36352566", "d7066e32-b19a-412c-ae85-6269b19afcb2", "Two Black Hippy", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2014-09-15", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("32310764", "de21b5bc-0f24-4709-b65c-83dc0abf5326", "Watts Finest, Vol. II: The Nickerson Files", (SELECT id FROM ARTIST WHERE name="Jay Rock"), "2006-09-06", "Mixtape/Street");

INSERT INTO ARTIST (wiki_id, mb_id, name, genre_id) VALUES ("162870", "f82bcf78-5b69-4622-a5ef-73800768d9ac", "Jay Z", (SELECT id FROM GENRE WHERE GENRE.name="Rap"));
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("518542", "11ae8c9c-27c1-3308-9761-edb87c8f54ea", "The Blueprint", (SELECT id FROM ARTIST WHERE name="Jay Z"), "2001-09-11", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("1702875", "161045e9-f136-42c7-9b2e-40e6ee30a980", "Run the Map", (SELECT id FROM ARTIST WHERE name="Jay Z"), "2016", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("5097928", "1b97fe26-be57-3589-9138-1bd3611d166c", "Unfinished Business", (SELECT id FROM ARTIST WHERE name="Jay Z"), "2004-10-26", "Studio Album");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("25780790", "1f9bbf45-564c-36e9-be15-afbab71bfb18", "The Best of J. Hova", (SELECT id FROM ARTIST WHERE name="Jay Z"), "2003", "Compilation");
INSERT INTO ALBUM (wiki_id, mb_id, title, artist_id, release_date, type) VALUES ("22201416", "2a22728c-b7ac-3832-aa71-8199704d30d1", "The Hits & Unreleased, Volume 1", (SELECT id FROM ARTIST WHERE name="Jay Z"), "2001", "Compilation");