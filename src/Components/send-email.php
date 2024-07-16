<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if(isset($_POST["submitContact"]))
{
  $fullname = $_POST['fullname'];
    $email = $_POST['email'];
      $subject = $_POST['subject'];
        $message = $_POST['message'];

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'dharanstarflit@gmail.com';                     //SMTP username
    $mail->Password   = 'SumithrA@251193';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('dharanstarflit@gmail.com', 'Mailer');
    $mail->addAddress('dharanstarflit@gmail.com', 'Dharanikumar K');     //Add a recipient
    // $mail->addAddress('ellen@example.com');
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New Enquiry - Starflit';
    $mail->Body    = '<h3> Hello You Got New Enquiry! </h3>
                      <h4>FullName:'.$fullname.'</h4>
                      <p>Email: '.$email.'</p>
                       <p>Subject: '.$subject.'</p>
                      <p>Message: '.$message.'</p>';
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


    if($mail->send();)
    {
      $_SESSION['status'] = "Thank You Starflit for sending"
 header("location: {$_SERVER["HTTP_REFERER"]}");
  exit(0);
    }
    else{
            $_SESSION['status'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
 header("location: {$_SERVER["HTTP_REFERER"]}");
  exit(0);

    }


} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
else {
  header('location: index.php');
  exit(0);

}