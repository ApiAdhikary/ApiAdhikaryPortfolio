<<?php 




$name = $_REQUEST['name'];
$subject = $_REQUEST['subject'];
$body = $_REQUEST['message'];
$headers = $_REQUEST['email'];
$to_email = "farhanislamcontactme@gmail.com";

if(empty($name) || empty($email) || empty($subject))
{
	echo "Please Fill All the Fields";
}
if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "Email sending failed...";
}




require_once('phpMailer/PHPMailerAutoload.php');
    $mail = new PHPMailer();
   
    $mail->isSMTP();                                            //Send using SMTP
                         
    $mail->SMTPAuth   = true; 
    $mail->SMTPSecure = 'ssl'; 
    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Port       = '465'; 
    $mail->isHTML();                                  //Enable SMTP authentication
    $mail->Username   = 'farhanislamcontactme@gmail.com';                     //SMTP username
    $mail->Password   = 'EnterPasswordHere';                               //SMTP password
           
                                       //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('farhanislamcontactme@gmail.com');
    $mail->Subject = 'From Md. Farhan Islam';
    $mail->Body    = 'Thank You, For Contacting With Me. I will Get back to you in few hours. ';

    $mail->addAddress($headers);     //Add a recipient
                   //Name is optional
    $mail->addReplyTo($headers);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');


    

    $mail->send();
























 ?>


