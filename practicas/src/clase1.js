let usuarios = [
    {
      "apodo": "Nepeta",
      "email": "nepetalover123@gmail.com",
      "mascotas": [
        { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
        { "nombre": "Simba", "edad": 1, "color": "naranja" },
        { "nombre": "Mia", "edad": 5, "color": "gris" }
      ]
    },
    {
      "apodo": "CatLady",
      "email": "catlady999@yahoo.com",
      "mascotas": [
        { "nombre": "Tom", "edad": 2, "color": "gris y blanco" },
        { "nombre": "Lucas", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatitoFeliz",
      "email": "gatitofeliz22@hotmail.com",
      "mascotas": [
        { "nombre": "Cleo", "edad": 1, "color": "marrón" },
        { "nombre": "Toby", "edad": 6, "color": "blanco" },
        { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
      ]
    },
    {
      "apodo": "ElGatoNegro",
      "email": "elgatonegro@outlook.com",
      "mascotas": [
        { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
        { "nombre": "Milo", "edad": 7, "color": "naranja" }
      ]
    },
    {
      "apodo": "GatitoTierno",
      "email": "gatitotierno5555@gmail.com",
      "mascotas": [
        { "nombre": "Pelusa", "edad": 2, "color": "gris" },
        { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
        { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "CatQueen",
      "email": "catqueen8888@hotmail.com",
      "mascotas": [
        { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
        { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "Nepeta",
      "email": "nepetaalegre7@yahoo.com",
      "mascotas": [
        { "nombre": "Punky", "edad": 3, "color": "naranja" },
        { "nombre": "Zoe", "edad": 1, "color": "blanco" },
        { "nombre": "Simón", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatoMimoso",
      "email": "gatomimoso55@gmail.com",
      "mascotas": [
        { "nombre": "Leo", "edad": 2, "color": "blanco" },
        { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
      ]
    }
  ]
console.log('Ejercicio 1 Muestra por consola')

//  - El `email` del primer Usuario.

console.log(usuarios[0].email);

//  - El `apodo` del tercer Usuario.

console.log(usuarios[2].apodo);

//- El color de la segunda `mascota` del tercer Usuario.

console.log(usuarios[2].mascotas[1].color);

console.log('Ejercicio 2 Usando desestructuración');

//- Extrae en variables el primer y cuarto elemento.

const [first, , , fourth] = usuarios
console.log(first);
console.log(fourth);

//- Extrae en variables `email` y `mascotas` del primer elemento.
const { email, mascotas } = first
console.log(email);
console.log(mascotas);

console.log('Ejercicio 3 - Spread operator');

//Haz una copia de las `mascotas` obtenidas arriba y agregale la mascota

  //`{ "apodo": "Nami", "edad": 2, "color": "negro" }`

const copia = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }]

console.log(copia)
//  *(Usar console log para verificar que no se modifico el original)*
console.log(usuarios);

console.log('Ejercicio 4 String builder');

  //- Crea una funcion que reciba por props un objeto con las siguientes keys: **name**, 
  //**cantMascotas** y que retorne un *string* con el siguiente formato:

//    `"El Usuario {name} tiene {cantMascotas} mascotas"`

function mostrarMascotas (x){
    for (let i = 0; i < x.length; i++) {
        console.log('El usuario ' + x[i].apodo + ' tiene ' + x[i].mascotas.length + ' mascotas');   
    }
}

mostrarMascotas(usuarios)

console.log('Ejercicio 5 Array functions');
//- Usando la operacion `filter`, crea un array con los Usuarios que tengan **mas** de 1 mascota.

const usuariosMascota = usuarios.filter((usuarios)=> usuarios.mascotas.length > 1);
console.table(usuariosMascota);

//- Usando la operacion `map` y la funcion del ejercicio 4, crea un array de strings con el apodo y 
//la cantidad de mascotas de cada Usuario filtrado anteriormente. Ej:

/*```js
[
  "El Usuario Gaby tiene 3 mascotas",
  "El Usuario Morgi tiene 5 mascotas"
]
```*/

/*const usuariosMascotaString = usuariosMascota.map((user)=>mostrarMascotas(user))
usuariosMascotaString(usuarios)
console.log(usuariosMascotaString);*/

//- Usando la operacion reduce devuelve la cantidad total de mascotas.

const totalPets = usuarios.reduce((acc, user) => {
  return acc + user.mascotas.length
}, 0)
console.log(totalPets)