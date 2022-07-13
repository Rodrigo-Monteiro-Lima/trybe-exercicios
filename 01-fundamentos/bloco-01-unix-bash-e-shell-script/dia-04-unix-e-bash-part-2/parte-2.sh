#!/bin/bash

# Permissões

tempo=3

# Exercicio 1

echo "Navegando até unix_tests"
cd unix_tests
echo ""

sleep $tempo

# Exercicio 2

echo "Vendo permissões dos arquivos"
echo ""
ls -l
echo ""

sleep $tempo

# Exercicio 3

echo "Colocar apenas permissões de read e write no arquvio bunch_of_things.txt"
chmod 666 bunch_of_things.txt
echo  ""
ls -l
echo ""

sleep $tempo

# Exercicio 4

echo "Colocando apenas permissão de read no arquivo bunch_of_things.txt"
chmod 444 bunch_of_things.txt
echo ""
ls -l
echo ""

sleep $tempo

# Exercicio 5

echo "Voltando para as permissões iniciais do arquivo bunch_of_things.txt"
chmod 644 bunch_of_things.txt
echo ""
ls -l
echo ""

sleep $tempo




