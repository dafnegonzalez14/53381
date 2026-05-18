// Generated from comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,43,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,4,2,19,8,2,11,2,12,2,20,1,3,4,3,24,8,3,11,
3,12,3,25,1,4,1,4,5,4,30,8,4,10,4,12,4,33,9,4,1,4,1,4,1,5,4,5,38,8,5,11,
5,12,5,39,1,5,1,5,0,0,6,1,1,3,2,5,3,7,4,9,5,11,6,1,0,4,2,0,65,90,97,122,
1,0,48,57,3,0,10,10,13,13,34,34,3,0,9,10,13,13,32,32,46,0,1,1,0,0,0,0,3,
1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,1,13,1,0,0,0,3,
15,1,0,0,0,5,18,1,0,0,0,7,23,1,0,0,0,9,27,1,0,0,0,11,37,1,0,0,0,13,14,5,
45,0,0,14,2,1,0,0,0,15,16,5,61,0,0,16,4,1,0,0,0,17,19,7,0,0,0,18,17,1,0,
0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,6,1,0,0,0,22,24,7,1,0,0,
23,22,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,8,1,0,0,0,27,
31,5,34,0,0,28,30,8,2,0,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,
1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,34,0,0,35,10,1,0,0,0,36,38,7,
3,0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,41,1,0,
0,0,41,42,6,5,0,0,42,12,1,0,0,0,5,0,20,25,31,39,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class comandosLexer extends antlr4.Lexer {

    static grammarFileName = "comandos.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "'='" ];
	static symbolicNames = [ null, "GUION", "IGUAL", "ID", "NUMERO", "CADENA", 
                          "WS" ];
	static ruleNames = [ "GUION", "IGUAL", "ID", "NUMERO", "CADENA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

comandosLexer.EOF = antlr4.Token.EOF;
comandosLexer.GUION = 1;
comandosLexer.IGUAL = 2;
comandosLexer.ID = 3;
comandosLexer.NUMERO = 4;
comandosLexer.CADENA = 5;
comandosLexer.WS = 6;



