<?php
  // La variable globale $_POST vous donne accès aux données envoyées avec la méthode POST par leur nom
  // Pour avoir accès aux données envoyées avec la méthode GET, utilisez $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;