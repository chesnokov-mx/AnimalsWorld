<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setForm('info@fls.guru', 'Фрилансер по жизни');

    $mail->addAddress('kkalibri@icloud.com');

    $mail->Subject = "Привет !!!";

    $body.='<p>Имя: '.$_POST['client_name']'</p>';
    
    $body.='<p>Email: '.$_POST['email']'</p>';

    $body.='<p>telephon: '.$_POST['telephon']'</p>';

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>