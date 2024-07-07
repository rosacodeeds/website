<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $gender = $_POST['gender'];
    $role = 1; // Default role (e.g., user)

    try {
        $stmt = $pdo->prepare('INSERT INTO Users (name, email, password, gender_id, role_id) VALUES (?, ?, ?, ?, ?)');
        $stmt->execute([$name, $email, $password, $gender, $role]);
        echo "User registered successfully!";
    } catch (PDOException $e) {
        echo 'Registration failed: ' . $e->getMessage();
    }
}
?>
