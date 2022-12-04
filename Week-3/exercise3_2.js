// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon);

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

// call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.
pokemonName.call(pokemon,'sushi', 'algorithms');
pokemonName.apply(pokemon,['sushi', 'algorithms']);
