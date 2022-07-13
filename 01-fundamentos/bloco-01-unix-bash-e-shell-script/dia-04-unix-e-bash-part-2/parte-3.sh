#!/bin/bash

# Processos e Jobs

tempo=3

# Exercicio 1

echo "Listando todos os processos"
ps

sleep $tempo

# Exercicio 2

echo "Usando o comando de dormir no backgroung"
sleep 30 &

# Exercicio 3

echo "Finalizando o processo de dormir com o PID"
ps
# Com o PID usamos o comando kill PID para finalizar o processo

sleep $tempo

# Exercicio 4

echo "Trazendo o o comando dormir do foreground para o background"
sleep 30
# Usando o atalho de suspensão de processo ctrl+z para podermos voltar à usar o terminal
bg

sleep $tempo

# Exercicio 5

echo "Criando um processo de dormir de 300 segundos no background"
sleep 300 &

sleep $tempo

# Exercicio 6

echo "Criando um processo de dormir de 200 segundos e um de 100 segundos"
sleep 200
# Usando ctrl+z para suspender o processor e podermos criar o outro
sleep 100
# Suspendendo-o também para continuar os exercicios

sleep $tempo

# Exercicio 7

echo "Verificando a situação dos processos e suspendendo o dormir de 300 segundos"
jobs
fg %1
# Usano ctrl+z para suspendê-lo

sleep $tempo

# Exercicio 8

echo "Retomando o processo de 100 segundos em background"
bg %3

sleep $tempo

# Exercicio 9

echo "Terminando a execução de todos os processos de dormir"
kill %1 %2 %3
 
