# loto-api
*		**Backend:***
	API résultats du loto
## installation:
npm installl
node server
ajouter le fichier .env à la racine contenant: DB_USER, DB_PASS, DB_DB

## endpoints:
/api/getRaw -> retourne tous les résultats avec tous les champs originaux
/api/getAll -> tous les résultats avec les champs principaux
/api/getDay/:jour -> jour:lundi...etc, retourne tous les résultats avec les champs principaux pour le jour donnée
