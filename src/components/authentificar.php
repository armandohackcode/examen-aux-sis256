<?php
    $email = $_POST['email'];
    $pass = sha1($_POST['password']);
    if(empty($user)){
        session_start();
        
        include('./src/components/conexion.php');
        $con = new mysqli("localhost", "admin", "admin","db_noticias");

        $sql="select nombrecompleto,correo,nivel from usuarios where correo='$email' and password='$pass'";
        //echo $sql;
         $resultado=$con->query($sql);
         if ($fila=$resultado->fetch_assoc())
         {
            echo "Bien benido ";
         	echo 'se logue con éxito';
         	echo '<div id="user">'.$fila['nombrecompleto'].'</div>   ';
         	echo '<div id="niv">'.$fila['nivel'].'</div>   ';
        
         	$_SESSION['email']=$email;
         	$_SESSION['nivel']=$fila['nivel'];
         }
         else
           {
           	echo '<div class="alert alert-danger" role="alert">
               Usuario o contraseña no validos!
             </div>';
          } 
    }
?>