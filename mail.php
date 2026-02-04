<?php
/**
 * PHP Mailer pro Jakub Minka - Svatební kameraman
 * Vylepšená verze pro minimalizaci padání do spamu.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// --- KONFIGURACE ---
$to = "mail@jakubminka.cz";
$from = "mail@jakubminka.cz"; // Musí být na doméně jakubminka.cz
$subject = "Nova poptavka - jakubminka.cz";

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $name = strip_tags($_POST['name'] ?? '');
    $email = strip_tags($_POST['email'] ?? '');
    $phone = strip_tags($_POST['phone'] ?? '');
    $package = strip_tags($_POST['package'] ?? '');
    $date = strip_tags($_POST['date'] ?? '');
    $place = strip_tags($_POST['place'] ?? '');
    $message = strip_tags($_POST['message'] ?? '');

    if (empty($name)) {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        if ($data) {
            $name = strip_tags($data['name'] ?? '');
            $email = strip_tags($data['email'] ?? '');
            $phone = strip_tags($data['phone'] ?? '');
            $package = strip_tags($data['package'] ?? '');
            $date = strip_tags($data['date'] ?? '');
            $place = strip_tags($data['place'] ?? '');
            $message = strip_tags($data['message'] ?? '');
        }
    }

    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Chybi jmeno nebo email."]);
        exit;
    }

    $message_html = nl2br($message);
    $timestamp = time();
    $msg_id = "<" . $timestamp . "contact@" . $_SERVER['SERVER_NAME'] . ">";
    $date_now = date('r');

    // Tělo e-mailu s čistší strukturou
    $body = "
    <html>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    </head>
    <body style='font-family: sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;'>
      <div style='max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 15px; shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;'>
        <h2 style='color: #b9914d; border-bottom: 2px solid #b9914d; padding-bottom: 10px; margin-top: 0;'>Nová poptávka svatby</h2>
        <table style='width: 100%; border-collapse: collapse;'>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Jméno:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$name</td></tr>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>E-mail:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><a href='mailto:$email'>$email</a></td></tr>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Telefon:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$phone</td></tr>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Balíček:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$package</td></tr>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Datum:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$date</td></tr>
          <tr><td style='padding: 8px 0; border-bottom: 1px solid #eee;'><strong>Místo:</strong></td><td style='padding: 8px 0; border-bottom: 1px solid #eee;'>$place</td></tr>
        </table>
        <div style='margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #b9914d;'>
          <strong>Zpráva:</strong><br>$message_html
        </div>
        <p style='font-size: 10px; color: #999; margin-top: 30px; text-align: center;'>Odesláno z kontaktního formuláře jakubminka.cz</p>
      </div>
    </body>
    </html>
    ";

    // Hlavičky simulující běžný poštovní klient
    $headers = array(
        'From: Jakub Minka Web <' . $from . '>',
        'Reply-To: ' . $email,
        'Return-Path: ' . $from,
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'Message-ID: ' . $msg_id,
        'Date: ' . $date_now,
        'X-Priority: 3',
        'X-Mailer: PHP/' . phpversion()
    );

    // Odeslání s parametrem -f
    if (mail($to, "=?utf-8?B?".base64_encode($subject)."?=", $body, implode("\r\n", $headers), "-f" . $from)) {
        http_response_code(200);
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Odeslání selhalo."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Metoda nepovolena"]);
}
?>