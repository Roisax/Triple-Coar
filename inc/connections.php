<?php

$conn = mysqli_connect('localhost', 'root', '', '3coar_db');
if(!$conn){
    die('Error ' .mysqli_connect_error());
}
else{
    echo 'Welcome:)';
}
