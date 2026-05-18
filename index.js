import comandosLexer from "./comandosLexer.js";
import comandosParser from "./comandosParser.js";

import antlr4, {
    CharStreams,
    CommonTokenStream
} from "antlr4";

import fs from "fs";

class ErrorListener extends antlr4.error.ErrorListener {

    syntaxError(
        recognizer,
        offendingSymbol,
        line,
        column,
        msg
    ) {

        console.log(
            `Error en línea ${line}, columna ${column}: ${msg}`
        );
    }
}

function main() {

    const input = fs.readFileSync(
        "input.txt",
        "utf8"
    );

    console.log("\nCódigo fuente:\n");

    console.log(input);

    const chars =
        CharStreams.fromString(input);

    const lexer =
        new comandosLexer(chars);

    lexer.removeErrorListeners();

    lexer.addErrorListener(
        new ErrorListener()
    );

    const tokens =
        lexer.getAllTokens();

    console.log("\nTabla de tokens:\n");

    console.table(

        tokens.map(token => ({

            Lexema: token.text,

            Token:
                comandosLexer
                    .symbolicNames[token.type],

            Linea: token.line,

            Columna: token.column
        }))
    );

    lexer.reset();

    const tokenStream =
        new CommonTokenStream(lexer);

    const parser =
        new comandosParser(tokenStream);

    parser.removeErrorListeners();

    parser.addErrorListener(
        new ErrorListener()
    );

    const tree =
        parser.comando();

    if (parser.syntaxErrorsCount === 0) {

        console.log(
            "\nEntrada válida.\n"
        );

        console.log(
            "Árbol sintáctico:\n"
        );

        console.log(

            tree.toStringTree(
                parser.ruleNames
            )
        );

        console.log(
            "\nÁrbol jerárquico:\n"
        );

        mostrarArbol(
            tree,
            parser.ruleNames
        );

        console.log(
            "\nCódigo JavaScript generado:\n"
        );

        const codigoJS =
            traducir(tree);

        console.log(codigoJS);
    }
}

function mostrarArbol(
    nodo,
    reglas,
    espacio = ""
) {

    let nombre = "";

    if (
        nodo.ruleIndex !== undefined
    ) {

        nombre =
            reglas[nodo.ruleIndex];

    } else {

        nombre =
            nodo.getText();
    }

    console.log(
        espacio + nombre
    );

    if (nodo.children) {

        for (
            const hijo of nodo.children
        ) {

            mostrarArbol(
                hijo,
                reglas,
                espacio + "   "
            );
        }
    }
}

function traducir(tree) {

    const nombre =
        tree.children[0]
            .getText();

    let opciones = [];

    for (
        let i = 1;
        i < tree.children.length;
        i++
    ) {

        const actual =
            tree.children[i];

        if (
            actual.ruleIndex !== undefined
        ) {

            const regla =
                actual.parser.ruleNames[
                    actual.ruleIndex
                ];

            if (
                regla === "opcion"
            ) {

                const id =
                    actual.children[1]
                        .getText();

                let valor =
                    "true";

                if (
                    actual.children.length > 3
                ) {

                    valor =
                        actual.children[3]
                            .getText();
                }

                opciones.push(
                    `${id}: ${valor}`
                );
            }
        }
    }

    return `${nombre}({\n   ${opciones.join(",\n   ")}\n});`;
}

main();