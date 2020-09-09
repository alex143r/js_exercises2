"use strict";

const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

const animal = Object.create(Animal);
Animal.image = "image.jpg";
console.log(animal.image);

const another = Object.create(Animal)
animal.name = "First";
another.name = "Another";

console.log(animal);
another.image = "cat.jpg";