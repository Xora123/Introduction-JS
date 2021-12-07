function commencer()
{
    fetch("https://mbouridev.github.io/users.json")

    .then(data => data.json())
    .then(function(data)
        {
            data = data['customers'];

            
            var users = [];
            var pets = [];
            var petsId = 0;


            for(var index in data) {
                // CRÉER UN TABLEAU AVEC LES NOMS DES UTILISATEURS
                users[index] = data[index]['user_name'];


                // TABLEAU AVEC LES NOMS DES ANIMAUX
                var petsArray = data[index]['user_pets'];

                for(var indexPets in petsArray) {
                    pets[petsId] = petsArray[indexPets]['pet_name'];

                    petsId++;
                }
            }


            

            // AFFICHAGE
            console.log(data);
            console.log(users);
            console.log(pets);
            console.log(pets.sort());
        }
    );
}