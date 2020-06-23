<?php

/*if (isset($_POST['submit'])) {
  echo htmlspecialchars($_POST['name'])."\n\n";
  echo htmlspecialchars($_POST['email'])."\n\n";
  echo htmlspecialchars($_POST['message'])."\n\n";

  
}*/

include('Config/db_connect.php');

//$conn = mysqli_connect('localhost', 'Emanuel', 'Chevy7131', 'my_website');

$email = mysqli_real_escape_string($conn, $_POST['email']);
$name = mysqli_real_escape_string($conn, $_POST['name']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

//Create a SQL

$sql = "INSERT INTO contact_form(Name, Email, Message) VALUES('$name', '$email', '$message')";

//Save to DB and check

if(mysqli_query($conn, $sql)){
  //Success
  header('Location: index.php');
} else {
  echo 'query error ' . mysqli_error($conn);
}

?>