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
