#!/bin/bash

tempo=3

# Criação de arquivos e diretórios

# Exercicio 1

echo "Criação do diretório unix_tests"
mkdir unix_tests
echo "Navengando para unix_tests"
cd unix_tests

sleep $tempo

# Exercicio 2

echo "Criando arquivo trybe.txt"
 > trybe.txt

sleep $tempo

# Exercicio 3

echo "Criando cópia do trybe.txt"
cp trybe.txt trybe_backup.txt

sleep $tempo

# Exercicio 4

echo "Renomeando trybe.txt"
mv trybe.txt trybe_renomeado.txt

sleep $tempo

# Exercicio 5

echo "Criando diretório backup"
mkdir backup

sleep $tempo

# Exercicio 6

echo "Mover trybe_backup.txt para backup"
mv trybe_backup.txt backup

sleep $tempo

# Exercicio 7

echo "Criando diretório backup2"
mkdir backup2

sleep $tempo

# Exercicio 8

echo "Mover trybe_backup.txt de backup para backup2"
mv backup/trybe_backup.txt backup2

sleep $tempo

# Exercicio 9

echo "Apagando backup"
rmdir backup

sleep $tempo

# Exercicio 10

echo "Renomeando backup2"
mv backup2 backup

sleep $tempo

# Exercicio 11

echo "Monstrando path completo e listando os arquivos"
pwd
echo ""
ls -a

sleep $tempo

# Exercicio 12

echo "Apagando diretório backup"
rm -rf backup

sleep $tempo

# Exercicio 13

echo "Limpando o terminal"
sleep 2
clear

sleep $tempo

# Exercicio 14

echo "Criando arquivo skills.txt e monstrando as 5 linhas do arquivo"
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavascript\nReact\nSQL" > skills.txt
head -5 skills.txt

sleep $tempo

# Exercicio 15

echo "Mostrando as 4 últimas linhas do arquivo skills.txt"
tail -4 skills.txt

sleep $tempo

# Exercicio 16

echo "Apagando todos os arquivos que terminam em .txt"
rm *.txt
