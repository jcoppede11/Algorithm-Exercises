## Isograma – Ejercicio de práctica con TypeScript.
Un **isograma** es una palabra que **no tiene letras repetidas**.

---

### Objetivo:
Implementar una función en TypeScript que determine si una palabra es un isograma.

### Consideraciones:
- Un string vacío es un isograma.
- La función tiene que ser case insensitive e ignorar acentos.
- Si el string tiene mas de una palabra retornar `false`.
- Se tiene que hacer clean up del string antes de comparar.

### Pasos para la implementación:
1. Declarar una estructura para almacenar las letras iteradas (para este ejemplo, se usó un array).
2. Iterar sobre cada letra de la palabra.
3. Antes de agregar una letra, verificar si ya existe en la estructura:
   - Si ya existe, retornar `false`.
   - Si no existe, agregarla.
4. Si se completa la iteración, retornar `true`.

### Sobre la configuración del proyecto
Durante el desarrollo surgió un error de tipado en TypeScript relacionado con el uso del método .includes() sobre un array. Este método está disponible a partir de ECMAScript 2016 (ES7), por lo que fue necesario ajustar la configuración del compilador. Para resolverlo, se agregó el archivo tsconfig.json que especifica una versión moderna del estándar. Esto asegura que TypeScript reconozca correctamente métodos como .includes().

### ¿Cómo correr el código?
Para no instalar TypeScript localmente o trabajar con npm, se puede usar un entorno online como (ideal para pruebas rápidas):

- TypeScript Playground
- RunJS (app de escritorio)
- CodeSandbox


### 📚 Nota:
- Ejercicio tomado del repositorio de [**@goncy**](https://github.com/goncy) - [interview-challenges de @goncy](https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos/sesion-1/isograma) con fines educativos.
- Mi intención es reforzar conceptos de lógica, estructuras de datos y buenas prácticas.  
