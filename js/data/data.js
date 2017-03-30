
     /**
      *Global Variables
      *
      */

              video = [];
              movieCategory = [];
      	      tv_shows = [];
      	      cutCollection =[];
      	      comments = [];
      	      favourites = [];
      	      images = [];
      	      magazines = [];
              albums_collection = [];
              music = [];
      	      cat = "";

      	    /**
             * Collection of documents
             */
              myStorage = window.localStorage;
      	      watched = window.localStorage;
              session = sessionStorage.getItem('session');

      	    var  data = {"info":[

                            {
                                "cat":"Action",
                                "color":"danger",
                            },
                            {
                                "cat":"Adventure",
                                "color":"primary",
                            },
                            {
                                "cat":"Drama",
                                "color":"warning",
                            },
                            {
                                "cat":"Comedy",
                                "color":"success",
                            },
                            {
                                "cat":"Adult",
                                "color":"default",
                            },
                            {
                                "cat":"Animation",
                                "color":"info",
                            },
                            {
                                "cat":"Thriller",
                                "color":"danger"
                            },
                            {
                                "cat":"Horror",
                                "color":"warning"
                            },
                            {
                                "cat":"Fantasy",
                                "color":"success"
                            },
                            {
                                "cat":"Sci-Fi",
                                "color":"primary"
                            },
                            {
                                "cat":"Retro",
                                "color":"info"
                            },
                            {
                                "cat":"Romance",
                                "color":"danger"
                            },
                            {
                                "cat":"TV",
                                "color":"success"
                            },
                            {
                                "cat":"Documentary",
                                "color":"default"
                            }
                     ]};//end data

    /*
     *Side Navigation Documents page
     */
        var nav = [
                {
                  'class':'magazines',
                  'title':'Books ',
                  'cat':'Magazine',
                  'color':'black',
                  'fa':'fa fa-book fa-2x'
                },
                {
                 'class':'about',
                 'title':'Linux   ',
                 'cat':'Linux',
                 'color':'blue',
                 'fa':'fa fa-linux fa-2x'
                },
                {
                 'class':'android',
                 'title':'Android  ',
                 'cat':'Android',
                 'color':'green',
                 'fa':'fa fa-android'
                 },
                 {
                  'class':'glass',
                  'title':'Glass  ',
                  'cat':'Glass',
                  'color':'navy',
                  'fa':'fa fa-glass fa-2x'
                 },
                 {
                   'class':'adult',
                   'title':'Adult  ',
                   'cat':'Adult',
                   'color':'red',
                   'fa':'fa fa-venus fa-2x'
                  },
                  {
                   'class':'Python',
                   'title':'Python ',
                   'cat':'Python',
                   'color':'brown',
                   'fa':'fa fa-graduation-cap fa-2x'
                  },
                  {
                   'class':'web',
                   'title':'Web Development',
                   'cat':'Web',
                   'color':'lemon',
                   'fa':'fa fa-file-code-o fa-2x'
                 },
                 {
                  'class':'javascript',
                  'title':'JavaScript',
                  'cat':'JavaScript',
                  'color':'orange',
                  'fa':'fa fa-file-code-o fa-2x'
                },
                {
                 'class':'pc',
                 'title':'Pc',
                 'cat':'Pc',
                 'color':'#c62907',
                 'fa':'fa fa-desktop fa-2x'
                },
                {
                 'class':'health',
                 'title':'Health',
                 'cat':'Health',
                 'color':'#489365',
                 'fa':'fa fa-medkit fa-2x'
                },
                {
                 'class':'mac',
                 'title':'Mac',
                 'cat':'Mac',
                 'color':'#585f5b',
                 'fa':'fa fa-apple fa-2x'
                }
            ];



  /**
	  *Read json file and create collection that holds info about it
	  *Call build_video() function with displays video files and info about it
	  *on the page
	  */
          var loadFavourites = function(){

                favourites = [];

                var favouritesPrototype = function(){

                };

                    favouritesPrototype.prototype.user = '';
                    favouritesPrototype.prototype.loved = '';


                          $.ajax({
                                 url:'js/video/favourites.json',
                                 dataType: 'json',
                                 cache: false,
                                 success: function(data){

                                     var str = "obj";

                                   for(var x in data){

                                    var str = new favouritesPrototype();
                                        str.user = data[x].user;
                                        str.loved = data[x].loved;
                                        favourites.push(str);

                                   }
                                     favourites.reverse();
                                 },
                                 statusCode: {
                                    404: function(){
                                        alert('Problem with server, please come back later!');
                                    }
                                }
                              });
                };//end loadFavourites

        /**
         *Load Comments
         */

            var loadComments = function(){

               var commentPrototype = function(){

               };

               commentPrototype.prototype.video_id = 0;
               commentPrototype.prototype.comment = 'none';
               commentPrototype.prototype.title = 'none';
               commentPrototype.prototype.date = 'none';
               commentPrototype.prototype.comment_id = 0;
               commentPrototype.prototype.user_id = '';
               commentPrototype.prototype.movie_rating = 0;

                      $.ajax({
                             url:'js/video/comments.json',
                             dataType: 'json',
                             cache: false,
                             success: function(data){

                              var str = "obj";

                               for(var x in data){

                                  var str = new commentPrototype();
                                      str.video_id = data[x].video_id;
                                      str.comment = data[x].comment;
                                      str.title = data[x].title;
                                      str.date = data[x].date;
                                      str.comment_id = data[x].comment_id;
                                      str.user_id = data[x].user_id;
                                      str.movie_rating = data[x].movie_rating;
                                      comments.push(str);
                               };
                                 comments.reverse();
                             },
                             statusCode: {
                                404: function(){
                                    alert('Problem with server, please come back later!');
                                }
                            }
                          });
            };//end loadComments

        /**
         *Load TV Shows
         */
            var load_tvShows = function(){

                    var tvPrototype = function(){

                    };

                     tvPrototype.prototype.id = 0;
                     tvPrototype.prototype.title = 'none';
                     tvPrototype.prototype.lang = 'none';
                     tvPrototype.prototype.cat = 'none';
                     tvPrototype.prototype.date_added = 0;
                     tvPrototype.prototype.date_updated = 0;
                     tvPrototype.prototype.season =0;
                     tvPrototype.prototype.videos = '';
                     tvPrototype.prototype.image = 'none';
                     tvPrototype.prototype.des = 'none';

                 $.ajax({
                    url: 'https://api.myjson.com/bins/fxlbl',  //'json/videos.json' ==> json storage https://api.myjson.com/bins/fxlbl
                    dataType: 'json',
                    cache: false,
                    success: function(data){

                        var str = "obj";

                        for(var x in data.TV_SHOWS){
                         for(var z in data.TV_SHOWS[x].series){

                            var str = new tvPrototype();
                                str.id = data.TV_SHOWS[x].id;
                                str.title = data.TV_SHOWS[x].title;
                                str.lang = data.TV_SHOWS[x].lang;
                                str.cat = data.TV_SHOWS[x].cat;
                                str.date_added = data.TV_SHOWS[x].series[z].date_added;
                                str.date_updated = data.TV_SHOWS[x].series[z].date_updated;
                                str.season = data.TV_SHOWS[x].series[z].season;
                                str.videos = data.TV_SHOWS[x].series[z].videos;
                                str.image = data.TV_SHOWS[x].series[z].image;
                                str.des = data.TV_SHOWS[x].series[z].des;
                                tv_shows.push(str);
                          }
                        }
                    },
                    statusCode: {
                        404: function(){
                            alert('Problem with server, please come back later!');
                        }
                    }

                 });

            };//end load_tvShows

  /*
   *Load Music Tracks
   */

   var load_music = function(){

     music = [];

     var musicPrototype = function(){

     };
      musicPrototype.prototype.id = 0;
      musicPrototype.prototype.album = '';
      musicPrototype.prototype.title = '';
      musicPrototype.prototype.artist = '';
      musicPrototype.prototype.format = '';
      musicPrototype.prototype.url = '';
      musicPrototype.prototype.des = '';
      musicPrototype.prototype.image = '';
      musicPrototype.prototype.cat = '';

      $.ajax({
             url:'json/music.json',
             dataType: 'json',
             cache: false,
             success: function(data){

                 for(var x in data.music){
                   var str = new musicPrototype();
                       str.id = data.music[x].id;
                       str.album = data.music[x].album;
                       str.title = data.music[x].title;
                       str.artist = data.music[x].artist;
                       str.format = data.music[x].format;
                       str.url = data.music[x].url;
                       str.des = data.music[x].des;
                       str.image = data.music[x].image;
                       str.music = data.music[x].music;
                       str.cat = data.music[x].cat;
                       music.push(str);
                 }
                 music.reverse();
             },
             statusCode: {
                404: function(){
                    alert('Problem with server, please come back later!');
                }
            }
          });
   };//end load_music()

  /*
   *Load Music Albums
   */

    var load_albums = function(){

      albums_collection = [];

      var albumsPrototype = function(){

      };

          albumsPrototype.prototype.artist = '';
          albumsPrototype.prototype.album_title = '';
          albumsPrototype.prototype.year = '';
          albumsPrototype.prototype.image = '';
          albumsPrototype.prototype.rating = '';
          albumsPrototype.prototype.number_tracks = 0;
          albumsPrototype.prototype.path = '';
          albumsPrototype.prototype.genre = '';
          albumsPrototype.prototype.tracks = '';


                $.ajax({
                       url:'json/music.json',
                       dataType: 'json',
                       cache: false,
                       success: function(data){

                           for(var x in data.albums){
                             var str = new albumsPrototype();
                                 for(var z in data.albums[x].collection){

                                     str.artist = data.albums[x].artist;
                                     str.album_title = data.albums[x].collection[z].album_title.replace(/[0-9]/g, '');
                                     str.year = data.albums[x].collection[z].year;
                                     str.image = data.albums[x].collection[z].image;
                                     str.rating = data.albums[x].collection[z].rating;
                                     str.number_tracks = data.albums[x].collection[z].number_tracks;
                                     str.path = data.albums[x].collection[z].path;
                                     str.genre = data.albums[x].collection[z].genre;
                                     str.tracks = data.albums[x].collection[z].tracks;
                                     albums_collection.push(str);
                                  
                                 }
                               }
                           albums_collection.reverse();
                           console.log(albums_collection);
                       },
                       statusCode: {
                          404: function(){
                              alert('Problem with server, please come back later!');
                          }
                      }
                    });
    };//end load_albums()


    /**
     *Load TV Videos
     */

	   var load_videos = function(){

       videos = [];
                    var videoPrototype = function(){

                    };

                    videoPrototype.prototype.id = 0;
                    videoPrototype.prototype.drive = 'local';
                    videoPrototype.prototype.title = 'none';
                    videoPrototype.prototype.titleRu = 'none';
                    videoPrototype.prototype.format = 'none',
                    videoPrototype.prototype.url = 'none';
                    videoPrototype.prototype.des = 'none';
                    videoPrototype.prototype.desRu = 'none';
                    videoPrototype.prototype.image = 'none';
                    videoPrototype.prototype.video = 'none';
                    videoPrototype.prototype.video2 = 'none';
                    videoPrototype.prototype.cat = 'none';
                    videoPrototype.prototype.rating = 0;
                    videoPrototype.prototype.lang = 'en';
                    videoPrototype.prototype.format = 'none';
                    videoPrototype.prototype.date_added = 0;
                    videoPrototype.prototype.online = 'none';
                    videoPrototype.prototype.quality = 'none';
                    videoPrototype.prototype.director = 'none';
                    videoPrototype.prototype.imdb = [];
                    videoPrototype.prototype.player = 'none';

		 $.ajax({
			url: 'json/videos.json',  //json/videos.json ==> https://api.myjson.com/bins/fxlbl
			dataType: 'json',
      cache: true,
			success: function(data){

                    var str = "obj";

			        for(var x in data.video){


                        var str = new videoPrototype();
                            str.id = data.video[x].id;
                            str.drive = data.video[x].drive;
                            str.title = data.video[x].title;
                            str.titleRu = data.video[x].titleRu;
                            str.format = data.video[x].format;
                            str.url = data.video[x].url;
                            str.des = data.video[x].des;
                            str.desRu = data.video[x].desRu;
                            str.image = data.video[x].image;
                            str.video = data.video[x].video;
                            str.video2 = data.video[x].video2;
                            str.cat = data.video[x].cat;
                            str.rating =data.video[x].rating;
                            str.lang = data.video[x].lang;
                            str.format = data.video[x].format;
                            str.date_added = data.video[x].date_added;
                            str.online = data.video[x].online;
                            str.quality = data.video[x].quality;
                            str.director = data.video[x].director;
                            str.imdb = [data.video[x].imdb];
                            str.player = data.video[x].player;
                            video.push(str);

			        }
			},
			statusCode: {
				404: function(){
					alert('Problem with server, please come back later!');
				}
			}
		});//end ajax
	};//end load_videos()

        /*
         *Load Books / Journals
         */

         var loadMagazines = function(){

           magazines = [];

           var magazinePrototype = function(){

           };
              magazinePrototype.prototype.id = 0;
              magazinePrototype.prototype.title = '';
              magazinePrototype.prototype.format = 'PDF';
              magazinePrototype.prototype.year = 0;
              magazinePrototype.prototype.month = '';
              magazinePrototype.prototype.category = '';
              magazinePrototype.prototype.author = '';
              magazinePrototype.prototype.rating = 1;
              magazinePrototype.prototype.publisher = '';
              magazinePrototype.prototype.url = '';
              magazinePrototype.prototype.image = '';
              magazinePrototype.prototype.torrent = '';
              magazinePrototype.prototype.count = 0;
              magazinePrototype.prototype.countClicks = function(){var count = this.count; count += 1; this.count = count};
              magazinePrototype.prototype.date = '';
              magazinePrototype.prototype.open = function(){var date = new Date(); this.date = date;};

                $.ajax({
                        url: 'json/documents.json',
                        dataType: 'json',
                        cache: false,
                        success: function(data){

                        var str = 'obj';
                                for(var x in data.document){

                                    str = new magazinePrototype();
                                    str.id = data.document[x].id;
                                    str.title = data.document[x].title;
                                    str.format = data.document[x].format;
                                    str.year = data.document[x].year;
                                    str.month = data.document[x].month;
                                    str.category = data.document[x].category;
                                    str.author = data.document[x].author;
                                    str.rating = data.document[x].rating;
                                    str.publisher = data.document[x].publisher;
                                    str.url = data.document[x].url;
                                    str.image = data.document[x].image;
                                    str.torrent =data.document[x].torrent;
                                    str.count = 0;
                                    str.countClicks = function(){var count = this.count; count+= 1; this.count = count;};
                                    str.date = '';
                                    str.open = function(){var date = new Date(); this.date = date;};
                                    magazines.push(str);
                                }

                        },
                        statusCode: {
                            404: function(){
                                alert('Problem with server, please come back later!');
                            }
                        }
                    });//end ajax

         };//end loadMagazines


	    /*
         *Load Images
         */

        var loadImages = function(){

            images = [];
            var imagePrototype = function(){

                        };

                imagePrototype.prototype.name = '';
                imagePrototype.prototype.path = '';
                imagePrototype.prototype.year = 0;
                imagePrototype.prototype.occasion = '';
                imagePrototype.prototype.people = '';
                imagePrototype.prototype.city = '';
                imagePrototype.prototype.country = '';
                imagePrototype.prototype.cat = '';
                imagePrototype.prototype.numberOfFiles = 0;
                imagePrototype.prototype.image = '.JPG';

                   $.ajax({
                        url: 'json/images.json',
                  			dataType: 'json',
                        cache: false,
                  			success: function(data){

                                for(var x in data.gallery){

                                    var count = data.gallery[x].numberOfFiles;
                                    var image = ".JPG";

                                    for(var t = 1; t < count; t++){

                                        var str = new imagePrototype();
                                            str.name = data.gallery[x].name;
                                            str.path = data.gallery[x].path;
                                            str.year = data.gallery[x].year;
                                            str.occasion = data.gallery[x].occasion;
                                            str.people = data.gallery[x].people;
                                            str.city = data.gallery[x].city;
                                            str.country = data.gallery[x].country;
                                            str.cat = data.gallery[x].cat;
                                            str.numberOfFiles = data.gallery[x].numberOfFiles;
                                            str.image = t + image;
                                            images.push(str);
                                    }
                                }
            			}
                    });//end ajax

        };//end loadImages
