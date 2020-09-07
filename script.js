/* Prototypes */


function Animal(gender, weight, age) {
    this.weight = weight;
    this.gender = gender;
    this.age = age;
    this.level = 1;
};

function Mammal(gender, weight = 0, age = 0) {
    Animal.call(this, gender, weight, age);
};
function Reptiles(gender, weight = 0, age = 0) {
    Animal.call(this, gender, weight, age);
};

function Raccoon(gender = 'male', weight = 5, age = 4) {
    Mammal.call(this, gender, weight, age);
};

function Iguana(gender = 'female', weight = 1, age = 3) {
    Reptiles.call(this, gender, weight, age);
}

Animal.prototype.run = function () {
    console.log('Run!');
};

Animal.prototype.jump = function () {
    console.log('Jump!');
};

Animal.prototype.growth = function () {
    while (this.level < this.age) {
        this.weight = this.weight + this.weight * (this.level++ / 10);
    }
};

Mammal.prototype = Object.create(Animal.prototype);
Reptiles.prototype = Object.create(Animal.prototype);
Raccoon.prototype = Object.create(Mammal.prototype);
Iguana.prototype = Object.create(Reptiles.prototype);

Mammal.prototype.milk = function () {
    if (this.gender === 'male') {
        console.log('Sorry. No milk.')
    } else {
        console.log('Who wants some milk?');
    }
};

Reptiles.prototype.eggs = function () {
    if (this.gender === 'male') {
        console.log('Sorry. No eggs.')
    } else {
        console.log('Whose eggs are there?');
    }
};

Raccoon.prototype.thief = function () {
    console.log('Raccoon has already stolen this!')
};


Mammal.prototype.constructor = Mammal;
Raccoon.prototype.constructor = Raccoon;
Reptiles.prototype.constructor = Reptiles;
Iguana.prototype.constructor = Iguana;
const animal = new Animal();
const mammal = new Mammal();
const raccoon = new Raccoon();
const reptiles = new Reptiles();
const iguana = new Iguana();

animal.jump();
iguana.run();
raccoon.growth();
iguana.growth();
raccoon.milk();
iguana.eggs();
raccoon.thief();

console.log(raccoon);
console.log(iguana);



