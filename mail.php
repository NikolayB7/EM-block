<?php

$recepient = "biletskiyna@gmail.com";
$sitename = "EMIS";

$name = trim($_POST["user-name"]);
$phone = trim($_POST["user-number"]);
$mail = trim($_POST["user-mail"]);
$file = trim($_POST["user-file"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nФайл: $file";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");