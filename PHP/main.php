<?php
ini_set("session.gc_maxlifetime", 1200);
session_start();
date_default_timezone_set("Europe/Moscow");
$x = $_POST["X"];
$y = $_POST["Y"];
$r = $_POST["radius"];
$startTime= microtime(true);
function validate($x, $y, $r){
    if(is_numeric($x) and is_numeric($y) and is_numeric($r)){
        $x = (float)$x;
        $y = (float)$y;
        $r = (float)$r;
        if(abs($x) <= 4 and $y >= -3 and $y <= 5 and $r <= 3 and $r >= 1){
            return true;
        }
    }
    return false;
}
function check($x, $y, $r){
    if($x >= 0 and $x <= $r/2 and $y >= 0 and $y <= $r){
        return "есть пробитие";
    }elseif ($x>=0 and $y <=0 and $y >= $x - $r){
        return "есть пробите";
    }elseif($x <= 0 and $y <= 0 and ($x*$x + $y*$y <= $r*$r)){
        return "есть пробитие";
    }else{
        return "не попал";
    }

}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Результаты</title>
    <link rel="stylesheet" href ="next.css" />


</head>
<body class="next_page">

<table class="answerTable">
    <tr>
        <td>X</td>
        <td>Y</td>
        <td>R</td>
        <td>Результат</td>
        <td>Время</td>
        <td>Время выполнения(милисекунды)</td>
    </tr>
<?php
if(validate($x, $y, $r)){
    $executeTime = round(microtime(true) - $startTime, 10);
    $_SESSION["currentSession"][] = [$x,$y,$r,check($x, $y,$r), date("Y-m-d H:i:s"), $executeTime*1000000];
    foreach ($_SESSION["currentSession"] as $row) {
        echo "<tr>";
        foreach ($row as $value){
            echo "<td>$value</td>";
        }
        echo "<tr>";
    }
}else{
    echo '<p class="error"> что то пошло не так </p>';
}
?>

</table>
<a href="../index.html" class="previous">Вернуться на главную страницу</a>
</body>
</html>
<style>
    .previous{
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 10px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }
    .previous:hover{
        background-color: #2b8500;
    }
    .previous:active{
        box-shadow: inset 0 0 5px rgba(0, 0, 0, .5);
    }
    .answerTable {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    .answerTable thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    .answerTable th,
    .answerTable td {
        padding: 12px 15px;
    }
    .answerTable tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .answerTable tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .answerTable tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }

</style>
