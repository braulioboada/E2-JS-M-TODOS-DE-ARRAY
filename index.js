const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Ejercicio 1");

console.log(pizzas.filter(function (pizza) {
  return pizza.id % 2 != 0;
}));

console.log("Ejercicio 2");

console.log(pizzas.filter(function (pizza) {
  return pizza.precio < 600;
}))

console.log("Ejercicio 3");

pizzas.forEach(function (pizza) {
  console.log(pizza.nombre, "$" + pizza.precio);
})

console.log("Ejercicio 4");

pizzas.forEach(function (pizza) {
  console.log(pizza.nombre);
  pizza.ingredientes.forEach(function (ingrediente) {
    console.log(ingrediente);
  })
})