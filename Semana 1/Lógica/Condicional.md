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

#### 1| Quita el primer elemento de un array de frutas.
```javascript
```

#### 2| Agrega un número al final de un array de números.
```javascript
```

#### 3| Agrega un elemento al principio de un array de palabras.
```javascript
```

#### 4| Elimina el último elemento de un array de colores.
```javascript
```

#### 5| Extrae una porción de un array sin modificar el original.
```javascript
```

#### 6| Reemplaza un elemento en una posición específica del array.
```javascript
```

#### 7| Une los elementos de un array de palabras en un solo string separado por espacios.
```javascript
```

#### 8| Ordena alfabéticamente un array de nombres.
```javascript
```

#### 9| Invierte el orden de los elementos de un array.
```javascript
```

#### 10| Verifica si un valor específico existe dentro del array.
```javascript
```
