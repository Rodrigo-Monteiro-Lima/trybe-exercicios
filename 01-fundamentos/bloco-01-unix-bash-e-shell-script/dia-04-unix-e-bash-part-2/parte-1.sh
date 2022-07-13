#!/bin/bash

# Comandos de input e output

tempo=3

# Exercicio 1

echo "Navegando até unix_tests"
cd unix_tests

sleep $tempo

# Exercicio 2 

echo "Criando o arquivo skills2.txt e adicionando 'Internet','Unix' e 'Bash'"
echo -e "Internet\nUnix\nBash" > skills2.txt

sleep $tempo

# Exercicio 3

echo "Adicionando 5 itens a skills2.txt e imprimindo a lista ordenada"
echo ""
echo -e "HTML\nCSS\nGit\nGit-hub\nJavascript" >> skills2.txt
sort < skills2.txt 

sleep $tempo

# EXercicio 4

echo "Quantidade de linhas de skills2.txt"
cat skills2.txt | wc -l 

sleep $tempo

# Exercicio 5

echo "Criando arquivo top_skills,txt com as 3 primeiras skills em ordem alfabética do skills2.txt"
echo ""
sort < skills2.txt | head -3 > top_skills.txt

sleep $tempo

# Exercicio 6

echo "Criando phrases2.txt"
echo -e "Me faltou criatividade\npara criar frases\npara esse tópico" > phrases2.txt

sleep $tempo

# Exercicio 7

echo "Quantidade de linhas que contém as letras 'br'"
grep br phrases2.txt | wc -l

sleep $tempo

# Exercicio 8

echo "Quantidade de linhas que não contém as letras 'br'"
grep -iv br phrases2.txt | wc -l

sleep $tempo

# Exercicio 9 

echo "Adicionando dois países ao fim do phrases2.txt"
echo -e "Estados unidos\nInglaterra" >> phrases2.txt

sleep $tempo

# Exercicio 10

echo "Criando bunch_of_things.txt com com conteúdo do phrases2.txt e countries.txt"
cat phrases2.txt > bunch_of_things.txt
cat countries.txt >> bunch_of_things.txt

sleep $tempo

# Exercicio 11

echo "Ordenar bunch_of_things.txt"
echo ""
sort < bunch_of_things.txt
