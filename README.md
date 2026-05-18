# Analizador Sintáctico con ANTLR4 y Node.js

Proyecto realizado utilizando **ANTLR4** y **Node.js** para el reconocimiento y análisis sintáctico de comandos definidos mediante una gramática personalizada.

## Contenido del repositorio

El repositorio contiene:

- Carpeta con el proyecto Node.js generado desde Visual Studio Code.
- Archivo con la gramática utilizada.
- Cuatro archivos de ejemplo para pruebas:
  - 2 ejemplos válidos
  - 2 ejemplos inválidos
- Archivo README con instrucciones de ejecución.

Estructura sugerida:

```text
53381/
│
├── Analizador/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── comandos.g4
│   ├── comandosLexer.js
│   ├── comandosParser.js
│   ├── comandosListener.js
│   ├── comandosVisitor.js
│   ├── input.txt
│   └── node_modules/
│
├── gramatica.txt
│
├── valido1.txt
├── valido2.txt
├── invalido1.txt
├── invalido2.txt
│
└── README.md
```

---

## Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- Java JDK
- ANTLR 4.13.2

Verificar instalación:

```bash
node -v
java -version
```

---

## Clonar el repositorio

Clonar mediante HTTPS:

```bash
git clone https://github.com/dafnegonzalez14/53381.git
```

Ingresar a la carpeta del proyecto:

```bash
cd 53381
cd Analizador
```

---

## Instalación de dependencias

Ejecutar:

```bash
npm install
```

---

## Ejecución

Colocar el ejemplo deseado dentro del archivo:

```text
input.txt
```

Ejemplo:

```text
run -file="test.txt" -n=5
```

Ejecutar:

```bash
node index.js
```

El programa mostrará:

- Tabla de tokens y lexemas
- Validación sintáctica
- Árbol sintáctico
- Generación de código JavaScript

---

## Ejemplos incluidos

### Ejemplos válidos

**valido1.txt**

```text
run -file="test.txt" -n=5
```

**valido2.txt**

```text
copy -source="datos.txt"
```

### Ejemplos inválidos

**invalido1.txt**

```text
-file="test.txt" -n=5
```

**invalido2.txt**

```text
run -file=
```

---

## Gramática utilizada

La gramática utilizada se encuentra en:

```text
gramatica.txt
```

y en:

```text
Analizador/comandos.g4
```