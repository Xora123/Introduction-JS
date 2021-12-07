
function commencer()
{
    fetch("https://mbouridev.github.io/users.json")
        .then(data => data.json())
        .then(function(data)
            {
                data = data['customers']; // Récupère les données JSON des 'customers' (les clients)


                // OBTENIR LE NOM DES UTILISATEURS
                // ***
                var usersName = []; // Nouvelle variable pour stocker les noms dans un tableau


                // REMPLISSAGE DU TABLEAU
                // Boucle pour parcourir les données JSON de 'data'
                for(var index in data)
                {
                    // Exemple: data[0]['user_name'] correspond au nom de
                    // l'utilisateur ligne 0 des données JSON de 'data'
                    usersName.push( data[index]['user_name'] ); // 'PUSH' ajoute une valeur au tableau
                }

                
                // AFFICHAGE
                console.log("Contenu total du fichier JSON :");
                console.log(data);

                console.log("Nom des utilisateurs :");
                console.log(usersName);
            }
        );
}