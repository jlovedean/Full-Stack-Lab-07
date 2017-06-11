
var dice = [];
var randomNumber = Math.floor(Math.random() * 6 + 1);//need to make this equal to value
//Create a call named Die that represents a single die
var Die = function() {
    this.nextDie = document.createElement('div');
    this.nextDie.className = 'square';
    this.nextDie.innerText = randomNumber
    this.nextDie.addEventListener('click', this.roll.bind(this));
    this.nextDie.addEventListener('dblclick', this.removeDie.bind(this));
    this.roll();
    document.body.appendChild(this.nextDie);
};

var container = document.createElement('div');
    container.id = 'square-container';
    document.body.appendChild(container)

// create a function to roll the die
Die.prototype.roll = function() {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.nextDie.innerText = this.value;
}
var anotherDie = document.getElementById('generate');
anotherDie.addEventListener('click', function() {
    var d = new Die();
    dice.push(d);
});
var rollDie = document.getElementById('roll');
this.rollDie.addEventListener('click', function() {
    for(var i = 0; i < dice.length; i++) {
    dice[i].roll();
}
}.bind(this));

document.getElementById('sum-button').addEventListener('click', function() {
    var sum = 0;
    for(var i = 0; i < dice.length; i++) {
        sum = sum + dice[i].value;
    }
    alert('The sum of the dice is ' + sum);
})

die.prototype.removeDie = function() {
    this.nextDie.remove();
    var index = dice.indexOf(this);
    dice.splice(index, 1);
}



