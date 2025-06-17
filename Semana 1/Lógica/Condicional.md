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
#### 1. Quita el primer elemento de un array de frutas.
```javascript
let frutas = ["Naranja","Piña","Mango","Sandía"];
frutas.shift();

console.log(frutas)
```
![image](https://github.com/user-attachments/assets/c7380e8f-44ca-4b34-b326-0135a8673b6e)


#### 2. Agrega un número al final de un array de números.
```javascript
let numeros = [11, 13, 16, 19];
numeros.push(73);

console.log(numeros)
```
![image](https://github.com/user-attachments/assets/a16fccec-34be-4fb9-b761-db87b19604da)

#### 3. Agrega un elemento al principio de un array de palabras.
```javascript
let animales = ["osito", "perrito", "nutria"];
animales.unshift("gatito");

console.log(animales)
```
![image](https://github.com/user-attachments/assets/e7ff74de-5541-4894-a29e-02e414a1d75a)

#### 4. Elimina el último elemento de un array de colores.
```javascript
let colores = ["Púrpura", "Rosa", "Azul"];
colores.pop();

console.log(colores)
```
![image](https://github.com/user-attachments/assets/9323b518-2eb5-4330-a53f-32ccc09ad7b9)

#### 5. Extrae una porción de un array sin modificar el original.
```javascript
let marcas = ["Mazda", "Hyundai", "Volkswagen"]
let porcion = marcas.slice(1,3)

console.log (porcion)
```
![image](https://github.com/user-attachments/assets/22bac491-36af-4cd7-aa87-4cb7cc318ae3)

#### 6. Reemplaza un elemento en una posición específica del array.
```javascript
let numPares = [2, 4, 8, 10];
numPares[2] = 6;
numPares[3] = 8;

console.log(numPares)
```
![image](https://github.com/user-attachments/assets/851311da-0964-46de-ad13-681e9251726d)

#### 7. Une los elementos de un array de palabras en un solo string separado por espacios.
```javascript
let texto = ["Hola", "bienvenid@", "a", "AleDesign", "🥰"]
let frase = texto.join(" ")

console.log(frase)
```
![image](https://github.com/user-attachments/assets/a71ab28a-2184-4d95-bd54-c25d840f2a93)

#### 8. Ordena alfabéticamente un array de nombres.
```javascript
let nombres = ["Esteban", "Aleja", "Martin"];
nombres.sort();

console.log(nombres)
```
![image](https://github.com/user-attachments/assets/4757a66e-b218-4726-8d2b-b81993c5014e)

#### 9. Invierte el orden de los elementos de un array.
```javascript
let colores = ["Amarillo", "Azul", "Rojo"];
colores.reverse();

console.log(colores)
```
![image](https://github.com/user-attachments/assets/a07c2aec-a608-47fd-9fd5-286f0e06e03d)

#### 10. Verifica si un valor específico existe dentro del array.
```javascript
let nombres = ["Juan Pa", "Santi", "Pipe", "Jose"];
let existe = nombres.includes("Santi");

console.log (existe)
```
![image](https://github.com/user-attachments/assets/edadebd4-5285-4afd-bdfb-f89113f1f869)
