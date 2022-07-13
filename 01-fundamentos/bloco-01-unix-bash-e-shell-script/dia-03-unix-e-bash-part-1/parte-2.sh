#!/bin/bash

tempo=3

# Manipulaçao e Busca

# Exercicio 1

echo "Baixar o countries.txt em unix_tests"
cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

sleep $tempo

# Exercicio 2

echo "Mostrar conteúdo de countries.txt na tela"
echo ""
cat countries.txt

sleep $tempo

# Exercicio 3

echo ""
echo "Mostrar conteúdo de countries.txt página por página"
less countries.txt
# Usar as setas do teclados ou space pra percorer pela exibição.

sleep $tempo

# Exercicio 4

echo "Mostrar contéudo página por página e procurar por Zambia na exibição"
less countries.txt
# /Zambia para pesquisar dentro da exibição do less.

sleep $tempo

# Exercicio 5

echo "Buscar por Brazil no arquivo countries.txt"
grep Brazil countries.txt

sleep $tempo

# Exercicio 6

echo "Buscar pro brazil no arquivo countries.txt usando lower case"
grep -i brazil countries.txt

sleep $tempo

# Criação de phrases.txt

echo -e "A Trybe é um curso de desenvolvimento web\nO curso tem duração de 12 meses\nNele aprendemos fundamentos,front-end,back-end e início de ciência da computação" > phrases.txt

# Exercicio 7

echo "Buscar pelas frases que não contém fox no arquivo phrases.txt"
echo -e ""
grep -iv fox phrases.txt

sleep $tempo

# Exercicio 8

echo "Contar a quantidade de palavras do arquivo phrases.txt"
wc -w phrases.txt

sleep $tempo

# Exercicio 9

echo "Contar quantidade de linhas do arquivo phrases.txt"
wc -l phrases.txt

sleep $tempo

# Exercicio 10

echo "Criando os arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf

sleep $tempo

# Exercicio 11

echo "Listando todos os arquivos do diretório"
echo ""
ls -la

sleep $tempo

# Exercicio 12

echo "Listando todos os arquivos txt"
ls -la *txt

sleep $tempo

# Exercicio 13

echo "Listando todos os arquivos tbt e txt"
ls -la *txt *tbt

sleep $tempo

# Exercicio 14

echo "Acessando o manual do ls"
man ls
