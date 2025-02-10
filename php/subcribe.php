if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dummy data for example purposes
    $email = "example@example.com"; 

    // Save the email to a file (or connect to a database)
    file_put_contents('subscribers.txt', $email.PHP_EOL, FILE_APPEND | LOCK_EX);

    // Redirect back to the main page or show a confirmation message
    header("Location: thank_you.html");
    exit();
}