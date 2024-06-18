## Limpar o docker

Parar todos os containers em execução:

`docker stop $(docker ps -a -q)`

`docker rm $(docker ps -a -q)`

`docker rmi $(docker images -a -q)`

`docker volume rm $(docker volume ls -q)`

## Rodar a aplicação

`docker compose up`

Se a aplicação não subir com o docker, ai deverá rodar o comando:

`yarn start:dev`
