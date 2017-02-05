<?php

   $myFile = "comments.json";
   $arr_data = array(); // create empty array

  try
  {
	   //Get form data

	   //Get form data
       $formdata = array(
          'video_id'=> $_POST['video_id'],
          'comment'=> $_POST['comment'],
          'title'=> $_POST['title'],
          'date'=> htmlentities($_POST['date']),
          'comment_id'=> $_POST['comment_id'],
          'user_id'=> $_POST['user_id'],
          'movie_rating'=> $_POST['movie_rating']
       );

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo 'Data successfully saved';
	        //header("Location: ../../video.html");
	       // exit;
	    }
	   else{
	        echo "error";
       }
   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>