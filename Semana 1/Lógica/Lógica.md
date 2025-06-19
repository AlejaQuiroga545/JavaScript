**Condicional**
# Clasificador de triángulos 👀

Programa que recibe tres números positivos que representan las longitudes de los lados de un triángulo. El programa determina si los lados forman un triángulo válido y, si es válido, lo clasifica como:

- **Equilátero |** Todos los lados son iguales.
- **Isósceles |** Dos lados son iguales.
- **Escaleno |** Todos los lados son diferentes.

Si los lados **no forman un triángulo válido**, muestra un mensaje de error.  

### Regla para validar un triángulo
La suma de las longitudes de dos lados siempre debe ser mayor que el tercer lado.

```javascript
let lado1 = parseFloat(prompt("Lado 1 👀"));
let lado2 = parseFloat(prompt("Lado 2 👀"));
let lado3 = parseFloat(prompt("Lado 3 👀"));


if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {

    if (lado1 === lado2 && lado2 === lado3) {
        alert("Tu triángulo es equilátero. 🤠");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("El triángulo es isósceles. 🤫");
    } else {
        alert("El triángulo es escaleno. 😳");
    }

} else {
    alert("Oops, los lados no forman un triángulo. 🤕");
}
```
---  
**Métodos de listas**
# 🧪 Métodos de arrays en JavaScript
### 1. Quita el primer elemento de un array de frutas.
```javascript
let frutas = ["Naranja","Piña","Mango","Sandía"];
frutas.shift();

console.log(frutas)
```
![image](https://github.com/user-attachments/assets/c7380e8f-44ca-4b34-b326-0135a8673b6e)


### 2. Agrega un número al final de un array de números.
```javascript
let numeros = [11, 13, 16, 19];
numeros.push(73);

console.log(numeros)
```
![image](https://github.com/user-attachments/assets/a16fccec-34be-4fb9-b761-db87b19604da)

### 3. Agrega un elemento al principio de un array de palabras.
```javascript
let animales = ["osito", "perrito", "nutria"];
animales.unshift("gatito");

console.log(animales)
```
![image](https://github.com/user-attachments/assets/e7ff74de-5541-4894-a29e-02e414a1d75a)

### 4. Elimina el último elemento de un array de colores.
```javascript
let colores = ["Púrpura", "Rosa", "Azul"];
colores.pop();

console.log(colores)
```
![image](https://github.com/user-attachments/assets/9323b518-2eb5-4330-a53f-32ccc09ad7b9)

### 5. Extrae una porción de un array sin modificar el original.
```javascript
let marcas = ["Mazda", "Hyundai", "Volkswagen"]
let porcion = marcas.slice(1,3)

console.log (porcion)
```
![image](https://github.com/user-attachments/assets/22bac491-36af-4cd7-aa87-4cb7cc318ae3)

### 6. Reemplaza un elemento en una posición específica del array.
```javascript
let numPares = [2, 4, 8, 10];
numPares[2] = 6;
numPares[3] = 8;

console.log(numPares)
```
![image](https://github.com/user-attachments/assets/851311da-0964-46de-ad13-681e9251726d)

### 7. Une los elementos de un array de palabras en un solo string separado por espacios.
```javascript
let texto = ["Hola", "bienvenid@", "a", "AleDesign", "🥰"]
let frase = texto.join(" ")

console.log(frase)
```
![image](https://github.com/user-attachments/assets/a71ab28a-2184-4d95-bd54-c25d840f2a93)

### 8. Ordena alfabéticamente un array de nombres.
```javascript
let nombres = ["Esteban", "Aleja", "Martin"];
nombres.sort();

console.log(nombres)
```
![image](https://github.com/user-attachments/assets/4757a66e-b218-4726-8d2b-b81993c5014e)

### 9. Invierte el orden de los elementos de un array.
```javascript
let colores = ["Amarillo", "Azul", "Rojo"];
colores.reverse();

console.log(colores)
```
![image](https://github.com/user-attachments/assets/a07c2aec-a608-47fd-9fd5-286f0e06e03d)

### 10. Verifica si un valor específico existe dentro del array.
```javascript
let nombres = ["Juan Pa", "Santi", "Pipe", "Jose"];
let existe = nombres.includes("Santi");

console.log (existe)
```
![image](https://github.com/user-attachments/assets/edadebd4-5285-4afd-bdfb-f89113f1f869)

---

# `For` `For...in` `For...of` 🚀

➡️ **Sin listas** (solo números o strings)

### 1. Imprimir los caracteres de una palabra
`for...of` para recorrer una palabra letra por letra e imprimir cada letra.
```javascript
let text = ("AleDesign")

for (let letra of text) {
    console.log (letra);
}
```
![image](https://github.com/user-attachments/assets/1bf49738-22a0-46e2-915d-88c0343d1244)

### 2. Contar del 1 al 5 usando for clásico
Bucle `for` para imprimir los números del 1 al 5.
```javascript
for (let n=1;
    n <= 5; ++n) {
        console.log(n)
    }
```
`++n` **Prefijo |** Imprime el valor actual y luego se incrementa  

`n++` **Sufijo |** Se incrementa antes e imprime el valor nuevo  

Ambos dan el mismo resultado porque el valor de `n` no se está usando en el incremento, solo en el console.log. Pero si afectaría si la operación la estuviera haciendo directamente en la consola.  

![image](https://github.com/user-attachments/assets/0a26979b-d61f-4fd7-a575-2bfdd3d0cb2a)



### 3. Mostrar la posición de cada letra en una palabra usando for...in
`for...in` para recorrer una palabra e imprimir el índice y el carácter en esa posición.
```javascript
let text = "AleDesign";

for (let position in text) {
  console.log (`${position} | ${text[position]}`);
}
```
| Este atributo recorre automáticamente las claves (en este caso, los índices) de cualquier objeto o estructura iterable.  

![image](https://github.com/user-attachments/assets/d898594c-8ad5-4950-a9a0-6a2535337dad)  
---

➡️ **Con listas** (arrays)

### 4. Recorrer una lista de nombres usando `for...of`
Dado un array de nombres, imprime "Hola, [nombre]" usando `for...of`.
```javascript
let nombres = ["Aleja", "Esteban", "Martin"]

for (let name of nombres) {
    console.log (`Hola ${name}`)
}
```
![image](https://github.com/user-attachments/assets/46123877-02f3-40e4-86cd-7d4f291f24ca)


### 5. Imprimir índices de una lista usando `for...in`
Usa `for...in` para imprimir los índices de un array de colores.
```javascript
let colores = ["Azul", "Rosado", "Púrpura"]

for (let color in colores) {
    console.log (`${color}`)
}
```
![image](https://github.com/user-attachments/assets/4fd7666f-9ad1-4a15-bd33-108cefb21818)


### 6. Imprimir índice y valor de cada número en un array
Usa `for...in` para obtener el índice y luego acceder al valor en la misma línea.
```javascript
let colores = ["Azul", "Rosado", "Púrpura"]

for (let color in colores) {
    console.log (`${color} | ${colores[color]}`)
}
```
![image](https://github.com/user-attachments/assets/d37f85de-2215-43be-8e89-6d1478cf00be)  


---

# Objetos 🔥
### 1. Crea un objeto persona con las propiedades: nombre, edad y ciudad.
```javascript
let persona = {
    nombre: "Esteban",
    edad: 20,
    ciudad: "Bogotá"
}
```

### 2. Muestra el valor de una propiedad específica del objeto persona.
```javascript
let persona = {
    nombre: "Esteban",
    edad: 20,
    ciudad: "Bogotá"
}

console.log (persona.nombre)
```
![image](https://github.com/user-attachments/assets/1fd38d45-4e6d-4c8c-9743-3ab9f1987282)


### 3. Modifica el valor de una propiedad existente en un objeto libro.
```javascript
let libro = {
    titulo: "Bajo la misma estrella",
    genero: "Novela",
    autor: "Hazel Grace"
}

libro.autor = "John Green";

console.log (libro)
```
![image](https://github.com/user-attachments/assets/3ce73d3b-810f-4d75-b545-ef64e72b3b0c)

### 4. Agrega una nueva propiedad a un objeto auto.
```javascript
let auto = {
    Marca: "Toyota",
    Modelo: "Land Cruiser Prado",
    Color: "Blanco"
}

auto.Transmision = "Automática";
console.log (auto)
```
![image](https://github.com/user-attachments/assets/549428a2-149b-4cb9-a8f0-b594485b2a44)

### 5. Recorre un objeto estudiante con un bucle y muestra todas sus claves y valores.
```javascript
let estudiante = {
    Nombre_: "Martin",
    Edad_: 13,
    Curso_: 905
}

for (let tipo in estudiante) {
    console.log (`${tipo} ${estudiante[tipo]}`)
}
```
![image](https://github.com/user-attachments/assets/bd6b0f20-d0ac-4c90-83e3-98f449b833ca)

---
Práctica
# Funciones 😎

### 1. Saludo personalizado
Crea una función llamada `saludar` que reciba un nombre como parámetro y devuelva un saludo del tipo: `"Hola, [nombre]!"`.
```javascript
function saludar() {
   nombre = prompt("¿Cuál es tu nombre? 👀");
  console.log(`Hola, ${nombre}! 🥰`);
}

saludar();
```
![image](https://github.com/user-attachments/assets/ed66ae5d-f177-433c-8e36-854850da60da) ![image](https://github.com/user-attachments/assets/f3baeefc-8541-43b3-a9b4-d1f9c7fe4879)



### 2. Suma de dos números
Escribe una función `sumar` que reciba dos números como parámetros y retorne su suma.
```javascript
function sumar() {
  numero1 = parseFloat(prompt("👀 Primer número que quieras sumar"));
  numero2 = parseFloat(prompt("Segundo número que quieras sumar 👀"));
  console.log(`${numero1} + ${numero2} = 🤓 ${numero1 + numero2}`);
}

sumar();
```
![image](https://github.com/user-attachments/assets/80075fb3-9a4e-4c6c-87ce-6eb1e4fbbfbd) ![image](https://github.com/user-attachments/assets/09862a08-2859-41f6-95f8-2dab26efc60c)  
![image](https://github.com/user-attachments/assets/5b52c334-1030-4d17-9dce-ddc161599964)


### 3. Número par o impar
Crea una función llamada `esPar` que reciba un número y devuelva `true` si es par, o `false` si es impar.
```javascript
function esPar() {
  numero = parseInt(prompt("Hola, por favor ingresa un número 👀"));
  if (isNaN(numero)) {
    console.log("🤕 Oops por favor ingresa un número válido.");
  } else if (numero % 2 === 0) {
    console.log(`Tu número ${numero} es par. 😊`);
  } else {
    console.log(`Tu número ${numero} es impar. 😊`);
  }
}

esPar();
```
![image](https://github.com/user-attachments/assets/db5e938c-5734-4436-8763-0ab5c617c359) ![image](https://github.com/user-attachments/assets/a33cbeb0-4b7e-4deb-98c6-fd2c08b002bc)


### 4. Calcular el área de un rectángulo
Define una función `areaRectangulo` que reciba `base` y `altura` como argumentos y devuelva el área.
```javascript
function areaRectangulo() {

  base = parseFloat(prompt("Ingresa la base de tu rectángulo 👀"));
  altura = parseFloat(prompt("👀 Ingresa la altura de tu rectángulo"));

  if (!isNaN(base) && !isNaN(altura)) {
    area = base * altura;
    console.log(`El área de tu rectángulo es ${area} 😋`);

  } else {
    console.log("🤕 Oops, por favor ingresa valores válidos.");
  }

}

areaRectangulo();
```
🤔 **¿Qué hace !isNaN(base)**?    

El ! (signo de negación) invierte ese resultado... Así que `!isNaN(base)` significa **base sí es un número válido** ✅  

![image](https://github.com/user-attachments/assets/79ea4629-69aa-446d-b3a4-e270f67e49f2) ![image](https://github.com/user-attachments/assets/0bff2ef9-cdb5-4236-81bb-47f14e62afac)  
![image](https://github.com/user-attachments/assets/49da140b-80fb-4144-b4bc-5174cede3029)  


### 5. Convertir grados Celsius a Fahrenheit
Escribe una función `celsiusAFahrenheit` que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula:
`F = C * 1.8 + 32`
```javascript
function celsiusAFahrenheit() {

  celsius = parseFloat(prompt("Temperatura en grados Celsius 🌡️"));

  if (!isNaN(celsius)) {
    fahrenheit = celsius * 1.8 + 32;
    console.log(`🌡️ ${celsius}°C equivale a ${fahrenheit.toFixed(1)}°F`);

  } else {
    console.log("Oops, has ingresado un dato inválido 🤕");
  }
}

celsiusAFahrenheit();
```
![image](https://github.com/user-attachments/assets/ef382188-3309-4a6c-8bad-9c383ec2af85) ![image](https://github.com/user-attachments/assets/8d88f242-e550-4550-a130-1367dfa8d0b0)

