# Curso JavaScript

## OPERADORES TERNARIOS

Un operador ternario funciona como un if en una misma expresion de declaracion
permitiendo evaluar y asignar en una sola linea.

* Esto devuelve a la variable el valor para el caso de True o False segun corresponda.

### CODIGO
```js
let edad = 17;
let acceso = edad > 18 ? 'Permitir Ingreso' : 'No puede ingresar';
//          exrpesion  primero evalua if en caso true, sino devuelve false.

console.log(acceso);
```

### Salida
```js
// --> No puede ingresar
```

## FUNCIONES

Una funcion es un bloque de codigo que solo se ejecuta cuando es llamado con el nombre de la funcion deseada.

* Esto permite reutilizar codigo y evitar la redundancia.

### CODIGO
```js
let a = 5;
let b = 10;

//                      parametros: valores que la funcion espera recibir.
function NuevaFuncion(dato_1, dato_2){
    return dato_1 + dato_2;
};
//                       argumentos: valores reales que se envian a la funcion.
console.log(NuevaFuncion(a, b));
```

### Salida
```js
// --> 15
```

## OBJETOS

Los objetos son un tipo de dato el cual tiene por caracteristica principal tener atributos que lo identifican.
Por ejemplo el objeto gato, tiene color de pelo, peso, tamaño, sexo.

### CODIGO
```js
// Primero se declaran las variables que ocupara el objeto
let colorPelaje;
let peso;
let tamaño;
let sexo;

let gato = {
    colorPelaje: 'amarillo',
    peso: '8kg',
    tamaño: '30cm',
    sexo: 'Macho',
};

// Llamada al objeto.
console.log(gato);
```

### Salida por objeto
```js
/**
 * {colorPelaje: 'amarillo',
 * peso: '8kg',
 * tamaño: '30cm',
 * sexo: 'Macho'}
 */
```

### Forma de llamar solo a un atributo del objeto
```js
console.log(gato.colorPelaje); 
```

### Salida por atributo
```js
// --> amarillo
```

## FOR OF

Usualmente usado para iterar entre elementos de Arrays de forma simplificada.

### CODIGO
```js
// Declaracion de Array
let list = ['item_1','item_2','item_3','item_4'];

for(let element of list){
    console.log(element);
};
```

### Salida
```js
/**
 * item_1
 * item_2
 * item_3
 * item_4
 * /
```

## FOR IN

Se utiliza para iterar en los **ATRIBUTOS** de un objeto.

### CODIGO
```js
let colorPelaje;
let peso;
let tamaño;
let sexo;

let gato = {
    colorPelaje: 'Amarillo',
    peso: '8kg',
    tamaño: '30cm',
    sexo: 'Macho',
};

for(let atributo in gato){
    console.log(atributo);
}
```

### Salida por nombre de atributo
```js
/**
 * colorPelaje
 * peso
 * tamaño
 * sexo
 * /
```

### Forma de llamar al atributo y su valor
```js
for(let atributo in gato){
    console.log(atributo, ':', gato[atributo]);
}
```

### Salida de Nombre de atributo y valor
```js
/**
 * colorPelaje : Amarillo
 * peso : 8kg
 * tamaño : 30cm
 * sexo : Macho
 * /
```

###
# POO
## FUNCIONES ANONIMAS

Las funciones anonimas sirven para evitar la redundancia de nombres.

### CODIGO
```js
let correo = 'contactoramokami@gmail.com';
let nombre = 'Okami';
let direccion = {
    calle: 'Lira',
    numero: 14,
};

const user = {
    correo: 'contactoramokami@gmail.com',
    nombre: 'Okami',
    direccion: {
        calle: 'Lira',
        numero: 14,
    },
    // funciones ANONIMAS que evitan la redundancia
    contraseña: function (){console.log('waton123')},
};
```

#### NOTA: FUNCIONES INTERESANTES
El tipo de variable const en un objeto no permite que se cambie el tipo de la variable, ejemplo pasar del tipo objeto a null, pero si permite el cambio de los atributos del objeto.

Por otra parte tenemos la siguiente funcion:

```js
Object.freeze(user);
```
Que proteje por completo el tipo de variable y sus atibutos para prohibir su modificacion.

```js
Object.seal(user);
```
Y por ultimo la funcion seal, que prohibe la modificacion de tipo de variable pero permite la modificacion solo de los atributos existentes, pero no agregar atributos nuevos.

## FACTORY FUNCTIONS

Las factory functions sirven para evitar la redundancia a la hora de crear objetos del mismo tipo, con una sola funcion podemos crear multiples objetos del mismo tipo sin necesidad de escribir el objeto completo.

### CODIGO
```js
function crearUsuario(correo, nombre){
    return {
        correo,
        nombre,
        activo: true,
        contraseña: function (){console.log('waton123');},
    };
};

let user1 = crearUsuario('contactoramokami@gmail.com', 'Okami');
let user2 = crearUsuario('gogdoy@gmail.com', 'gordoy');

console.log(user1);
console.log(user2);
```

### Salida User 1
```js
/**
 * correo: 'contactoramokami@gmail.com',
 * nombre: 'Okami',
 * activo: true,
 * contraseña: f <-- no se muestra al ser una funcion interna.
 * /
```

### Salida User 2
```js
/**
 * correo: 'gogdoy@gmail.com',
 * nombre: 'gordoy',
 * activo: true,
 * contraseña: f <-- no se muestra al ser una funcion interna.
 * /
```

## CONSTRUCTOR FUNCTIONS

Son metodos que nos permiten crear nuevos objetos desde uno ya existente.

### CODIGO
```js
function Usuario(id, nombre){
    this.id = id,
    this.nombre = nombre,
    // METODO CONSTRUCTOR
    this.password = function (){console.log('waton123')},
    // METODO GETTER
    this.getId = function (){return this.id;}
};

let user = new Usuario(1, 'Okami');

console.log(user);
console.log(user.getId())
```

### Salida
```js
// --> Usuario {id: 1, nombre: 'Okami', password: ƒ, getId: ƒ}
// --> 1
```