function lancer()
{
    fetch("https://mbouridev.github.io/users.json")

    .then(data => data.json())
    .then(function(data)
        {
            data = data['customers'];

            // CRÉER UN TABLEAU AVEC LES NOMS DES UTILISATEURS
            var users = [];

            for(var index in data) {
                users[index] = data[index]['user_name'];
            }

            // AFFICHAGE
            console.log(data);
            console.log(users);
        }
    );
}