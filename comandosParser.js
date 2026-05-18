// Generated from comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import comandosListener from './comandosListener.js';
import comandosVisitor from './comandosVisitor.js';

const serializedATN = [4,1,6,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,5,0,17,8,0,10,0,12,0,20,9,0,1,0,1,0,1,1,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,3,2,32,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,
0,7,0,2,4,6,8,10,12,0,0,37,0,14,1,0,0,0,2,23,1,0,0,0,4,31,1,0,0,0,6,33,1,
0,0,0,8,35,1,0,0,0,10,37,1,0,0,0,12,39,1,0,0,0,14,18,3,6,3,0,15,17,3,2,1,
0,16,15,1,0,0,0,17,20,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,21,1,0,0,0,
20,18,1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,23,24,5,1,0,0,24,27,3,8,4,0,25,
26,5,2,0,0,26,28,3,4,2,0,27,25,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,32,
3,10,5,0,30,32,3,12,6,0,31,29,1,0,0,0,31,30,1,0,0,0,32,5,1,0,0,0,33,34,5,
3,0,0,34,7,1,0,0,0,35,36,5,3,0,0,36,9,1,0,0,0,37,38,5,4,0,0,38,11,1,0,0,
0,39,40,5,5,0,0,40,13,1,0,0,0,3,18,27,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class comandosParser extends antlr4.Parser {

    static grammarFileName = "comandos.g4";
    static literalNames = [ null, "'-'", "'='" ];
    static symbolicNames = [ null, "GUION", "IGUAL", "ID", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "comando", "opcion", "valor", "nombre", "id", "numero", 
                         "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = comandosParser.ruleNames;
        this.literalNames = comandosParser.literalNames;
        this.symbolicNames = comandosParser.symbolicNames;
    }



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, comandosParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.nombre();
	        this.state = 18;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 15;
	            this.opcion();
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 21;
	        this.match(comandosParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opcion() {
	    let localctx = new OpcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, comandosParser.RULE_opcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(comandosParser.GUION);
	        this.state = 24;
	        this.id();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 25;
	            this.match(comandosParser.IGUAL);
	            this.state = 26;
	            this.valor();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, comandosParser.RULE_valor);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.numero();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.cadena();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, comandosParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(comandosParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, comandosParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(comandosParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, comandosParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(comandosParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, comandosParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(comandosParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

comandosParser.EOF = antlr4.Token.EOF;
comandosParser.GUION = 1;
comandosParser.IGUAL = 2;
comandosParser.ID = 3;
comandosParser.NUMERO = 4;
comandosParser.CADENA = 5;
comandosParser.WS = 6;

comandosParser.RULE_comando = 0;
comandosParser.RULE_opcion = 1;
comandosParser.RULE_valor = 2;
comandosParser.RULE_nombre = 3;
comandosParser.RULE_id = 4;
comandosParser.RULE_numero = 5;
comandosParser.RULE_cadena = 6;

class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_comando;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	EOF() {
	    return this.getToken(comandosParser.EOF, 0);
	};

	opcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcionContext);
	    } else {
	        return this.getTypedRuleContext(OpcionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_opcion;
    }

	GUION() {
	    return this.getToken(comandosParser.GUION, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	IGUAL() {
	    return this.getToken(comandosParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterOpcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitOpcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitOpcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(comandosParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_id;
    }

	ID() {
	    return this.getToken(comandosParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(comandosParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = comandosParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(comandosParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof comandosListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof comandosVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




comandosParser.ComandoContext = ComandoContext; 
comandosParser.OpcionContext = OpcionContext; 
comandosParser.ValorContext = ValorContext; 
comandosParser.NombreContext = NombreContext; 
comandosParser.IdContext = IdContext; 
comandosParser.NumeroContext = NumeroContext; 
comandosParser.CadenaContext = CadenaContext; 
