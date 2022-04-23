	<?php session_start();?>
  <?php
  $db=mysqli_connect('localhost', 'root', '', 'konigsberg');
if($_GET['edit_id']){
    $id = $_GET['edit_id'];
    $query = mysqli_query($db, "SELECT * FROM users WHERE id = '$id'");
    $result = mysqli_fetch_array($query);
    $login = $result['login'];
    $password = $result['password'];
}
if(!empty($_POST['login'])and
    !empty($_POST['password'])){
    $log = $_POST['login'];
    $pass = $_POST['password'];
    $update = mysqli_query($db, "UPDATE users SET login = '$log', password = '$pass' WHERE id = '$id'");
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
    }
if((empty($_POST['login'])or
    empty($_POST['password']))and
    !empty($_POST)){
    
    }
// Показываем форму если она пустая
if(empty($_POST['login'])or
    empty($_POST['password'])){
    }
 ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Личный кабинет</title>
  <link rel="stylesheet" href="css/style.min.css">
</head>
<body>
  <section class="profile">
    <div class="container">
        <a class="profile__logo" href="index.php">
          <img class="profile__logo-img" src="images/logo.svg" alt="МИР КВЕСТОВ">
        </a>
        <?php
          $login=$_SESSION['login'];
          if ($login)
            {
            if ($login=='er login')
              {
              /* echo "<div class='profile__wrong'><p class='profile__wrong-msg'>Введен неправильный логин или пароль!</p></div>"; */
              echo "<p class='profile__wrong-msg'>Введен неправильный логин или пароль!</p>";
              $_SESSION['login']='';
              }
            else 
            echo "<p class='profile__welcome'>Добро пожаловать в личный кабинет!</p>";
            }
          else 
          echo '<p>Здравствуйте, гость</p>';
        ?>
<!--       <p class="profile__welcome">
        Добро пожаловать в личный кабинет, <span>Name</span>!
      </p> -->
      <h1 class="profile__title">
        Ваши личные данные
      </h1>
                  <?php
error_reporting(E_ALL);
if(empty($_POST['login'])and empty($_POST['password']))
?>
      <form class="profile__form" method="post">
        <div class="profile__wrapper">
          <div class="profile__box">
            <label class="profile__form-label">
              <h3 class="profile__form-title">
                Логин
              </h3>
              <input class="profile__form-input" type="text" maxlength="12" name="login">
            </label>
            <label class="profile__form-label">
              <h3 class="profile__form-title">
                Пароль
              </h3>
              <input class="profile__form-input" type="password" maxlength="12" name="password">
            </label>
          </div>
        </div>
        <div class="profile__box-buttons">
          <input class="profile__form-btn" type="submit" value="СОХРАНИТЬ ИЗМЕНЕНИЯ">
          <a class="profile__form-logout" href="index.php">
            ВЫЙТИ ИЗ АККАУНТА
          </a>
        </div>
      </form>
    </div>
  </section>
  <script src="js/main.min.js"></script>
</body>
</html>