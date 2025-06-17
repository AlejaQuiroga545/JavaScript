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
