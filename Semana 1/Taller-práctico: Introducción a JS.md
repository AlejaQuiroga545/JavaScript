# Taller pŕactico: Introducción a JavaScript
## Parte 1: Explorando JavaScript 🧐
### 1.1 ¿Qué es JavaScript y en qué se diferencia de HTML y CSS?
Es un lenguaje de programación que nos permite potenciar el alcance de nuestras páginas web a través de elementos dinámicos, interactividad integrada, validaciones, etc.    

⚡ **Diferencia |** HTML y CSS los empleamos para estructurar nuestra página web, donde le damos la base y los elementos principales y también le damos su identidad visual a través de estilos. Por otro lado, JavaScript nos complementa para integrar funcionalidades e interacciones tales como validaciones, conexiones con bases de datos, eventos con el cursor, etc.    

⚡ **Analogía |** Imaginemos una casa: **HTML** es la estructura de la casa (paredes, cimientos), **CSS** es la decoración (pintura, muebles) y **JavaScript** es el sistema eléctrico y fontanería, que permite que la casa funcione.  

### 1.2 Características principales de JS  

1. Es interpretado, no se compila para poder ejecutarse.
2. Es imperativo y estructurado, mediante un conjunto de instrucciones indica el computador qué tarea debe realizar.
3. Multiplataforma ya que se puede usar en Linux, Windows o Mac en nuestro navegador preferido.

### 1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?  

🌱 **Interpretado |** El código se ejecuta línea por línea por un intérprete, este lo traduce a acciones comprensibles para la máquina o las ejecuta directamente. Una vez terminado, pasa a la siguiente.
- Los cambios pueden probarse inmediatamente sin necesidad de compilación completa. 

🌱 **Basado en eventos |** Su ejecución está en respuesta a ciertos eventos que ocurren en la aplicación o el entorno. Estos eventos pueden ser acciones del usuario (como clics, movimientos del ratón, o pulsaciones de teclas), o eventos del sistema (como respuestas de una solicitud de red).  

---  

## Parte 2: Variables y Tipos de datos 🌬️

#### 2.1 Declara una variable `nombre` y asígnale tu nombre. Luego, muestra un saludo en la consola que diga "Hola, [nombre]".

```javascript
let nombre = 'Aleja'
console.log ("Hola", nombre)
```
![image](https://github.com/user-attachments/assets/3c55d897-3548-4fe1-a05e-e5e04ae3b618)


#### 2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().

```javascript
let numeroEntero = 20;
let numeroDecimal = 10.5;
let cadenaDeTexto = "JavaScript";

console.log (numeroEntero, numeroDecimal, cadenaDeTexto)
```
![image](https://github.com/user-attachments/assets/fd5413fd-bce1-4453-9cca-034a427a7eeb)  

#### 2.3 Declara una constante llamada `PI` con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.
```javascript
const Pi = 3.1416;
Pi = 2510;

console.log(Pi)
```

![image](https://github.com/user-attachments/assets/9682f0ea-b182-4c44-b07b-040254a7a6d7)

#### 2.4 Declara una variable sin asignarle valor. Muestra en consola qué contiene.
```javascript
let noValue;
console.log(noValue)
```
![image](https://github.com/user-attachments/assets/9912f4bd-ddf2-4462-9e5f-1223f7bdcc5d)

#### 2.5 Crea una variable con valor `null` y otra con un valor booleano. Muestra ambos en consola.
```javascript
let Val = null;
let Bool = true;

console.log(Val, Bool)
```
![image](https://github.com/user-attachments/assets/ec6ab4b1-ee35-4c10-9e45-5389d0faee36)  

---  

## Parte 3: Entrada y Salida de datos 🤓

#### 3.1 Usa `prompt()` para pedirle al usuario su edad y guárdala en una variable. Luego, muestra en consola un mensaje que diga "Tienes [edad] años".

```javascript
let userEdad = prompt("Hola, cuéntame... ¿cuántos años tienes?")
console.log ("Tienes", userEdad, "años ☺️")
```
<img src="https://github.com/user-attachments/assets/3346a25e-b8f8-4621-9349-2457af3c27bc" height="110"> ![image](https://github.com/user-attachments/assets/43b93402-668d-4849-8f12-5b6c6a3d6e56)

#### 3.2 Usa `alert()` para mostrar un mensaje de bienvenida.

```javascript
alert("¡Hola, bienvenid@ a AleDesign 🥰");
```
![image](https://github.com/user-attachments/assets/bc2aaa3c-8652-49df-953e-0644008c030c)

#### 3.3 Usa `confirm()` para preguntar al usuario si desea continuar. Muestra en consola el valor que devuelve esta función.
```javascript
let continuar = confirm("¿Deseas continuar? 🫣");
console.log(continuar);
``` 
<img src="https://github.com/user-attachments/assets/b29f4fa0-9ab2-4624-81ea-421fd4187873" height="110"> ![image](https://github.com/user-attachments/assets/0403f050-8883-4479-afa6-1560f82d8f96) ![image](https://github.com/user-attachments/assets/fd81fe9e-ea1f-4f7d-a9bf-615435af41e0)

---  

## Parte 4: Operadores 🥸
#### 4.1 Declara dos variables numéricas. Realiza y muestra los resultados de las siguientes operaciones: suma, resta, multiplicación, división y módulo.
```javascript
let num1 = 11;
let num2 = 13;

console.log("Suma:", num1 + num2);           
console.log("Resta:", num1 - num2);          
console.log("Multiplicación:", num1 * num2); 
console.log("División:", num1 / num2);       
console.log("Módulo:", num1 % num2);         
```

![image](https://github.com/user-attachments/assets/7422d5c2-4fa5-4eda-be2d-9dad3631f7f9)

#### 4.2 Declara dos variables con cadenas de texto y únelas en una nueva variable usando el operador de concatenación.
```javascript
let txt1 = "Bienvenid@ a";
let txt2 = "AleDesign 🥰";

let bienvenida = txt1 + " " + txt2;
console.log(bienvenida);
```
![image](https://github.com/user-attachments/assets/a68819ed-db3a-4f0c-bc9d-2fbb9f1318b4)

#### 4.3 Evalúa y muestra en consola el resultado de las siguientes comparaciones:

`5 == "5"`
`5 === "5"`
`true && false`
`false || true`
`!true`

```javascript
console.log(5 == "5");       // Compara solo el valor, no el tipo
console.log(5 === "5");      // Compara valor y tipo: número vs string
console.log(true && false);  // Ambos deben ser true para que sea true
console.log(false || true);  // Uno basta para que sea true
console.log(!true);          // Niega el valor de true
```
![image](https://github.com/user-attachments/assets/324a1769-3945-4b30-9d61-9c23755470f6)

---  

## Parte 5: Condicionales 🤯
#### 5.1 Crea un programa que pida al usuario un número y muestre en consola si es mayor, menor o igual a 10.
```javascript
let numero = prompt("Hola, por favor ingresa un número 😊");

if (numero > 10) {
  console.log("Tu número es mayor que 10 🫠");
} else if (numero < 10) {
  console.log("Tu número es menor que 10 😳");
} else {
  console.log("Tu número es igual a 10 😌");
}
```
![image](https://github.com/user-attachments/assets/7aee7dbc-0fa1-4952-9423-6d02203bf350) ![image](https://github.com/user-attachments/assets/9a8fe059-3392-4144-848b-fa3813f2c96a)



#### 5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.
```javascript
let nombre = prompt("Hola, déjanos saber... ¿Cuál es tu nombre? ​😊​");

if (nombre == "Admin") {
  console.log("¡Bienvenid@, has ingresado en tu rol de administrador! 😎");
} else {
  console.log("Hola " + nombre + ", bienvenid@ a nuestro website. 😉");
}
```
![image](https://github.com/user-attachments/assets/fbd7e364-c27a-48a6-9671-26c0ffddd1ae)  ![image](https://github.com/user-attachments/assets/62e4c097-3eee-453a-b511-3464f527fac1)  
![image](https://github.com/user-attachments/assets/1dec9d44-9ccc-48b6-99e0-887b4f4e2ba3)  ![image](https://github.com/user-attachments/assets/efd928a3-9d10-4ce0-b852-c1186d253d03)




#### 5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar.
El operador ternario es  `condición ? valorSiEsVerdad : valorSiEsFalso`
```javascript
let num = prompt("Hola, por favor ingresa un número ☺️");

let resultado = (num % 2 === 0) ? "Tu número es par 🤠" : "Tu número es impar 🤠";
console.log(resultado);
```
![image](https://github.com/user-attachments/assets/08273756-62e1-47ee-b054-9a0352122cdd) ![image](https://github.com/user-attachments/assets/79d5a957-4fc7-4dcb-a3ae-baed6637a504)

---  

## Parte 6: Consola del Navegador 🤠
6.1 Muestra diferentes tipos de mensajes en la consola:

**Mensaje informativo `console.info`**
```javascript
console.info("Hola, este es un mensaje informativo. ⚡");
```
![image](https://github.com/user-attachments/assets/8521a38b-5d0a-462a-a9e5-e699ec19cb83)

**Mensaje de advertencia `console.warn`**
```javascript
console.warn("⚠️ Este es un mensaje de advertencia.");
```
![image](https://github.com/user-attachments/assets/80cea3f3-dd01-486f-8ec2-cadb87516eed)

**Mensaje de error `console.error`**
```javascript
console.error("❌ ¡Oops! Algo salió mal.");
```
![image](https://github.com/user-attachments/assets/8c89842b-a739-4901-9d65-9af4eea3190d)

**Grupo de mensajes `console.group` y `console.groupEnd`**
```javascript
console.group("Datos para registrarte 🚀");
console.log("Nombre completo");
console.log("Número de identificación");
console.log("Correo electrónico");
console.groupEnd();
```
![image](https://github.com/user-attachments/assets/d5333a15-3fa3-45c5-b560-2fd9fe226d26)

**Tiempo que tarda un bloque de código en ejecutarse `console.time` y `console.timeEnd`**
```javascript
console.time("Tiempo de respuesta 👀");
console.log("Ejecutando prueba de efectividad de mi sistema... ⌛");
console.timeEnd("Tiempo de respuesta 👀");
```
![image](https://github.com/user-attachments/assets/bb44a0a3-14a1-4d68-b119-1ef43361a1f1)

---

## Parte 7: Comentarios 💭
#### 7.1 Escribe un pequeño bloque de código donde utilices comentarios de una línea y de varias líneas para explicar lo que hace cada parte.
```javascript
// Creamos un programa para verificar si mi usuario es administrador 😊

/*
  Paso 1
  Usamos prompt() para pedirle a nuestro usuario su nombre.
  El valor ingresado se guarda en la variable "nombre".
*/
let nombre = prompt("Hola, déjanos saber... ¿Cuál es tu nombre? 😊");

/*
  Paso 2:
  Comprobamos si el nombre ingresado es exactamente "Admin".
  Si lo es, mostramos un mensaje especial para nuestro administrador.
  Si no, mostramos un mensaje personalizado (genérico) para nuestro usuario.
*/
if (nombre == "Admin") {
  // Mensaje especial para nuestro administrador...
  console.log("¡Bienvenid@, has ingresado en tu rol de administrador! 😎");
} else {
  // Mensaje genérico para cualquier otro usuario...
  console.log("Hola " + nombre + ", bienvenid@ a nuestro website. 😉");
}
```
---

## Parte 8: Desafío Final 😎
#### 8.1 Crea un archivo HTML y vincúlalo con un archivo .js externo. En ese archivo:

- Declara tres variables: nombre, edad, y ciudad.
- Pide al usuario su nombre, edad y ciudad mediante prompt().
- Muestra esa información formateada en consola con una frase como:
`"Hola [nombre], tienes [edad] años y vives en [ciudad]."`

[Ver resultado final 🥰]([https://github.com/tu-usuario/tu-repositorio/blob/main/script.js](https://github.com/AlejaQuiroga545/JavaScript/tree/e2e24f082751cdd945bd0531c6f91db5b7968502/Semana%201/Taller_js_Aleja_Quiroga)
