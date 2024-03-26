<?php

$numero = 56565;

$numeroString = strval($numero);
$numeroArray = str_split($numeroString);

$palindromoArray = [];

$y = 0;


for($i = count($numeroArray) - 1; $i >= 0; $i--){
    $palindromoArray[$y] = $numeroArray[$i];

    $y++;

}

$palindromoString = join("", $palindromoArray);
$palindromo = intval($palindromoString);



echo 'el número es: ' . $numero;

if($numero === $palindromo){
    echo '<br>y el número es palíndromo';
}else{
    echo '<br>y el número no es palíndromo';
}


