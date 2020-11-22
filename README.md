# Docker project

Le but de ce projet est de constituer une application web simple, avec au moins une page avec un formulaire qui puisse récupérer des données écrites par un utilisateur et qui les persiste dans **au moins deux systemes différents** parmi : 
- postgresql 
- redis 
- mongodb 
- neo4j 
- elasticsearch

Le projet doit avoir au moins un fichier docker compose qui orchestre donc au moins 3 docker (un pour la partie server, et un par techno de stockage)
Le format de restitution est un espace sur github

Je doit pourvoir **git clone**, jouer **docker compose up** pour interagir avec l'interface web, **lancer au moins deux terminaux pour me connecter à chacun des systemes de persistance et constater la persistance**.

La date limite de publication du projet sur github est le **2 décembre**.

Comme discuté nous passerons l'aprés midi du 3 décembre à présenter les projet à la classe pour échanger sur vos réalisations.

## Commandes

- Utilisez `sudo docker-compose up` : pour lancer les containers
- Utilisez `sudo docker exec -it redis redis-cli` : pour se connecter au container redis
- Utilisez `sudo docker exec -it mongodb bash` puis `mongo` : pour interagir avec mongodb

## Bases de données

J'ai utilisé mongodb et redis comme espace de stockage.

Dans mongodb, j'ai mis en place la bdd dockerProject et j'ai stocké les données dans la collection rateDrindrin.
Ainsi, si vous voulez voir les données, il faut faire `use dockerProject` puis `db.rateDrindrin.find()`.

Pour redis, j'ai stocké les données en format json avec une clé généré aléatoirement. 
Vous pouvez voir les données en faisant `keys *` 
