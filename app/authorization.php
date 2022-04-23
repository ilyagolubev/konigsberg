<?php
session_start();
$login=$_POST['login'];
$pas=$_POST['password'];
$db=mysqli_connect('localhost', 'root', '', 'konigsberg');
$query="SELECT * FROM users WHERE login='$login' AND BINARY password='$pas'";
$queryq=mysqli_query($db, "SELECT * FROM users WHERE login='$login' AND BINARY password='$pas'");
$result=mysqli_query($db, $query);
$resultq = mysqli_fetch_array($queryq);

         if (mysqli_num_rows($result))
$_SESSION['login']=$login;
else
$_SESSION['login']='er login';
header("Location: index.php");

    if ($login == $resultq['login']) {
        $queryLogin = mysqli_query($db, "SELECT * FROM users WHERE login = '$login'");
    while($resultLogin = mysqli_fetch_array($queryLogin)){
        if (mysqli_num_rows($result))
        $_SESSION['login']=$login;
        else
        $_SESSION['login']='er login';
        header("Location: profile.php?edit_id=".$resultLogin['id']."");
}
    }
mysqli_close($db);
?>