<?php

  //Connect to database.

  $conn = mysqli_connect('localhost', 'Emanuel', 'Chevy7131', 'my_website');

  //Check connection.

  if(!$conn){
    echo 'Connection error: '.mysqli_connect_error();
  }

?>