<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $first_name = htmlspecialchars($_POST['first-name']);
    $second_name = htmlspecialchars($_POST['second-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $state = htmlspecialchars($_POST['state']);
    $product = htmlspecialchars($_POST['preparation']);

    $full_name = $first_name . ' ' . $second_name;

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                        
        $mail->Host = 'mail.1docrx.com';       
        $mail->SMTPAuth = true;                 
        $mail->Username = 'info@1docrx.com';  
        $mail->Password = 'vGCK64mU5i';           
        $mail->SMTPSecure = 'tls';              
        $mail->Port = 587;                      

        // Recipients
        $mail->setFrom('info@1docrx.com', '1DocRx'); 
        $mail->addAddress('sales@1docrx.com');

        // Content
        $mail->isHTML(false);                   
        $mail->Subject = "1DocRx New message from $full_name";
        if(isset($product)){
            $mail->Body = "Name: $full_name\nEmail: $email\nPhone: $phone\nState: $state\nProduct: $product";
        }else{
            $mail->Body = "Name: $full_name\nEmail: $email\nPhone: $phone\nState: $state\n";
        }
        
        // Send the email
        $mail->send();
        echo "Thank you, $full_name! Your message has been sent successfully.";
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
}
