
var dice = [];
//var randomNumber = Math.floor(Math.random() * 6 + 1);//need to make this equal to value

//use button id to add a click listener to add die
document.getElementById('generate').addEventListener('click', function() {
    var d = new Die();
    dice.push(d);
})
//use button id to roll dice
var rollDie = document.getElementById('roll');
    rollDie.addEventListener('click', function() {
    for(var i = 0; i < dice.length; i++) {
    dice[i].roll();
}
});
//Use button id to sum all of the dice
document.getElementById('sum-button').addEventListener('click', function() {
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        sum = sum + dice[i].value;
    }
    alert('The sum of the dice is ' + sum);
})
//Create a call named Die that represents a single die
var Die = function() {
    this.div = document.createElement('div');
    this.div.className = 'square';
    //this.nextDie.innerText = randomNumber
    this.div.addEventListener('click', this.roll.bind(this));
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
    this.roll();
    document.body.appendChild(this.div);
};

var container = document.createElement('div');
    container.id = 'square-container';
    document.body.appendChild(container)

// create a function to roll the die
Die.prototype.roll = function() {
    this.value = Math.ceil(Math.random() * 6);
    this.div.innerText = this.value;
}

//anotherDie.addEventListener('click', function() {
//    var d = new Die();
//    dice.push(d);
//});

Die.prototype.removeDie = function() {
    this.div.remove();
    var index = dice.indexOf(this);
    dice.splice(index, 1);
}



