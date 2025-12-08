<?php
    $dados = [
        $nome = $_POST['nome'],
        $email = $_POST['email'],
        $assunto = $_POST['assunto']
    ];
    foreach ($dados as $dado) {
        if(!isset($dado)) {
            die("Erro: Dados não preenchidos");
        }
    }
    
?>