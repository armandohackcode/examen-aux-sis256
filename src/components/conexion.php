<?php
$con = new mysqli("localhost", "admin", "admin","db_noticias");
if ($con->connect_error)
 die ("conexion fallada".$con->connect_error);

?> 