<?php
  // La variable globale $_POST vous donne acc�s aux donn�es envoy�es avec la m�thode POST par leur nom
  // Pour avoir acc�s aux donn�es envoy�es avec la m�thode GET, utilisez $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;