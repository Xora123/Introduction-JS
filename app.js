function lancer()
{
    fetch("https://mbouridev.github.io/users.json")

    .then(data => data.json())
    .then(function(data)
    {
        data = data.customers;

        // UTILISATEURS
        var users = [];

        for(var index in data) {
            users[index] = data[index].user_name;
        }


        // ANIMAUX
        var pets = [];

        for(var index in data) {
            users[index] = data[index].user_name;
        }



        console.log(data);
        console.log(users);
    }
    );
}