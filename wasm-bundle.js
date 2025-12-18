var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string2) {
      var index = string2.length;
      while (index-- && reWhitespace.test(string2.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string2) {
      return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/before.js
var require_before = __commonJS({
  "node_modules/lodash/before.js"(exports, module) {
    var toInteger = require_toInteger();
    var FUNC_ERROR_TEXT = "Expected a function";
    function before(n, func) {
      var result;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = void 0;
        }
        return result;
      };
    }
    module.exports = before;
  }
});

// node_modules/lodash/once.js
var require_once = __commonJS({
  "node_modules/lodash/once.js"(exports, module) {
    var before = require_before();
    function once5(func) {
      return before(2, func);
    }
    module.exports = once5;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/BlankNode.js
var require_BlankNode = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/BlankNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BlankNode = void 0;
    var BlankNode2 = class {
      constructor(value) {
        this.termType = "BlankNode";
        this.value = value;
      }
      equals(other) {
        return !!other && other.termType === "BlankNode" && other.value === this.value;
      }
    };
    exports.BlankNode = BlankNode2;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/DefaultGraph.js
var require_DefaultGraph = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/DefaultGraph.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultGraph = void 0;
    var DefaultGraph2 = class {
      constructor() {
        this.termType = "DefaultGraph";
        this.value = "";
      }
      equals(other) {
        return !!other && other.termType === "DefaultGraph";
      }
    };
    exports.DefaultGraph = DefaultGraph2;
    DefaultGraph2.INSTANCE = new DefaultGraph2();
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/NamedNode.js
var require_NamedNode = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/NamedNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamedNode = void 0;
    var NamedNode2 = class {
      constructor(value) {
        this.termType = "NamedNode";
        this.value = value;
      }
      equals(other) {
        return !!other && other.termType === "NamedNode" && other.value === this.value;
      }
    };
    exports.NamedNode = NamedNode2;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Literal.js
var require_Literal = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Literal = void 0;
    var NamedNode_1 = require_NamedNode();
    var Literal2 = class _Literal {
      constructor(value, languageOrDatatype) {
        this.termType = "Literal";
        this.value = value;
        if (typeof languageOrDatatype === "string") {
          this.language = languageOrDatatype;
          this.datatype = _Literal.RDF_LANGUAGE_STRING;
          this.direction = "";
        } else if (languageOrDatatype) {
          if ("termType" in languageOrDatatype) {
            this.language = "";
            this.datatype = languageOrDatatype;
            this.direction = "";
          } else {
            this.language = languageOrDatatype.language;
            this.datatype = languageOrDatatype.direction ? _Literal.RDF_DIRECTIONAL_LANGUAGE_STRING : _Literal.RDF_LANGUAGE_STRING;
            this.direction = languageOrDatatype.direction || "";
          }
        } else {
          this.language = "";
          this.datatype = _Literal.XSD_STRING;
          this.direction = "";
        }
      }
      equals(other) {
        return !!other && other.termType === "Literal" && other.value === this.value && other.language === this.language && (other.direction === this.direction || !other.direction && this.direction === "") && this.datatype.equals(other.datatype);
      }
    };
    exports.Literal = Literal2;
    Literal2.RDF_LANGUAGE_STRING = new NamedNode_1.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");
    Literal2.RDF_DIRECTIONAL_LANGUAGE_STRING = new NamedNode_1.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString");
    Literal2.XSD_STRING = new NamedNode_1.NamedNode("http://www.w3.org/2001/XMLSchema#string");
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Quad.js
var require_Quad = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Quad.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Quad = void 0;
    var Quad2 = class {
      constructor(subject, predicate, object, graph) {
        this.termType = "Quad";
        this.value = "";
        this.subject = subject;
        this.predicate = predicate;
        this.object = object;
        this.graph = graph;
      }
      equals(other) {
        return !!other && (other.termType === "Quad" || !other.termType) && this.subject.equals(other.subject) && this.predicate.equals(other.predicate) && this.object.equals(other.object) && this.graph.equals(other.graph);
      }
    };
    exports.Quad = Quad2;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Variable.js
var require_Variable = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/Variable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variable = void 0;
    var Variable2 = class {
      constructor(value) {
        this.termType = "Variable";
        this.value = value;
      }
      equals(other) {
        return !!other && other.termType === "Variable" && other.value === this.value;
      }
    };
    exports.Variable = Variable2;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/lib/DataFactory.js
var require_DataFactory = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/lib/DataFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataFactory = void 0;
    var BlankNode_1 = require_BlankNode();
    var DefaultGraph_1 = require_DefaultGraph();
    var Literal_1 = require_Literal();
    var NamedNode_1 = require_NamedNode();
    var Quad_1 = require_Quad();
    var Variable_1 = require_Variable();
    var dataFactoryCounter = 0;
    var DataFactory2 = class {
      constructor(options) {
        this.blankNodeCounter = 0;
        options = options || {};
        this.blankNodePrefix = options.blankNodePrefix || `df_${dataFactoryCounter++}_`;
      }
      /**
       * @param value The IRI for the named node.
       * @return A new instance of NamedNode.
       * @see NamedNode
       */
      namedNode(value) {
        return new NamedNode_1.NamedNode(value);
      }
      /**
       * @param value The optional blank node identifier.
       * @return A new instance of BlankNode.
       *         If the `value` parameter is undefined a new identifier
       *         for the blank node is generated for each call.
       * @see BlankNode
       */
      blankNode(value) {
        return new BlankNode_1.BlankNode(value || `${this.blankNodePrefix}${this.blankNodeCounter++}`);
      }
      /**
       * @param value              The literal value.
       * @param languageOrDatatype The optional language, datatype, or directional language.
       *                           If `languageOrDatatype` is a NamedNode,
       *                           then it is used for the value of `NamedNode.datatype`.
       *                           If `languageOrDatatype` is a NamedNode, it is used for the value
       *                           of `NamedNode.language`.
       *                           Otherwise, it is used as a directional language,
       *                           from which the language is set to `languageOrDatatype.language`
       *                           and the direction to `languageOrDatatype.direction`.
       * @return A new instance of Literal.
       * @see Literal
       */
      literal(value, languageOrDatatype) {
        return new Literal_1.Literal(value, languageOrDatatype);
      }
      /**
       * This method is optional.
       * @param value The variable name
       * @return A new instance of Variable.
       * @see Variable
       */
      variable(value) {
        return new Variable_1.Variable(value);
      }
      /**
       * @return An instance of DefaultGraph.
       */
      defaultGraph() {
        return DefaultGraph_1.DefaultGraph.INSTANCE;
      }
      /**
       * @param subject   The quad subject term.
       * @param predicate The quad predicate term.
       * @param object    The quad object term.
       * @param graph     The quad graph term.
       * @return A new instance of Quad.
       * @see Quad
       */
      quad(subject, predicate, object, graph) {
        return new Quad_1.Quad(subject, predicate, object, graph || this.defaultGraph());
      }
      /**
       * Create a deep copy of the given term using this data factory.
       * @param original An RDF term.
       * @return A deep copy of the given term.
       */
      fromTerm(original) {
        switch (original.termType) {
          case "NamedNode":
            return this.namedNode(original.value);
          case "BlankNode":
            return this.blankNode(original.value);
          case "Literal":
            if (original.language) {
              return this.literal(original.value, original.language);
            }
            if (!original.datatype.equals(Literal_1.Literal.XSD_STRING)) {
              return this.literal(original.value, this.fromTerm(original.datatype));
            }
            return this.literal(original.value);
          case "Variable":
            return this.variable(original.value);
          case "DefaultGraph":
            return this.defaultGraph();
          case "Quad":
            return this.quad(this.fromTerm(original.subject), this.fromTerm(original.predicate), this.fromTerm(original.object), this.fromTerm(original.graph));
        }
      }
      /**
       * Create a deep copy of the given quad using this data factory.
       * @param original An RDF quad.
       * @return A deep copy of the given quad.
       */
      fromQuad(original) {
        return this.fromTerm(original);
      }
      /**
       * Reset the internal blank node counter.
       */
      resetBlankNodeCounter() {
        this.blankNodeCounter = 0;
      }
    };
    exports.DataFactory = DataFactory2;
  }
});

// node_modules/rdf-literal/node_modules/rdf-data-factory/index.js
var require_rdf_data_factory = __commonJS({
  "node_modules/rdf-literal/node_modules/rdf-data-factory/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_BlankNode(), exports);
    __exportStar(require_DataFactory(), exports);
    __exportStar(require_DefaultGraph(), exports);
    __exportStar(require_Literal(), exports);
    __exportStar(require_NamedNode(), exports);
    __exportStar(require_Quad(), exports);
    __exportStar(require_Variable(), exports);
  }
});

// node_modules/rdf-literal/lib/Translator.js
var require_Translator = __commonJS({
  "node_modules/rdf-literal/lib/Translator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Translator = void 0;
    var Translator = class {
      constructor() {
        this.supportedRdfDatatypes = [];
        this.fromRdfHandlers = {};
        this.toRdfHandlers = {};
      }
      static incorrectRdfDataType(literal2) {
        throw new Error(`Invalid RDF ${literal2.datatype.value} value: '${literal2.value}'`);
      }
      registerHandler(handler2, rdfDatatypes, javaScriptDataTypes) {
        for (const rdfDatatype of rdfDatatypes) {
          this.supportedRdfDatatypes.push(rdfDatatype);
          this.fromRdfHandlers[rdfDatatype.value] = handler2;
        }
        for (const javaScriptDataType of javaScriptDataTypes) {
          let existingToRdfHandlers = this.toRdfHandlers[javaScriptDataType];
          if (!existingToRdfHandlers) {
            this.toRdfHandlers[javaScriptDataType] = existingToRdfHandlers = [];
          }
          existingToRdfHandlers.push(handler2);
        }
      }
      fromRdf(literal2, validate) {
        const handler2 = this.fromRdfHandlers[literal2.datatype.value];
        if (handler2) {
          return handler2.fromRdf(literal2, validate);
        } else {
          return literal2.value;
        }
      }
      toRdf(value, options) {
        const handlers = this.toRdfHandlers[typeof value];
        if (handlers) {
          for (const handler2 of handlers) {
            const ret = handler2.toRdf(value, options);
            if (ret) {
              return ret;
            }
          }
        }
        throw new Error(`Invalid JavaScript value: '${value}'`);
      }
      /**
       * @return {NamedNode[]} An array of all supported RDF datatypes.
       */
      getSupportedRdfDatatypes() {
        return this.supportedRdfDatatypes;
      }
      /**
       * @return {string[]} An array of all supported JavaScript types.
       */
      getSupportedJavaScriptPrimitives() {
        return Object.keys(this.toRdfHandlers);
      }
    };
    exports.Translator = Translator;
  }
});

// node_modules/rdf-literal/lib/handler/TypeHandlerBoolean.js
var require_TypeHandlerBoolean = __commonJS({
  "node_modules/rdf-literal/lib/handler/TypeHandlerBoolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHandlerBoolean = void 0;
    var Translator_1 = require_Translator();
    var TypeHandlerBoolean = class _TypeHandlerBoolean {
      fromRdf(literal2, validate) {
        switch (literal2.value) {
          case "true":
            return true;
          case "false":
            return false;
          case "1":
            return true;
          case "0":
            return false;
        }
        if (validate) {
          Translator_1.Translator.incorrectRdfDataType(literal2);
        }
        return false;
      }
      toRdf(value, { datatype, dataFactory }) {
        return dataFactory.literal(value ? "true" : "false", datatype || dataFactory.namedNode(_TypeHandlerBoolean.TYPE));
      }
    };
    exports.TypeHandlerBoolean = TypeHandlerBoolean;
    TypeHandlerBoolean.TYPE = "http://www.w3.org/2001/XMLSchema#boolean";
  }
});

// node_modules/rdf-literal/lib/handler/TypeHandlerDate.js
var require_TypeHandlerDate = __commonJS({
  "node_modules/rdf-literal/lib/handler/TypeHandlerDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHandlerDate = void 0;
    var Translator_1 = require_Translator();
    var TypeHandlerDate = class _TypeHandlerDate {
      fromRdf(literal2, validate) {
        if (validate && !literal2.value.match(_TypeHandlerDate.VALIDATORS[literal2.datatype.value.substr(33, literal2.datatype.value.length)])) {
          Translator_1.Translator.incorrectRdfDataType(literal2);
        }
        switch (literal2.datatype.value) {
          case "http://www.w3.org/2001/XMLSchema#gDay":
            return new Date(0, 0, parseInt(literal2.value, 10));
          case "http://www.w3.org/2001/XMLSchema#gMonthDay":
            const partsMonthDay = literal2.value.split("-");
            return new Date(0, parseInt(partsMonthDay[0], 10) - 1, parseInt(partsMonthDay[1], 10));
          case "http://www.w3.org/2001/XMLSchema#gYear":
            return /* @__PURE__ */ new Date(literal2.value + "-01-01");
          case "http://www.w3.org/2001/XMLSchema#gYearMonth":
            return /* @__PURE__ */ new Date(literal2.value + "-01");
          default:
            return new Date(literal2.value);
        }
      }
      toRdf(value, { datatype, dataFactory }) {
        datatype = datatype || dataFactory.namedNode(_TypeHandlerDate.TYPES[0]);
        if (!(value instanceof Date)) {
          return null;
        }
        const date2 = value;
        let valueString;
        switch (datatype.value) {
          case "http://www.w3.org/2001/XMLSchema#gDay":
            valueString = String(date2.getUTCDate());
            break;
          case "http://www.w3.org/2001/XMLSchema#gMonthDay":
            valueString = date2.getUTCMonth() + 1 + "-" + date2.getUTCDate();
            break;
          case "http://www.w3.org/2001/XMLSchema#gYear":
            valueString = String(date2.getUTCFullYear());
            break;
          case "http://www.w3.org/2001/XMLSchema#gYearMonth":
            valueString = date2.getUTCFullYear() + "-" + (date2.getUTCMonth() + 1);
            break;
          case "http://www.w3.org/2001/XMLSchema#date":
            valueString = date2.toISOString().replace(/T.*$/, "");
            break;
          default:
            valueString = date2.toISOString();
        }
        return dataFactory.literal(valueString, datatype);
      }
    };
    exports.TypeHandlerDate = TypeHandlerDate;
    TypeHandlerDate.TYPES = [
      "http://www.w3.org/2001/XMLSchema#dateTime",
      "http://www.w3.org/2001/XMLSchema#date",
      "http://www.w3.org/2001/XMLSchema#gDay",
      "http://www.w3.org/2001/XMLSchema#gMonthDay",
      "http://www.w3.org/2001/XMLSchema#gYear",
      "http://www.w3.org/2001/XMLSchema#gYearMonth"
    ];
    TypeHandlerDate.VALIDATORS = {
      date: /^[0-9]+-[0-9][0-9]-[0-9][0-9]Z?$/,
      dateTime: /^[0-9]+-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](\.[0-9][0-9][0-9])?((Z?)|([\+-][0-9][0-9]:[0-9][0-9]))$/,
      gDay: /^[0-9]+$/,
      gMonthDay: /^[0-9]+-[0-9][0-9]$/,
      gYear: /^[0-9]+$/,
      gYearMonth: /^[0-9]+-[0-9][0-9]$/
    };
  }
});

// node_modules/rdf-literal/lib/handler/TypeHandlerNumberDouble.js
var require_TypeHandlerNumberDouble = __commonJS({
  "node_modules/rdf-literal/lib/handler/TypeHandlerNumberDouble.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHandlerNumberDouble = void 0;
    var Translator_1 = require_Translator();
    var TypeHandlerNumberDouble = class _TypeHandlerNumberDouble {
      fromRdf(literal2, validate) {
        const parsed = parseFloat(literal2.value);
        if (validate) {
          if (isNaN(parsed)) {
            Translator_1.Translator.incorrectRdfDataType(literal2);
          }
        }
        return parsed;
      }
      toRdf(value, { datatype, dataFactory }) {
        datatype = datatype || dataFactory.namedNode(_TypeHandlerNumberDouble.TYPES[0]);
        if (isNaN(value)) {
          return dataFactory.literal("NaN", datatype);
        }
        if (!isFinite(value)) {
          return dataFactory.literal(value > 0 ? "INF" : "-INF", datatype);
        }
        if (value % 1 === 0) {
          return null;
        }
        return dataFactory.literal(value.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), datatype);
      }
    };
    exports.TypeHandlerNumberDouble = TypeHandlerNumberDouble;
    TypeHandlerNumberDouble.TYPES = [
      "http://www.w3.org/2001/XMLSchema#double",
      "http://www.w3.org/2001/XMLSchema#decimal",
      "http://www.w3.org/2001/XMLSchema#float"
    ];
  }
});

// node_modules/rdf-literal/lib/handler/TypeHandlerNumberInteger.js
var require_TypeHandlerNumberInteger = __commonJS({
  "node_modules/rdf-literal/lib/handler/TypeHandlerNumberInteger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHandlerNumberInteger = void 0;
    var Translator_1 = require_Translator();
    var TypeHandlerNumberInteger = class _TypeHandlerNumberInteger {
      fromRdf(literal2, validate) {
        const parsed = parseInt(literal2.value, 10);
        if (validate) {
          if (isNaN(parsed) || literal2.value.indexOf(".") >= 0) {
            Translator_1.Translator.incorrectRdfDataType(literal2);
          }
        }
        return parsed;
      }
      toRdf(value, { datatype, dataFactory }) {
        return dataFactory.literal(String(value), datatype || (value <= _TypeHandlerNumberInteger.MAX_INT && value >= _TypeHandlerNumberInteger.MIN_INT ? dataFactory.namedNode(_TypeHandlerNumberInteger.TYPES[0]) : dataFactory.namedNode(_TypeHandlerNumberInteger.TYPES[1])));
      }
    };
    exports.TypeHandlerNumberInteger = TypeHandlerNumberInteger;
    TypeHandlerNumberInteger.TYPES = [
      "http://www.w3.org/2001/XMLSchema#integer",
      "http://www.w3.org/2001/XMLSchema#long",
      "http://www.w3.org/2001/XMLSchema#int",
      "http://www.w3.org/2001/XMLSchema#byte",
      "http://www.w3.org/2001/XMLSchema#short",
      "http://www.w3.org/2001/XMLSchema#negativeInteger",
      "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
      "http://www.w3.org/2001/XMLSchema#nonPositiveInteger",
      "http://www.w3.org/2001/XMLSchema#positiveInteger",
      "http://www.w3.org/2001/XMLSchema#unsignedByte",
      "http://www.w3.org/2001/XMLSchema#unsignedInt",
      "http://www.w3.org/2001/XMLSchema#unsignedLong",
      "http://www.w3.org/2001/XMLSchema#unsignedShort"
    ];
    TypeHandlerNumberInteger.MAX_INT = 2147483647;
    TypeHandlerNumberInteger.MIN_INT = -2147483648;
  }
});

// node_modules/rdf-literal/lib/handler/TypeHandlerString.js
var require_TypeHandlerString = __commonJS({
  "node_modules/rdf-literal/lib/handler/TypeHandlerString.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHandlerString = void 0;
    var TypeHandlerString = class {
      fromRdf(literal2) {
        return literal2.value;
      }
      toRdf(value, { datatype, dataFactory }) {
        return dataFactory.literal(value, datatype);
      }
    };
    exports.TypeHandlerString = TypeHandlerString;
    TypeHandlerString.TYPES = [
      "http://www.w3.org/2001/XMLSchema#string",
      "http://www.w3.org/2001/XMLSchema#normalizedString",
      "http://www.w3.org/2001/XMLSchema#anyURI",
      "http://www.w3.org/2001/XMLSchema#base64Binary",
      "http://www.w3.org/2001/XMLSchema#language",
      "http://www.w3.org/2001/XMLSchema#Name",
      "http://www.w3.org/2001/XMLSchema#NCName",
      "http://www.w3.org/2001/XMLSchema#NMTOKEN",
      "http://www.w3.org/2001/XMLSchema#token",
      "http://www.w3.org/2001/XMLSchema#hexBinary",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString",
      "http://www.w3.org/2001/XMLSchema#time",
      "http://www.w3.org/2001/XMLSchema#duration"
    ];
  }
});

// node_modules/rdf-literal/lib/handler/index.js
var require_handler = __commonJS({
  "node_modules/rdf-literal/lib/handler/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_TypeHandlerBoolean(), exports);
    __exportStar(require_TypeHandlerDate(), exports);
    __exportStar(require_TypeHandlerNumberDouble(), exports);
    __exportStar(require_TypeHandlerNumberInteger(), exports);
    __exportStar(require_TypeHandlerString(), exports);
  }
});

// node_modules/rdf-literal/lib/ITypeHandler.js
var require_ITypeHandler = __commonJS({
  "node_modules/rdf-literal/lib/ITypeHandler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/rdf-literal/index.js
var require_rdf_literal = __commonJS({
  "node_modules/rdf-literal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromRdf = fromRdf5;
    exports.toRdf = toRdf;
    exports.getTermRaw = getTermRaw;
    exports.getSupportedRdfDatatypes = getSupportedRdfDatatypes;
    exports.getSupportedJavaScriptPrimitives = getSupportedJavaScriptPrimitives;
    var rdf_data_factory_1 = require_rdf_data_factory();
    var handler_1 = require_handler();
    var Translator_1 = require_Translator();
    __exportStar(require_handler(), exports);
    __exportStar(require_ITypeHandler(), exports);
    __exportStar(require_Translator(), exports);
    var DF = new rdf_data_factory_1.DataFactory();
    var translator = new Translator_1.Translator();
    translator.registerHandler(new handler_1.TypeHandlerString(), handler_1.TypeHandlerString.TYPES.map((t) => DF.namedNode(t)), ["string"]);
    translator.registerHandler(new handler_1.TypeHandlerBoolean(), [handler_1.TypeHandlerBoolean.TYPE].map((t) => DF.namedNode(t)), ["boolean"]);
    translator.registerHandler(new handler_1.TypeHandlerNumberDouble(), handler_1.TypeHandlerNumberDouble.TYPES.map((t) => DF.namedNode(t)), ["number"]);
    translator.registerHandler(new handler_1.TypeHandlerNumberInteger(), handler_1.TypeHandlerNumberInteger.TYPES.map((t) => DF.namedNode(t)), ["number"]);
    translator.registerHandler(new handler_1.TypeHandlerDate(), handler_1.TypeHandlerDate.TYPES.map((t) => DF.namedNode(t)), ["object"]);
    function fromRdf5(literal2, validate) {
      return translator.fromRdf(literal2, validate);
    }
    function toRdf(value, options) {
      if (options && "namedNode" in options) {
        options = { dataFactory: options };
      }
      options = options || {};
      if (options && !options.dataFactory) {
        options.dataFactory = DF;
      }
      return translator.toRdf(value, options);
    }
    function getTermRaw(term, validate) {
      if (term.termType === "Literal") {
        return fromRdf5(term, validate);
      }
      return term.value;
    }
    function getSupportedRdfDatatypes() {
      return translator.getSupportedRdfDatatypes();
    }
    function getSupportedJavaScriptPrimitives() {
      return translator.getSupportedJavaScriptPrimitives();
    }
  }
});

// node_modules/@rdfjs/to-ntriples/lib/blankNode.js
function blankNode(blankNode2) {
  return "_:" + blankNode2.value;
}
var blankNode_default = blankNode;

// node_modules/@rdfjs/to-ntriples/lib/dataset.js
function dataset(dataset2, toNT2) {
  return [...dataset2].map((quad2) => toNT2(quad2)).join("\n") + "\n";
}
var dataset_default = dataset;

// node_modules/@rdfjs/to-ntriples/lib/defaultGraph.js
function defaultGraph() {
  return "";
}
var defaultGraph_default = defaultGraph;

// node_modules/@rdfjs/to-ntriples/lib/namedNode.js
function namedNode(namedNode2) {
  return "<" + namedNode2.value + ">";
}
var namedNode_default = namedNode;

// node_modules/@rdfjs/to-ntriples/lib/literal.js
var echarRegEx = /["\\\\\n\r]/;
var echarRegExAll = /["\\\\\n\r]/g;
var echarReplacement = {
  '"': '\\"',
  "\\": "\\\\",
  "\n": "\\n",
  "\r": "\\r"
};
function echarReplacer(char) {
  return echarReplacement[char];
}
function escapeValue(value) {
  if (echarRegEx.test(value)) {
    return value.replace(echarRegExAll, echarReplacer);
  }
  return value;
}
function literal(literal2) {
  const escapedValue = escapeValue(literal2.value);
  if (literal2.datatype.value === "http://www.w3.org/2001/XMLSchema#string") {
    return '"' + escapedValue + '"';
  }
  if (literal2.datatype.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString") {
    return '"' + escapedValue + '"@' + literal2.language;
  }
  return '"' + escapedValue + '"^^' + namedNode_default(literal2.datatype);
}
var literal_default = literal;

// node_modules/@rdfjs/to-ntriples/lib/quad.js
function quad(quad2, toNT2) {
  const subjectString = toNT2(quad2.subject);
  const predicateString = toNT2(quad2.predicate);
  const objectString = toNT2(quad2.object);
  const graphString = toNT2(quad2.graph);
  return `${subjectString} ${predicateString} ${objectString} ${graphString ? graphString + " " : ""}.`;
}
var quad_default = quad;

// node_modules/@rdfjs/to-ntriples/lib/variable.js
function variable(variable2) {
  return "?" + variable2.value;
}
var variable_default = variable;

// node_modules/@rdfjs/to-ntriples/index.js
function toNT(term) {
  if (!term) {
    return null;
  }
  if (term.termType === "BlankNode") {
    return blankNode_default(term);
  }
  if (term.termType === "DefaultGraph") {
    return defaultGraph_default();
  }
  if (term.termType === "Literal") {
    return literal_default(term);
  }
  if (term.termType === "NamedNode") {
    return namedNode_default(term);
  }
  if (term.termType === "Quad" || term.subject && term.predicate && term.object && term.graph) {
    return quad_default(term, toNT);
  }
  if (term.termType === "Variable") {
    return variable_default(term);
  }
  if (term[Symbol.iterator]) {
    return dataset_default(term, toNT);
  }
  throw new Error(`unknown termType ${term.termType}`);
}
var to_ntriples_default = toNT;

// node_modules/@rdfjs/term-map/TermMap.js
var TermMap = class {
  constructor(entries) {
    this.index = /* @__PURE__ */ new Map();
    if (entries) {
      for (const [term, value] of entries) {
        this.set(term, value);
      }
    }
  }
  get size() {
    return this.index.size;
  }
  clear() {
    this.index.clear();
  }
  delete(term) {
    return this.index.delete(to_ntriples_default(term));
  }
  *entries() {
    for (const [, { term, value }] of this.index) {
      yield [term, value];
    }
  }
  forEach(callback, thisArg) {
    for (const entry of this.entries()) {
      callback.call(thisArg, entry[1], entry[0], this);
    }
  }
  get(term) {
    const item = this.index.get(to_ntriples_default(term));
    return item && item.value;
  }
  has(term) {
    return this.index.has(to_ntriples_default(term));
  }
  *keys() {
    for (const [, { term }] of this.index) {
      yield term;
    }
  }
  set(term, value) {
    const key = to_ntriples_default(term);
    this.index.set(key, { term, value });
    return this;
  }
  *values() {
    for (const [, { value }] of this.index) {
      yield value;
    }
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
};
var TermMap_default = TermMap;

// node_modules/grapoi/Edge.js
var Edge = class {
  constructor({ dataset: dataset2, end, quad: quad2, start }) {
    this.dataset = dataset2;
    this.end = end;
    this.quad = quad2;
    this.start = start;
  }
  get term() {
    return this.quad[this.end];
  }
  get graph() {
    return this.quad.graph;
  }
  get startTerm() {
    return this.quad[this.start];
  }
};
var Edge_default = Edge;

// node_modules/@rdfjs/term-set/TermSet.js
function quietToNT(term) {
  try {
    return to_ntriples_default(term);
  } catch (err) {
    return null;
  }
}
var TermSet = class {
  constructor(terms) {
    this.index = /* @__PURE__ */ new Map();
    if (terms) {
      for (const term of terms) {
        this.add(term);
      }
    }
  }
  get size() {
    return this.index.size;
  }
  add(term) {
    const key = to_ntriples_default(term);
    if (!this.index.has(key)) {
      this.index.set(key, term);
    }
    return this;
  }
  clear() {
    this.index.clear();
  }
  delete(term) {
    if (!term) {
      return false;
    }
    return this.index.delete(quietToNT(term));
  }
  entries() {
    return this.values().entries();
  }
  forEach(callbackfn, thisArg) {
    return this.values().forEach(callbackfn, thisArg);
  }
  has(term) {
    if (!term) {
      return false;
    }
    return this.index.has(quietToNT(term));
  }
  values() {
    return new Set(this.index.values());
  }
  keys() {
    return this.values();
  }
  [Symbol.iterator]() {
    return this.index.values();
  }
};
var TermSet_default = TermSet;

// node_modules/@rdfjs/data-model/lib/BlankNode.js
var BlankNode = class {
  constructor(id) {
    this.value = id;
  }
  equals(other) {
    return !!other && other.termType === this.termType && other.value === this.value;
  }
};
BlankNode.prototype.termType = "BlankNode";
var BlankNode_default = BlankNode;

// node_modules/@rdfjs/data-model/lib/DefaultGraph.js
var DefaultGraph = class {
  equals(other) {
    return !!other && other.termType === this.termType;
  }
};
DefaultGraph.prototype.termType = "DefaultGraph";
DefaultGraph.prototype.value = "";
var DefaultGraph_default = DefaultGraph;

// node_modules/@rdfjs/data-model/lib/fromTerm.js
function fromTerm(factory2, original) {
  if (!original) {
    return null;
  }
  if (original.termType === "BlankNode") {
    return factory2.blankNode(original.value);
  }
  if (original.termType === "DefaultGraph") {
    return factory2.defaultGraph();
  }
  if (original.termType === "Literal") {
    return factory2.literal(original.value, original.language || factory2.namedNode(original.datatype.value));
  }
  if (original.termType === "NamedNode") {
    return factory2.namedNode(original.value);
  }
  if (original.termType === "Quad") {
    const subject = factory2.fromTerm(original.subject);
    const predicate = factory2.fromTerm(original.predicate);
    const object = factory2.fromTerm(original.object);
    const graph = factory2.fromTerm(original.graph);
    return factory2.quad(subject, predicate, object, graph);
  }
  if (original.termType === "Variable") {
    return factory2.variable(original.value);
  }
  throw new Error(`unknown termType ${original.termType}`);
}
var fromTerm_default = fromTerm;

// node_modules/@rdfjs/data-model/lib/Literal.js
var Literal = class {
  constructor(value, language2, datatype, direction = "") {
    this.value = value;
    this.language = language2;
    this.datatype = datatype;
    this.direction = direction;
  }
  equals(other) {
    return !!other && other.termType === this.termType && other.value === this.value && other.language === this.language && other.datatype.equals(this.datatype) && (other.direction || "") === this.direction;
  }
};
Literal.prototype.termType = "Literal";
var Literal_default = Literal;

// node_modules/@rdfjs/data-model/lib/NamedNode.js
var NamedNode = class {
  constructor(iri) {
    this.value = iri;
  }
  equals(other) {
    return !!other && other.termType === this.termType && other.value === this.value;
  }
};
NamedNode.prototype.termType = "NamedNode";
var NamedNode_default = NamedNode;

// node_modules/@rdfjs/data-model/lib/Quad.js
var Quad = class {
  constructor(subject, predicate, object, graph) {
    this.subject = subject;
    this.predicate = predicate;
    this.object = object;
    this.graph = graph;
  }
  equals(other) {
    return !!other && (other.termType === "Quad" || !other.termType) && other.subject.equals(this.subject) && other.predicate.equals(this.predicate) && other.object.equals(this.object) && other.graph.equals(this.graph);
  }
};
Quad.prototype.termType = "Quad";
Quad.prototype.value = "";
var Quad_default = Quad;

// node_modules/@rdfjs/data-model/lib/Variable.js
var Variable = class {
  constructor(name) {
    this.value = name;
  }
  equals(other) {
    return !!other && other.termType === this.termType && other.value === this.value;
  }
};
Variable.prototype.termType = "Variable";
var Variable_default = Variable;

// node_modules/@rdfjs/data-model/Factory.js
var dirLangStringDatatype = new NamedNode_default("http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString");
var langStringDatatype = new NamedNode_default("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");
var stringDatatype = new NamedNode_default("http://www.w3.org/2001/XMLSchema#string");
var DataFactory = class {
  constructor() {
    this.init();
  }
  init() {
    this._data = {
      blankNodeCounter: 0,
      defaultGraph: new DefaultGraph_default()
    };
  }
  namedNode(value) {
    return new NamedNode_default(value);
  }
  blankNode(value) {
    value = value || "b" + ++this._data.blankNodeCounter;
    return new BlankNode_default(value);
  }
  literal(value, languageOrDatatype) {
    if (typeof languageOrDatatype === "string") {
      return new Literal_default(value, languageOrDatatype, langStringDatatype);
    } else if (typeof languageOrDatatype?.language === "string") {
      return new Literal_default(
        value,
        languageOrDatatype.language,
        languageOrDatatype.direction ? dirLangStringDatatype : langStringDatatype,
        languageOrDatatype.direction
      );
    } else {
      return new Literal_default(value, "", languageOrDatatype || stringDatatype);
    }
  }
  variable(value) {
    return new Variable_default(value);
  }
  defaultGraph() {
    return this._data.defaultGraph;
  }
  quad(subject, predicate, object, graph = this.defaultGraph()) {
    return new Quad_default(subject, predicate, object, graph);
  }
  fromTerm(original) {
    return fromTerm_default(this, original);
  }
  fromQuad(original) {
    return fromTerm_default(this, original);
  }
};
DataFactory.exports = [
  "blankNode",
  "defaultGraph",
  "fromQuad",
  "fromTerm",
  "literal",
  "namedNode",
  "quad",
  "variable"
];
var Factory_default = DataFactory;

// node_modules/@rdfjs/data-model/index.js
var factory = new Factory_default();
var data_model_default = factory;

// node_modules/@rdfjs/namespace/index.js
var handler = {
  apply: (target, thisArg, args) => target(args[0]),
  get: (target, property) => target(property)
};
function namespace(baseIRI, { factory: factory2 = data_model_default } = {}) {
  const builder = (term = "") => factory2.namedNode(`${baseIRI}${term.raw || term}`);
  return typeof Proxy === "undefined" ? builder : new Proxy(builder, handler);
}
var namespace_default = namespace;

// node_modules/grapoi/lib/namespaces.js
var xsd = namespace_default("http://www.w3.org/2001/XMLSchema#");
var rdfns = namespace_default("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
var rdfs = namespace_default("http://www.w3.org/2000/01/rdf-schema#");

// node_modules/grapoi/Processor.js
var Processor = class _Processor {
  static add({ ptr, start, end, subjects = [null], predicates = [null], objects = [null], graphs, callback } = {}) {
    if (!ptr.factory) {
      throw new Error("add operation requires a factory");
    }
    let edgeCallback = () => {
    };
    if (callback) {
      edgeCallback = (quad2) => {
        callback(new Edge_default({ dataset: ptr.dataset, start, end, quad: quad2 }));
      };
    }
    for (const subject of subjects) {
      for (const predicate of predicates) {
        for (const object of objects) {
          for (const graph of graphs) {
            const pattern = { subject, predicate, object, graph };
            pattern[start] = ptr.term;
            const quad2 = ptr.factory.quad(
              pattern.subject,
              pattern.predicate,
              pattern.object,
              pattern.graph
            );
            ptr.dataset.add(quad2);
            edgeCallback(quad2);
          }
        }
      }
    }
    return ptr;
  }
  static addList({ ptr, predicates, items, graphs }) {
    if (ptr.isAny()) {
      throw new Error("can't attach a list to an any ptr");
    }
    for (const predicate of predicates) {
      for (const graph of graphs) {
        const nodes = items.map(() => ptr.factory.blankNode());
        ptr.dataset.add(ptr.factory.quad(ptr.term, predicate, nodes[0] || rdfns.nil, graph));
        for (let index = 0; index < nodes.length; index++) {
          ptr.dataset.add(ptr.factory.quad(nodes[index], rdfns.first, items[index], graph));
          ptr.dataset.add(ptr.factory.quad(nodes[index], rdfns.rest, nodes[index + 1] || rdfns.nil, graph));
        }
      }
    }
    return ptr;
  }
  static delete({
    ptr,
    start,
    subjects = [null],
    predicates = [null],
    objects = [null]
  }) {
    for (const subject of subjects) {
      for (const predicate of predicates) {
        for (const object of objects) {
          const pattern = { subject, predicate, object };
          pattern[start] = ptr.term;
          const matches = ptr.dataset.match(pattern.subject, pattern.predicate, pattern.object);
          for (const quad2 of matches) {
            ptr.dataset.delete(quad2);
          }
        }
      }
    }
    return ptr;
  }
  static deleteList({ ptr, predicates }) {
    const toDelete = [];
    for (const predicate of predicates) {
      for (const quad2 of ptr.dataset.match(ptr.term, predicate)) {
        let link = quad2.object;
        toDelete.push(quad2);
        while (!rdfns.nil.equals(link)) {
          link = toDelete[toDelete.length - 1].object;
          const matches = ptr.dataset.match(link);
          if (matches.size === 0) {
            break;
          }
          for (const quad3 of matches) {
            toDelete.push(quad3);
          }
        }
      }
    }
    for (const quad2 of toDelete) {
      ptr.dataset.delete(quad2);
    }
    return ptr;
  }
  static execute({
    ptr,
    operation = "traverse",
    quantifier,
    start,
    end,
    subjects,
    predicates,
    objects,
    graphs,
    items,
    callback
  } = {}) {
    if (operation === "add") {
      return _Processor.add({ ptr, start, end, subjects, predicates, objects, graphs, callback });
    }
    if (operation === "addList") {
      return _Processor.addList({ ptr, predicates, items, graphs });
    }
    if (operation === "delete") {
      return _Processor.delete({ ptr, start, subjects, predicates, objects });
    }
    if (operation === "deleteList") {
      return _Processor.deleteList({ ptr, predicates });
    }
    if (operation === "isList") {
      return _Processor.isList({ ptr });
    }
    if (operation === "list") {
      return _Processor.list({ ptr });
    }
    if (operation === "traverse") {
      return _Processor.traverse({ ptr, quantifier, start, end, subjects, predicates, objects, graphs });
    }
    throw new Error(`unknown operation ${operation}`);
  }
  static isList({ ptr }) {
    if (ptr.isAny()) {
      return false;
    }
    if (rdfns.nil.equals(ptr.term)) {
      return true;
    }
    const item = _Processor.traverse({ ptr, predicates: [rdfns.first] });
    if (item.length === 1) {
      return true;
    }
    return false;
  }
  static list({ ptr }) {
    if (!ptr.isList()) {
      return void 0;
    }
    return {
      *[Symbol.iterator]() {
        while (ptr && !ptr.term.equals(rdfns.nil)) {
          const value = ptr.out([rdfns.first]);
          if (value.length !== 1) {
            throw new Error(`Invalid list: rdf:first count not equals one on ${ptr.value}`);
          }
          const rest = ptr.out([rdfns.rest]);
          if (rest.length !== 1) {
            throw new Error(`Invalid list: rdf:rest count not equals one on ${ptr.value}`);
          }
          yield value[0];
          ptr = rest[0];
        }
      }
    };
  }
  static traverse({
    ptr,
    quantifier = "one",
    start = "subject",
    end = "object",
    subjects = [null],
    predicates = [null],
    objects = [null],
    graphs = [null],
    callback
  }) {
    if (quantifier === "one") {
      return _Processor.traverseOne({ ptr, start, end, subjects, predicates, objects, graphs, callback });
    }
    if (quantifier === "oneOrMore") {
      const ptrs = _Processor.traverse({ ptr, end, start, subjects, predicates, objects, graphs, callback });
      return _Processor.traverseMore({ ptrs, end, start, subjects, predicates, objects, graphs, callback });
    }
    if (quantifier === "zeroOrMore") {
      return _Processor.traverseMore({ ptrs: [ptr], end, start, subjects, predicates, objects, graphs, callback });
    }
    if (quantifier === "zeroOrOne") {
      return [ptr, ..._Processor.traverse({ ptr, end, start, subjects, predicates, objects, graphs, callback })];
    }
    throw new Error(`unknown quantifier ${quantifier}`);
  }
  static traverseMore({ ptrs, end, start, subjects, predicates, objects, graphs, callback } = {}) {
    let result = [...ptrs];
    let current;
    let last;
    do {
      current = [];
      for (const ptr of ptrs) {
        current = [
          ...current,
          ..._Processor.traverseOne({ ptr, end, start, subjects, predicates, objects, graphs, callback })
        ];
      }
      if (last) {
        current = current.filter((ptr) => !last.has(ptr.term));
      }
      ptrs = current;
      result = [...result, ...current];
      last = new TermSet_default(result.map((ptr) => ptr.term));
    } while (current.length > 0);
    return result;
  }
  static traverseOne({ ptr, start, end, subjects, predicates, objects, graphs, callback = (edge, ptr2) => ptr2.extend(edge) } = {}) {
    const results = [];
    for (const subject of subjects) {
      for (const predicate of predicates) {
        for (const object of objects) {
          for (const graph of graphs) {
            const pattern = { subject, predicate, object, graph };
            pattern[start] = ptr.term;
            for (const quad2 of ptr.dataset.match(pattern.subject, pattern.predicate, pattern.object, pattern.graph)) {
              results.push(callback(new Edge_default({ dataset: ptr.dataset, end, quad: quad2, start }), ptr));
            }
          }
        }
      }
    }
    return results;
  }
};
var Processor_default = Processor;

// node_modules/grapoi/Path.js
function createEdgeCallback(context, callback) {
  if (!callback) {
    return () => {
    };
  }
  return (edge) => callback(context.extend(edge));
}
var Path = class {
  constructor({ dataset: dataset2, edges = [], factory: factory2, graph, term }) {
    if (!dataset2 && edges.length === 0) {
      throw new Error("dataset or edges is required");
    }
    if (edges.length === 0 && typeof term === "undefined") {
      throw new Error("edges or term must be given");
    }
    if (edges.length > 0 && term) {
      throw new Error("edges or term must be given");
    }
    this.dataset = dataset2 || edges[edges.length - 1].dataset;
    this.edges = edges;
    this.factory = factory2;
    this._graph = graph;
    if (edges.length === 0) {
      this._term = term;
    }
  }
  get edge() {
    return this.edges[this.edges.length - 1];
  }
  get graph() {
    if (typeof this._graph === "object") {
      return this._graph;
    }
    return this.edge && this.edge.graph;
  }
  get length() {
    if (this._term !== void 0) {
      return 1;
    }
    return this.edges.length + 1;
  }
  get startTerm() {
    return this._term || this.edges[0].startTerm;
  }
  get term() {
    if (this._term !== void 0) {
      return this._term;
    }
    return this.edge.term;
  }
  get value() {
    const term = this.term;
    return term === null ? void 0 : term.value;
  }
  addIn(predicates, subjects, callback) {
    return Processor_default.add({
      ptr: this,
      start: "object",
      end: "subject",
      subjects,
      predicates,
      graphs: [this.graph || this.factory.defaultGraph()],
      callback: createEdgeCallback(this, callback)
    });
  }
  addList(predicates, items) {
    return Processor_default.addList({
      ptr: this,
      predicates,
      graphs: [this.graph || this.factory.defaultGraph()],
      items
    });
  }
  addOut(predicates, objects, callback) {
    return Processor_default.add({
      ptr: this,
      start: "subject",
      end: "object",
      predicates,
      objects,
      graphs: [this.graph || this.factory.defaultGraph()],
      callback: createEdgeCallback(this, callback)
    });
  }
  deleteIn(predicates, subjects) {
    return Processor_default.delete({
      ptr: this,
      start: "object",
      subjects,
      predicates
    });
  }
  deleteList(predicates) {
    return Processor_default.deleteList({
      ptr: this,
      predicates
    });
  }
  deleteOut(predicates, objects) {
    return Processor_default.delete({
      ptr: this,
      start: "subject",
      predicates,
      objects
    });
  }
  execute({ operation, quantifier, start, end, subjects, predicates, objects, graphs, items, callback }) {
    return Processor_default.execute({
      ptr: this,
      operation,
      quantifier,
      start,
      end,
      subjects,
      predicates,
      objects,
      graphs,
      items,
      callback
    });
  }
  extend(edge) {
    return new this.constructor({
      dataset: this.dataset,
      edges: [...this.edges, edge],
      factory: this.factory,
      graph: this._graph
    });
  }
  hasIn(predicates, subjects) {
    return Processor_default.traverse({
      ptr: this,
      start: "object",
      end: "object",
      subjects,
      predicates,
      graphs: [this.graph]
    });
  }
  hasOut(predicates, objects) {
    return Processor_default.traverse({
      ptr: this,
      start: "subject",
      end: "subject",
      predicates,
      objects,
      graphs: [this.graph]
    });
  }
  in(predicates, subjects) {
    return Processor_default.traverse({
      ptr: this,
      start: "object",
      end: "subject",
      subjects,
      predicates,
      graphs: [this.graph]
    });
  }
  isAny() {
    return !this.term;
  }
  isList() {
    return Processor_default.isList({ ptr: this });
  }
  list() {
    return Processor_default.list({ ptr: this });
  }
  *nodes() {
    for (let index = 0; index < this.length; index++) {
      if (this._term !== void 0) {
        yield {
          dataset: this.dataset,
          term: this._term
        };
      } else if (this.edges.length > index) {
        yield {
          dataset: this.edges[index].dataset,
          term: this.edges[index].startTerm
        };
      } else if (this.edges.length === index) {
        yield {
          dataset: this.edges[index - 1].dataset,
          term: this.edges[index - 1].term
        };
      }
    }
  }
  out(predicates, objects) {
    return Processor_default.traverse({
      ptr: this,
      predicates,
      objects,
      graphs: [this.graph]
    });
  }
  *quads() {
    for (const { quad: quad2 } of this.edges) {
      yield quad2;
    }
  }
  trim() {
    return new this.constructor({
      dataset: this.dataset,
      factory: this.factory,
      graph: this.graph,
      term: this.term
    });
  }
};
var Path_default = Path;

// node_modules/grapoi/lib/termIsEqual.js
function termIsEqual(a, b) {
  if (a) {
    return a.equals(b);
  }
  return a === b;
}
var termIsEqual_default = termIsEqual;

// node_modules/grapoi/lib/ptrIsEqual.js
function ptrIsEqual(a, b) {
  if (a.dataset !== b.dataset) {
    return false;
  }
  if (!termIsEqual_default(a.graph, b.graph)) {
    return false;
  }
  if (!termIsEqual_default(a.term, b.term)) {
    return false;
  }
  return true;
}
var ptrIsEqual_default = ptrIsEqual;

// node_modules/grapoi/PathList.js
function createExtendCallback(ptrList, callback) {
  if (!callback) {
    return () => {
    };
  }
  return (ptr) => {
    return callback(new ptrList.constructor({
      factory: ptrList.factory,
      ptrs: [ptr]
    }));
  };
}
var PathList = class {
  /**
   * Create a new instance
   * @param {DatasetCore} dataset Dataset for the pointers
   * @param {Environment} factory Factory for new quads
   * @param {Path[]} ptrs Use existing pointers
   * @param {Term[]} terms Terms for the pointers
   * @param {Term[]} graphs Graphs for the pointers
   */
  constructor({ dataset: dataset2, factory: factory2, ptrs, terms, graphs }) {
    this.factory = factory2;
    if (ptrs) {
      this.ptrs = [...ptrs];
    } else {
      this.ptrs = [];
      for (const term of terms || [null]) {
        for (const graph of graphs || [null]) {
          this.ptrs.push(new Path_default({ dataset: dataset2, factory: factory2, graph, term }));
        }
      }
    }
  }
  /**
   * Dataset of the pointer or null if there is no unique dataset.
   * @returns {DatasetCore|null} Unique dataset or null
   */
  get dataset() {
    const datasets = new Set(this.datasets);
    if (datasets.size !== 1) {
      return null;
    }
    return datasets[Symbol.iterator]().next().value;
  }
  /**
   * An array of all datasets of all pointers.
   * @returns {DatasetCore[]} Array of datasets.
   */
  get datasets() {
    return this.ptrs.map((ptr) => ptr.dataset);
  }
  /**
   * The term of the pointers if all pointers refer to a unique term.
   * @returns {Term|undefined} Term of undefined
   */
  get term() {
    const terms = new TermSet_default(this.terms);
    if (terms.size !== 1) {
      return void 0;
    }
    return terms[Symbol.iterator]().next().value;
  }
  /**
   * An array of all terms of all pointers.
   * @returns {Term[]} Array of all terms
   */
  get terms() {
    return this.ptrs.map((ptr) => ptr.term);
  }
  /**
   * The value of the pointers if all pointers refer to a unique term.
   * @returns {String|undefined} Value or undefined
   */
  get value() {
    const term = this.term;
    return term === void 0 || term === null ? void 0 : term.value;
  }
  /**
   * An array of all values of all pointers.
   * @returns {String[]} Array of all values
   */
  get values() {
    return this.ptrs.map((ptr) => ptr.value);
  }
  /**
   * Add quads with the current terms as the object
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} subjects Subjects of the quads
   * @param {function} [callback] Function called for each subject as a pointer argument
   * @returns {PathList} this
   */
  addIn(predicates, subjects, callback) {
    const extendCallback = createExtendCallback(this, callback);
    for (const ptr of this.ptrs) {
      ptr.addIn(predicates, subjects, extendCallback);
    }
    return this;
  }
  /**
   * Add lists with the given items
   * @param {Term[]} predicates Predicates of the lists
   * @param {Term[]} items List items
   * @returns {PathList} this
   */
  addList(predicates, items) {
    if (this.isAny()) {
      throw new Error("can't attach a list to an any ptr");
    }
    for (const ptr of this.ptrs) {
      ptr.addList(predicates, items);
    }
    return this;
  }
  /**
   * Add quads with the current terms as the subject
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} objects Objects of the quads
   * @param {function} [callback] Function called for each subject as a pointer argument
   * @returns {PathList} this
   */
  addOut(predicates, objects, callback) {
    const extendCallback = createExtendCallback(this, callback);
    for (const ptr of this.ptrs) {
      ptr.addOut(predicates, objects, extendCallback);
    }
    return this;
  }
  /**
   * Create a new instance of the Constructor with a cloned list of pointers.
   * @param args Additional arguments for the constructor
   * @returns {Constructor} Cloned instance
   */
  clone(args) {
    return new this.constructor({ factory: this.factory, ptrs: this.ptrs, ...args });
  }
  /**
   * Delete quads with the current terms as the object.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} subjects Subjects of the quads
   * @returns {PathList} this
   */
  deleteIn(predicates, subjects) {
    for (const ptr of this.ptrs) {
      ptr.deleteIn(predicates, subjects);
    }
    return this;
  }
  /**
   * Delete lists.
   * @param {Term[]} predicates Predicates of the lists
   * @returns {PathList} this
   */
  deleteList(predicates) {
    for (const ptr of this.ptrs) {
      ptr.deleteList(predicates);
    }
    return this;
  }
  /**
   * Delete quads with the current terms as the subject.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} objects Objects of the quads
   * @returns {PathList} this
   */
  deleteOut(predicates, objects) {
    for (const ptr of this.ptrs) {
      ptr.deleteOut(predicates, objects);
    }
    return this;
  }
  /**
   * Create a new instance with a unique set of pointers.
   * The path of the pointers is trimmed.
   * @returns {Constructor} Instance with unique pointers
   */
  distinct() {
    const ptrs = this.ptrs.reduce((unique, ptr) => {
      if (!unique.some((uPtr) => ptrIsEqual_default(uPtr, ptr))) {
        unique.push(ptr.trim());
      }
      return unique;
    }, []);
    return this.clone({ ptrs });
  }
  /**
   * Executes a single instruction.
   * @param instruction The instruction to execute
   * @returns {Constructor} Instance with the result pointers.
   */
  execute(instruction) {
    return this.clone({ ptrs: this.ptrs.flatMap((ptr) => ptr.execute(instruction)) });
  }
  /**
   * Executes an array of instructions.
   * @param instruction The instructions to execute
   * @returns {Constructor} Instance with the result pointers.
   */
  executeAll(instructions) {
    let output = this;
    for (const instruction of instructions) {
      output = output.execute(instruction);
    }
    return output;
  }
  /**
   * Filter the pointers based on the result of the given callback function.
   * @param callback
   * @returns {Constructor} Instance with the filtered pointers.
   */
  filter(callback) {
    return this.clone({ ptrs: [...this].filter(callback).map((ptr) => ptr.ptrs[0]) });
  }
  /**
   * Filter the pointers based on matching quad(s) with the current terms as the object.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} subjects Subjects of the quads
   * @returns {Constructor} Instance that contains only the filtered pointers
   */
  hasIn(predicates, subjects) {
    return this.clone({ ptrs: this.ptrs.flatMap((ptr) => ptr.hasIn(predicates, subjects)) });
  }
  /**
   * Filter the pointers based on matching quad(s) with the current terms as the subject.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} objects Objects of the quads
   * @returns {Constructor} Instance that contains only the filtered pointers
   */
  hasOut(predicates, objects) {
    return this.clone({ ptrs: this.ptrs.flatMap((ptr) => ptr.hasOut(predicates, objects)) });
  }
  /**
   * Traverse the graph with the current terms as the object.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} subjects Subjects of the quads
   * @returns {Constructor} Instance with pointers of the traversed target terms
   */
  in(predicates, subjects) {
    return this.clone({ ptrs: this.ptrs.flatMap((ptr) => ptr.in(predicates, subjects)) });
  }
  /**
   * Check if any pointer is an any-pointer.
   * @returns {boolean} True if any any-pointer was found
   */
  isAny() {
    return this.ptrs.length > 0 && this.ptrs.some((ptr) => ptr.isAny());
  }
  /**
   * Check if there is only one pointer and whether that pointer is a list.
   * @returns {boolean} True if the pointer is a list
   */
  isList() {
    if (this.ptrs.length !== 1) {
      return false;
    }
    return this.ptrs[0].isList();
  }
  /**
   * Create an iterator for the list if the instance is a list; otherwise, return undefined.
   * @returns {Iterator<Constructor>|undefined} Iterator or undefined
   */
  list() {
    if (!this.isList()) {
      return void 0;
    }
    const iterator = this.ptrs[0].list();
    const ths = this;
    return (function* () {
      for (const ptr of iterator) {
        yield ths.clone({ ptrs: [ptr] });
      }
    })();
  }
  /**
   * Map each pointer using the given callback function.
   * @param callback
   * @returns {Array} Array of mapped results
   */
  map(callback) {
    return [...this].map(callback);
  }
  /**
   * Create a new instance with pointers using the given terms.
   * @param terms Array of terms for the pointers
   * @returns {Constructor} Instance with pointers of the given terms
   */
  node(terms) {
    const dataset2 = this.dataset;
    const ptrs = [...terms].map((term) => new Path_default({ dataset: dataset2, factory: this.factory, term }));
    return this.clone({ ptrs });
  }
  /**
   * Traverse the graph with the current terms as the subject.
   * @param {Term[]} predicates Predicates of the quads
   * @param {Term[]} objects Objects of the quads
   * @returns {Constructor} Instance with pointers of the traversed target terms
   */
  out(predicates, objects) {
    return this.clone({ ptrs: this.ptrs.flatMap((ptr) => ptr.out(predicates, objects)) });
  }
  /**
   * Create an iterator of all quads of all pointer paths.
   * @returns {Iterator<Quad>} Iterator for the quads
   */
  *quads() {
    for (const { edges } of this.ptrs) {
      for (const { quad: quad2 } of edges) {
        yield quad2;
      }
    }
  }
  /**
   * Trim the path of all pointers and create a new instance for the result.
   * @returns {Constructor} Instance of the trimmed pointers
   */
  trim() {
    return this.clone({
      ptrs: this.ptrs.map((ptr) => ptr.trim())
    });
  }
  /**
   * Iterator for each pointer wrapped into a new instance.
   * @returns {Iterator<Constructor>}} Iterator for the wrapped pointers
   */
  *[Symbol.iterator]() {
    for (const ptr of this.ptrs) {
      yield this.clone({ ptrs: [ptr] });
    }
  }
};
var PathList_default = PathList;

// lib/namespaces.js
var owl = namespace_default("http://www.w3.org/2002/07/owl#");
var rdf = namespace_default("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
var rdfs2 = namespace_default("http://www.w3.org/2000/01/rdf-schema#");
var sh = namespace_default("http://www.w3.org/ns/shacl#");
var shn = namespace_default("https://schemas.link/shacl-next#");
var xsd2 = namespace_default("http://www.w3.org/2001/XMLSchema#");

// lib/pathsToString.js
function pathToString(path) {
  if (!path) {
    return "{}";
  }
  return `{${[...path.quads()].map((quad2) => to_ntriples_default(quad2)).join(" ")}}`;
}
function pathsToString(paths) {
  if (!paths) {
    return "{}";
  }
  return `{${paths.map((path) => pathToString(path)).join(" ")}}`;
}
var pathsToString_default = pathsToString;

// lib/Report.js
var import_once = __toESM(require_once(), 1);
var Report = class {
  constructor({ details, factory: factory2, options, results = [] } = {}) {
    this.details = details;
    this.factory = factory2;
    this.options = options;
    this.results = results;
    this._conforms = (0, import_once.default)(() => !this.results.some((result) => {
      return result.severity.equals(sh.Info) || result.severity.equals(sh.Violation) || result.severity.equals(sh.Warning);
    }));
    this._ptr = (0, import_once.default)(() => this.build());
  }
  get conforms() {
    return this._conforms();
  }
  get dataset() {
    return this.ptr.dataset;
  }
  get ptr() {
    return this._ptr();
  }
  get term() {
    return this.ptr.term;
  }
  build() {
    const ptr = new PathList_default({
      dataset: this.factory.dataset(),
      factory: this.factory,
      terms: [this.factory.blankNode()]
    });
    ptr.addOut([rdf.type], [sh.ValidationReport]).addOut([sh.conforms], [this.factory.literal(this.conforms.toString(), xsd2.boolean)]);
    for (const result of this.results) {
      ptr.addOut([sh.result], [this.factory.blankNode()], (resultPtr) => {
        result.build(resultPtr, this.options);
      });
    }
    return ptr;
  }
  coverage() {
    return this.results.flatMap((result) => result.coverage());
  }
};
var Report_default = Report;

// lib/Result.js
var import_once2 = __toESM(require_once(), 1);
function resolveVariables(message, args) {
  return Object.entries(args).reduce((message2, [name, value]) => {
    if (value && value.termType) {
      value = to_ntriples_default(value);
    }
    return message2.replace(`{$${name}}`, value).replace(`{?${name}}`, value);
  }, message);
}
var Result = class {
  constructor({
    args = {},
    constraintComponent,
    factory: factory2,
    focusNode,
    message = [],
    path,
    results = [],
    severity,
    shape,
    source = [],
    value,
    valuePaths = []
  } = {}) {
    this.args = args;
    this.constraintComponent = constraintComponent;
    this.factory = factory2;
    this.focusNode = focusNode;
    this.path = path || shape.path;
    this.results = results;
    this.severity = severity;
    this.shape = shape;
    this.source = source;
    this.value = value;
    this.valuePaths = valuePaths;
    this._message = (0, import_once2.default)(() => {
      if (this.shape.message.length > 0) {
        message = this.shape.message;
      }
      if (message.length === 0) {
        message = this.shape.ptr.node([this.constraintComponent]).out([sh.message]).terms;
      }
      return message.map((message2) => {
        return factory2.literal(resolveVariables(message2.value, args, factory2), message2.language || null);
      });
    });
  }
  get message() {
    return this._message();
  }
  build(resultPtr, { details } = {}) {
    resultPtr.addOut([rdf.type], [sh.ValidationResult]).addOut([sh.focusNode], this.focusNode.terms).addOut([sh.resultSeverity], [this.severity]).addOut([sh.sourceConstraint], this.source).addOut([sh.sourceConstraintComponent], [this.constraintComponent]).addOut([sh.sourceShape], this.shape.ptr.terms);
    if (this.message) {
      resultPtr.addOut([sh.resultMessage], this.message);
    }
    const buildResultStep = (step) => {
      if (step.quantifier === "one") {
        if (step.predicates.length > 1) {
          return resultPtr.node([this.factory.blankNode()]).addList([sh.alternativePath], step.predicates);
        }
        if (step.start === "object") {
          return resultPtr.node([this.factory.blankNode()]).addOut([sh.inversePath], [step.predicates[0]]);
        }
        return resultPtr.node([step.predicates[0]]);
      }
      if (step.quantifier === "oneOrMore") {
        return resultPtr.node([this.factory.blankNode()]).addOut([sh.oneOrMorePath], [step.predicates[0]]);
      }
      if (step.quantifier === "zeroOrMore") {
        return resultPtr.node([this.factory.blankNode()]).addOut([sh.zeroOrMorePath], [step.predicates[0]]);
      }
      if (step.quantifier === "zeroOrOne") {
        return resultPtr.node([this.factory.blankNode()]).addOut([sh.zeroOrOnePath], [step.predicates[0]]);
      }
    };
    if (this.path) {
      if (this.path.length === 1) {
        resultPtr.addOut([sh.resultPath], buildResultStep(this.path[0]).terms);
      } else {
        resultPtr.addList([sh.resultPath], this.path.map((step) => buildResultStep(step).term));
      }
    }
    if (typeof this.value !== "undefined") {
      resultPtr.addOut([sh.value], this.value.terms);
    }
    if (details) {
      for (const result of this.results) {
        resultPtr.addOut([sh.detail], [this.factory.blankNode()], (detailPtr) => {
          result.build(detailPtr, { details });
        });
      }
    }
  }
  coverage() {
    return [
      ...this.valuePaths.flatMap((valuePath) => [...valuePath.quads()]),
      ...this.results.flatMap((result) => result.coverage())
    ];
  }
};
var Result_default = Result;

// lib/Context.js
var Context = class _Context {
  constructor({
    factory: factory2,
    focusNode,
    options = { debug: false, details: false },
    processed = /* @__PURE__ */ new Set(),
    report = new Report_default({ factory: factory2, options }),
    results = /* @__PURE__ */ new Map(),
    shape,
    value,
    valueOrNode,
    valuePaths,
    values
  } = {}) {
    this.factory = factory2;
    this.focusNode = focusNode;
    this.options = options;
    this.processed = processed;
    this.report = report;
    this.results = results;
    this.shape = shape;
    this.value = value;
    this.valuePaths = valuePaths;
    this.valueOrNode = valueOrNode;
    this.values = values;
  }
  create({
    child,
    focusNode = this.focusNode,
    shape = this.shape,
    value = this.value,
    valueOrNode = this.valueOrNode,
    valuePaths = this.valuePaths,
    values = this.values
  } = {}) {
    return new _Context({
      factory: this.factory,
      focusNode,
      options: this.options,
      processed: this.processed,
      report: child ? new Report_default({ factory: this.factory, options: this.options }) : this.report,
      results: this.results,
      shape,
      value,
      valueOrNode,
      valuePaths,
      values
    });
  }
  id({ shape = this.shape } = {}) {
    return `${to_ntriples_default(shape.ptr.term)} - ${to_ntriples_default(this.focusNode.term)} - ${pathsToString_default(this.valuePaths)}`;
  }
  result(args) {
    const result = new Result_default({
      factory: this.factory,
      focusNode: this.focusNode,
      shape: this.shape,
      value: this.value,
      valuePaths: this.valuePaths,
      ...args
    });
    const id = this.id();
    if (!this.results.has(id)) {
      this.results.set(id, /* @__PURE__ */ new Set([result]));
    } else {
      this.results.get(id).add(result);
    }
    this.report.results.push(result);
  }
  debug(constraintComponent, args) {
    if (this.options.debug) {
      this.result({ severity: shn.Debug, constraintComponent, ...args });
    }
  }
  trace(constraintComponent, args) {
    if (this.options.trace) {
      this.result({ severity: shn.Trace, constraintComponent, ...args });
    }
  }
  test(success, constraintComponent, args) {
    if (success) {
      this.debug(constraintComponent, args);
    } else {
      this.violation(constraintComponent, args);
    }
  }
  violation(constraintComponent, args) {
    this.result({
      constraintComponent,
      severity: this.shape.severity || sh.Violation,
      ...args
    });
  }
};
var Context_default = Context;

// lib/validations/traversal.js
function compileTraversal() {
  return {
    generic: validateTraversal()
  };
}
function validateTraversal() {
  return (context) => {
    context.trace(shn.TraversalConstraintComponent, {
      args: {},
      message: [context.factory.literal("Traversal")],
      value: context.valueOrNode
    });
  };
}

// lib/Registry.js
var Registry = class {
  constructor(validations2) {
    this.validations = new TermMap_default(validations2);
  }
  compile(shape) {
    const coverage = shape.validator.options.coverage;
    if (shape.deactivated) {
      return [];
    }
    let propertyValidation = false;
    const selected = /* @__PURE__ */ new Set();
    for (const property of shape.ptr.execute({ start: "subject", end: "predicate" })) {
      const result = this.validations.get(property.term);
      if (result) {
        selected.add(result);
        if (property.term.equals(sh.property)) {
          propertyValidation = true;
        }
      }
    }
    if (coverage && shape.isPropertyShape && !propertyValidation) {
      selected.add(compileTraversal);
    }
    return [...selected].map((selected2) => selected2(shape)).filter(Boolean);
  }
};
var Registry_default = Registry;

// lib/Shape.js
var import_once4 = __toESM(require_once(), 1);
var import_rdf_literal = __toESM(require_rdf_literal(), 1);

// lib/parsePath.js
function parseStep(ptr) {
  if (ptr.term.termType !== "BlankNode") {
    return {
      quantifier: "one",
      start: "subject",
      end: "object",
      predicates: [ptr.term]
    };
  }
  const alternativePtr = ptr.out([sh.alternativePath]);
  if (alternativePtr.ptrs.length === 1 && alternativePtr.ptrs[0].isList()) {
    return {
      quantifier: "one",
      start: "subject",
      end: "object",
      predicates: [...alternativePtr.list()].map((ptr2) => ptr2.term)
    };
  }
  const inversePtr = ptr.out([sh.inversePath]);
  if (inversePtr.term) {
    return {
      quantifier: "one",
      start: "object",
      end: "subject",
      predicates: [inversePtr.term]
    };
  }
  const oneOrMorePtr = ptr.out([sh.oneOrMorePath]);
  if (oneOrMorePtr.term) {
    return {
      quantifier: "oneOrMore",
      start: "subject",
      end: "object",
      predicates: [oneOrMorePtr.term]
    };
  }
  const zeroOrMorePtr = ptr.out([sh.zeroOrMorePath]);
  if (zeroOrMorePtr.term) {
    return {
      quantifier: "zeroOrMore",
      start: "subject",
      end: "object",
      predicates: [zeroOrMorePtr.term]
    };
  }
  const zeroOrOnePtr = ptr.out([sh.zeroOrOnePath]);
  if (zeroOrOnePtr.term) {
    return {
      quantifier: "zeroOrOne",
      start: "subject",
      end: "object",
      predicates: [zeroOrOnePtr.term]
    };
  }
}
function parsePath(ptr) {
  if (ptr.terms.length === 0) {
    return null;
  }
  if (!ptr.ptrs[0].isList()) {
    return [parseStep(ptr)];
  }
  return [...ptr.list()].map((stepPtr) => parseStep(stepPtr));
}
var parsePath_default = parsePath;

// lib/ShapeValidator.js
var import_once3 = __toESM(require_once(), 1);
var ShapeValidator = class {
  constructor(shape) {
    this.shape = shape;
    this._compiled = (0, import_once3.default)(() => this.shape.validator.registry.compile(shape));
  }
  get compiled() {
    return this._compiled();
  }
  async validate(context) {
    if (context.focusNode.dataset.size === 0) {
      return context;
    }
    if (this.shape.isPropertyShape) {
      await this.validateProperty(context);
    } else {
      await this.validateNode(context);
    }
    return context;
  }
  async validateNode(context) {
    const shapeContext = context.create({ shape: this.shape, valueOrNode: context.value || context.focusNode });
    for (const validation of this.compiled) {
      if (validation.node) {
        await validation.node(shapeContext);
      }
      if (validation.generic) {
        await validation.generic(shapeContext);
      }
    }
  }
  async validateProperty(context) {
    let resolved;
    if (this.shape.isSparqlShape) {
      resolved = context.focusNode;
    } else {
      resolved = context.focusNode.executeAll(this.shape.path);
    }
    const values = resolved.node(new TermSet_default(resolved.terms));
    const valuesPaths = [...resolved].reduce((valuesPaths2, valuePaths) => {
      const term = valuePaths.term;
      const value = resolved.node([term]);
      if (!valuesPaths2.has(term)) {
        valuesPaths2.set(term, { value, valuePaths: [] });
      }
      valuesPaths2.get(term).valuePaths.push(valuePaths);
      return valuesPaths2;
    }, new TermMap_default()).values();
    const valuesContext = context.create({ shape: this.shape, values });
    for (const validation of this.compiled) {
      if (validation.property) {
        await validation.property(valuesContext);
      }
    }
    for (const { value, valuePaths } of valuesPaths) {
      const valueContext = context.create({ shape: this.shape, value, valueOrNode: value, valuePaths });
      for (const validation of this.compiled) {
        if (validation.generic) {
          await validation.generic(valueContext);
        }
      }
    }
  }
};
var ShapeValidator_default = ShapeValidator;

// lib/resolveClasses.js
function resolveClasses(classes) {
  const resolved = new TermSet_default();
  const ptr = new PathList_default({ dataset: classes.dataset, terms: classes.terms });
  const results = ptr.execute({
    quantifier: "zeroOrMore",
    start: "object",
    end: "subject",
    predicates: [rdfs2.subClassOf]
  });
  for (const result of results.ptrs) {
    for (const { term } of result.nodes()) {
      resolved.add(term);
    }
  }
  return resolved;
}
var resolveClasses_default = resolveClasses;

// lib/TargetResolver.js
var TargetResolver = class {
  constructor(ptr, { registry }) {
    this.registry = registry;
    this.targetClass = new TermSet_default([
      ...resolveClasses_default(ptr.hasOut([rdf.type], [sh.NodeShape])),
      ...resolveClasses_default(ptr.out([sh.targetClass]))
    ]);
    this.targetNode = ptr.out([sh.targetNode]).terms;
    this.targetObjectsOf = ptr.out([sh.targetObjectsOf]).terms;
    this.targetSubjectsOf = ptr.out([sh.targetSubjectsOf]).terms;
    this.targets = [...ptr.out([sh.target])];
  }
  async resolve(context) {
    const any = context.focusNode.node([null]);
    const ptrs = [
      ...context.focusNode.hasOut([rdf.type], this.targetClass).ptrs,
      ...context.focusNode.node(this.targetNode).ptrs,
      ...any.execute({ start: "object", end: "object", predicates: this.targetObjectsOf }).ptrs,
      ...any.execute({ start: "subject", end: "subject", predicates: this.targetSubjectsOf }).ptrs
    ];
    for (const targetPtr of this.targets) {
      for (const [, resolver] of this.registry.targetResolvers) {
        const terms = await resolver(targetPtr, context);
        ptrs.push(...context.focusNode.node(terms).ptrs);
      }
    }
    const resolved = context.focusNode.clone({ ptrs });
    return resolved.node([...new TermSet_default(resolved.terms)]);
  }
};
var TargetResolver_default = TargetResolver;

// lib/Shape.js
var Shape = class {
  constructor(ptr, { validator }) {
    this.ptr = ptr;
    this.validator = validator;
    this._deactivated = (0, import_once4.default)(() => {
      const deactivatedTerm = this.ptr.out([sh.deactivated]).term;
      return deactivatedTerm && (0, import_rdf_literal.fromRdf)(deactivatedTerm);
    });
    this._message = (0, import_once4.default)(() => this.ptr.out([sh.message]).terms);
    this._path = (0, import_once4.default)(() => parsePath_default(this.ptr.out([sh.path])));
    this._severity = (0, import_once4.default)(() => this.ptr.out([sh.severity]).term);
    this._shapeValidator = (0, import_once4.default)(() => new ShapeValidator_default(this));
    this._sparql = (0, import_once4.default)(() => this.ptr.out([sh.sparql]));
    this._targetResolver = (0, import_once4.default)(() => new TargetResolver_default(this.ptr, { registry: this.validator.targetResolverRegistry }));
  }
  get deactivated() {
    return this._deactivated();
  }
  get isPropertyShape() {
    return Boolean(this.path);
  }
  get isSparqlShape() {
    return this.sparql.terms.length > 0;
  }
  get path() {
    return this._path();
  }
  get targetResolver() {
    return this._targetResolver();
  }
  get message() {
    return this._message();
  }
  get severity() {
    return this._severity();
  }
  get shapeValidator() {
    return this._shapeValidator();
  }
  get sparql() {
    return this._sparql();
  }
  async resolveTargets(context) {
    return this.targetResolver.resolve(context);
  }
  async validate(context) {
    const id = context.id({ shape: this });
    if (context.processed.has(id)) {
      if (context.results.has(id)) {
        for (const result of context.results.get(id)) {
          context.report.results.push(result);
        }
      }
      return context;
    }
    context.processed.add(id);
    return this.shapeValidator.validate(context);
  }
};
var Shape_default = Shape;

// lib/TargetResolverRegistry.js
var TargetResolverRegistry = class {
  constructor(targetResolvers) {
    this.targetResolvers = new TermMap_default(targetResolvers);
  }
};
var TargetResolverRegistry_default = TargetResolverRegistry;

// lib/validations/cardinality.js
function compileMaxCount(shape) {
  const maxCount = parseInt(shape.ptr.out([sh.maxCount]).value);
  return {
    property: validateMaxCountProperty(maxCount)
  };
}
function validateMaxCountProperty(maxCount) {
  return (context) => {
    context.test(context.values.terms.length <= maxCount, sh.MaxCountConstraintComponent, {
      args: { maxCount },
      message: [context.factory.literal("More than {$maxCount} values")]
    });
  };
}
function compileMinCount(shape) {
  const minCount = parseInt(shape.ptr.out([sh.minCount]).value);
  return {
    property: validateMinCountProperty(minCount)
  };
}
function validateMinCountProperty(minCount) {
  return (context) => {
    context.test(context.values.terms.length >= minCount, sh.MinCountConstraintComponent, {
      args: { minCount },
      message: [context.factory.literal("Less than {$minCount} values")]
    });
  };
}

// lib/async.js
async function every(items, func) {
  for (const item of items) {
    if (!await func(item)) {
      return false;
    }
  }
  return true;
}
async function filter(items, func) {
  return (await Promise.all(items.map((item) => func(item)))).filter(Boolean);
}
async function map(items, func) {
  return Promise.all(items.map(func));
}
async function some(items, func) {
  for (const item of items) {
    if (await func(item)) {
      return true;
    }
  }
  return false;
}

// lib/validations/logical.js
function compileAnd(shape) {
  const and = [...shape.ptr.out([sh.and])].flatMap((ptr) => [...ptr.list()]).map((ptr) => shape.validator.shape(ptr));
  return {
    generic: validateAnd(and)
  };
}
function validateAnd(and) {
  return async (context) => {
    const andReports = await map(and, async (shape) => {
      return (await shape.validate(context.create({ child: true, focusNode: context.valueOrNode }))).report;
    });
    const result = andReports.every((report) => report.conforms);
    context.test(result, sh.AndConstraintComponent, {
      results: andReports.flatMap((report) => report.results),
      value: context.valueOrNode
    });
  };
}
function compileNot(shape) {
  const not = shape.validator.shape(shape.ptr.out([sh.not]));
  return {
    generic: validateNot(not)
  };
}
function validateNot(not) {
  return async (context) => {
    const notReport = (await not.validate(context.create({ child: true, focusNode: context.valueOrNode }))).report;
    const result = !notReport.conforms;
    context.test(result, sh.NotConstraintComponent, {
      args: { not: not.ptr.term },
      message: [context.factory.literal("Value does have shape {$not}")],
      results: notReport.results,
      value: context.valueOrNode
    });
  };
}
function compileOr(shape) {
  const or = [...shape.ptr.out([sh.or])].flatMap((ptr) => [...ptr.list()]).map((ptr) => shape.validator.shape(ptr));
  return {
    generic: validateOr(or)
  };
}
function validateOr(or) {
  return async (context) => {
    let results = [];
    let result;
    if (context.options.debug || context.options.details) {
      const orReports = await map(or, async (shape) => {
        return (await shape.validate(context.create({ child: true, focusNode: context.valueOrNode }))).report;
      });
      results = orReports.flatMap((report) => report.results);
      result = orReports.some((report) => report.conforms);
    } else {
      result = await some(or, async (shape) => {
        return (await shape.validate(context.create({ child: true, focusNode: context.valueOrNode }))).report.conforms;
      });
    }
    context.test(result, sh.OrConstraintComponent, {
      results,
      value: context.valueOrNode
    });
  };
}
function compileXone(shape) {
  const xone = [...shape.ptr.out([sh.xone])].flatMap((ptr) => [...ptr.list()]).map((ptr) => shape.validator.shape(ptr));
  return {
    generic: validateXone(xone)
  };
}
function validateXone(xone) {
  return async (context) => {
    const xoneReports = await map(xone, async (shape) => {
      return (await shape.validate(context.create({ child: true, focusNode: context.valueOrNode }))).report;
    });
    const result = xoneReports.filter((report) => report.conforms).length === 1;
    context.test(result, sh.XoneConstraintComponent, {
      results: xoneReports.flatMap((report) => report.results),
      value: context.valueOrNode
    });
  };
}

// lib/validations/other.js
var import_rdf_literal2 = __toESM(require_rdf_literal(), 1);
function compileClosedNode(shape) {
  const closed = (0, import_rdf_literal2.fromRdf)(shape.ptr.out([sh.closed]).term);
  if (!closed) {
    return null;
  }
  const propertyShapes = shape.ptr.out([sh.property]).map((ptr) => shape.validator.shape(ptr));
  const properties = new TermSet_default(propertyShapes.filter((shape2) => !shape2.deactivated).map((shape2) => shape2.path[0].predicates[0]));
  const ignoredProperties = new TermSet_default([...shape.ptr.out([sh.ignoredProperties]).list() || []].map((item) => item.term));
  return {
    node: validateClosedNode(properties, ignoredProperties)
  };
}
function validateClosedNode(properties, ignoredProperties) {
  return (context) => {
    const notAllowed = context.focusNode.execute({ start: "subject", end: "predicate" }).filter((property) => {
      if (ignoredProperties.has(property.term)) {
        return false;
      }
      return !properties.has(property.term);
    });
    if (notAllowed.ptrs.length > 0) {
      for (const value of notAllowed) {
        context.violation(sh.ClosedConstraintComponent, {
          message: [context.factory.literal("Predicate is not allowed (closed shape)")],
          path: [{ quantifier: "one", start: "subject", end: "object", predicates: [value.term] }],
          value: context.focusNode.node([[...value.quads()][0].object])
        });
      }
    } else {
      context.debug(sh.ClosedConstraintComponent);
    }
  };
}
function compileHasValue(shape) {
  const hasValue = shape.ptr.out([sh.hasValue]).term;
  return {
    node: validateHasValueNode(hasValue),
    property: validateHasValueProperty(hasValue)
  };
}
function validateHasValueNode(hasValue) {
  return (context) => {
    context.test(hasValue.equals(context.valueOrNode.term), sh.HasValueConstraintComponent, {
      args: { hasValue },
      message: [context.factory.literal("Value must be {$hasValue}")]
    });
  };
}
function validateHasValueProperty(hasValue) {
  return (context) => {
    const result = [...context.values].some((value) => hasValue.equals(value.term));
    context.test(result, sh.HasValueConstraintComponent, {
      args: { hasValue },
      message: [context.factory.literal("Missing expected value {$hasValue}")]
    });
  };
}
function compileIn(shape) {
  const values = new TermSet_default([...shape.ptr.out([sh.in]).list()].map((item) => item.term));
  return {
    generic: validateIn(values)
  };
}
function validateIn(values) {
  return (context) => {
    context.test(values.has(context.valueOrNode.term), sh.InConstraintComponent, {
      args: { in: [...values].map((v) => v.value).join(", ") },
      message: [context.factory.literal("Value is not in {$in}")],
      value: context.valueOrNode
    });
  };
}

// lib/compareTerms.js
var import_rdf_literal3 = __toESM(require_rdf_literal(), 1);
function compareTerms(termA, termB) {
  if (!termA || termA.termType !== "Literal") {
    return null;
  }
  if (!termB || termB.termType !== "Literal") {
    return null;
  }
  if (hasTimezone(termA) !== hasTimezone(termB)) {
    return null;
  }
  const valueA = (0, import_rdf_literal3.fromRdf)(termA);
  const valueB = (0, import_rdf_literal3.fromRdf)(termB);
  if (typeof valueA !== typeof valueB) {
    return null;
  }
  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB);
  }
  return valueA - valueB;
}
function hasTimezone(term) {
  const pattern = /^.*(((\+|-)\d{2}:\d{2})|Z)$/;
  return xsd2.dateTime.equals(term.datatype) && pattern.test(term.value);
}
var compareTerms_default = compareTerms;

// lib/validations/pair.js
function compileDisjoint(shape) {
  const disjoint = shape.ptr.out([sh.disjoint]).term;
  return {
    generic: validateDisjoint(disjoint)
  };
}
function validateDisjoint(disjoint) {
  return (context) => {
    const matches = context.focusNode.dataset.match(context.focusNode.term, disjoint, context.valueOrNode.term);
    context.test(matches.size === 0, sh.DisjointConstraintComponent, {
      args: { disjoint },
      message: [context.factory.literal("Value node must not also be one of the values of {$disjoint}")],
      value: context.valueOrNode
    });
  };
}
function compileEquals(shape) {
  const equals = shape.ptr.out([sh.equals]).term;
  return {
    node: validateEqualsNode(equals),
    property: validateEqualsProperty(equals)
  };
}
function validateEqualsNode(equals) {
  return (context) => {
    const reference = context.focusNode.out([equals]);
    const notEquals = reference.filter((ptr) => !ptr.term.equals(context.focusNode.term));
    const result = reference.terms.length !== 0 && notEquals.terms.length === 0;
    context.test(result, sh.EqualsConstraintComponent, {
      args: { equals },
      message: [context.factory.literal("Must have same values as {$equals}")],
      value: notEquals.terms[0] && context.focusNode.node([notEquals.terms[0]]) || context.focusNode
    });
  };
}
function validateEqualsProperty(equals) {
  return (context) => {
    const references = new TermSet_default(context.focusNode.out([equals]).terms);
    const values = new TermSet_default(context.values.terms);
    const missingReferences = [...values].filter((term) => !references.has(term));
    const missingValues = [...references].filter((term) => !values.has(term));
    const differences = [...missingReferences, ...missingValues];
    for (const value of differences) {
      context.violation(sh.EqualsConstraintComponent, {
        args: { equals },
        message: [context.factory.literal("Must have same values as {$equals}")],
        value: context.focusNode.node([value])
      });
    }
    if (differences.length === 0) {
      context.debug(sh.EqualsConstraintComponent, {
        args: { equals },
        message: [context.factory.literal("Must have same values as {$equals}")]
      });
    }
  };
}
function compileLessThan(shape) {
  const lessThan = shape.ptr.out([sh.lessThan]).term;
  return {
    property: validateLessThanProperty(lessThan)
  };
}
function validateLessThanProperty(lessThan) {
  return (context) => {
    const references = context.focusNode.out([lessThan]).terms;
    for (const value of context.values) {
      for (const reference of references) {
        const c = compareTerms_default(value.term, reference);
        if (c === null || c >= 0) {
          context.violation(sh.LessThanConstraintComponent, {
            args: { lessThan },
            message: [context.factory.literal("Value is not less than value of {$lessThan}")],
            value
          });
        } else {
          context.debug(sh.LessThanConstraintComponent, {
            args: { lessThan },
            message: [context.factory.literal("Value is not less than value of {$lessThan}")],
            value
          });
        }
      }
    }
  };
}
function compileLessThanOrEquals(shape) {
  const lessThanOrEquals = shape.ptr.out([sh.lessThanOrEquals]).term;
  return {
    property: validateLessThanOrEqualsProperty(lessThanOrEquals)
  };
}
function validateLessThanOrEqualsProperty(lessThanOrEquals) {
  return (context) => {
    const references = context.focusNode.out([lessThanOrEquals]).terms;
    for (const value of context.values) {
      for (const reference of references) {
        const c = compareTerms_default(value.term, reference);
        if (c === null || c > 0) {
          context.violation(sh.LessThanOrEqualsConstraintComponent, {
            args: { lessThanOrEquals },
            message: [context.factory.literal("Value is not less than or equal to value of {$lessThanOrEquals}")],
            value
          });
        } else {
          context.debug(sh.LessThanOrEqualsConstraintComponent, {
            args: { lessThanOrEquals },
            message: [context.factory.literal("Value is not less than or equal to value of {$lessThanOrEquals}")],
            value
          });
        }
      }
    }
  };
}

// lib/validations/range.js
function compileMaxExclusive(shape) {
  const maxExclusive = shape.ptr.out([sh.maxExclusive]).term;
  return {
    generic: validateMaxExclusive(maxExclusive)
  };
}
function validateMaxExclusive(maxExclusive) {
  return (context) => {
    const comparison = compareTerms_default(context.valueOrNode.term, maxExclusive);
    context.test(comparison !== null && comparison < 0, sh.MaxExclusiveConstraintComponent, {
      args: { maxExclusive },
      message: [context.factory.literal("Value is not less than {$maxExclusive}")],
      value: context.valueOrNode
    });
  };
}
function compileMaxInclusive(shape) {
  const maxInclusive = shape.ptr.out([sh.maxInclusive]).term;
  return {
    generic: validateMaxInclusive(maxInclusive)
  };
}
function validateMaxInclusive(maxInclusive) {
  return (context) => {
    const comparison = compareTerms_default(context.valueOrNode.term, maxInclusive);
    context.test(comparison !== null && comparison <= 0, sh.MaxInclusiveConstraintComponent, {
      args: { maxInclusive },
      message: [context.factory.literal("Value is not less than or equal to {$maxInclusive}")],
      value: context.valueOrNode
    });
  };
}
function compileMinExclusive(shape) {
  const minExclusive = shape.ptr.out([sh.minExclusive]).term;
  return {
    generic: validateMinExclusive(minExclusive)
  };
}
function validateMinExclusive(minExclusive) {
  return (context) => {
    const comparison = compareTerms_default(context.valueOrNode.term, minExclusive);
    context.test(comparison !== null && comparison > 0, sh.MinExclusiveConstraintComponent, {
      args: { minExclusive },
      message: [context.factory.literal("Value is not greater than {$minExclusive}")],
      value: context.valueOrNode
    });
  };
}
function compileMinInclusive(shape) {
  const minInclusive = shape.ptr.out([sh.minInclusive]).term;
  return {
    generic: validateMinInclusive(minInclusive)
  };
}
function validateMinInclusive(minInclusive) {
  return (context) => {
    const comparison = compareTerms_default(context.valueOrNode.term, minInclusive);
    context.test(comparison !== null && comparison >= 0, sh.MinInclusiveConstraintComponent, {
      args: { minInclusive },
      message: [context.factory.literal("Value is not greater than or equal to {$minInclusive}")],
      value: context.valueOrNode
    });
  };
}

// lib/validations/shape.js
var import_rdf_literal4 = __toESM(require_rdf_literal(), 1);
function compileNode(shape) {
  const node = [...shape.ptr.out([sh.node])].map((ptr) => shape.validator.shape(ptr));
  return {
    generic: validateNode(node)
  };
}
function validateNode(node) {
  return async (context) => {
    for (const shape of node) {
      const nodeContext = await shape.validate(context.create({ child: true, focusNode: context.valueOrNode }));
      context.test(nodeContext.report.conforms, sh.NodeConstraintComponent, {
        args: { node: shape.ptr.term },
        message: [context.factory.literal("Value does not have shape {$node}")],
        results: nodeContext.report.results,
        value: context.valueOrNode
      });
    }
  };
}
function compileProperty(shape) {
  const property = [...shape.ptr.out([sh.property])].map((ptr) => shape.validator.shape(ptr));
  return {
    generic: validateProperty(property)
  };
}
function validateProperty(property) {
  return async (context) => {
    const propertyContext = context.create({ focusNode: context.valueOrNode });
    for (const shape of property) {
      await shape.validate(propertyContext);
    }
  };
}
function compileQualifiedShape(shape) {
  const valueShape = shape.validator.shape(shape.ptr.out([sh.qualifiedValueShape]));
  const valueShapesDisjointTerm = shape.ptr.out([sh.qualifiedValueShapesDisjoint]).term;
  const valueShapesDisjoint = valueShapesDisjointTerm ? (0, import_rdf_literal4.fromRdf)(valueShapesDisjointTerm) : false;
  const maxCountTerm = shape.ptr.out([sh.qualifiedMaxCount]).term;
  const maxCount = maxCountTerm ? parseInt(maxCountTerm.value) : null;
  const minCountTerm = shape.ptr.out([sh.qualifiedMinCount]).term;
  const minCount = minCountTerm ? parseInt(minCountTerm.value) : null;
  return {
    property: validateQualifiedShapeProperty(valueShape, valueShapesDisjoint, maxCount, minCount)
  };
}
function validateQualifiedShapeProperty(valueShape, valueShapesDisjoint, maxCount, minCount) {
  return async (context) => {
    const resultsDeep = [];
    let siblingShapes = [];
    if (valueShapesDisjoint) {
      siblingShapes = new Set(
        context.shape.ptr.in([sh.property]).out([sh.property]).out([sh.qualifiedValueShape]).filter((ptr) => !ptr.term.equals(valueShape.ptr.term)).map((ptr) => context.shape.validator.shape(ptr))
      );
    }
    const count = (await filter(context.values, async (value) => {
      const valueShapeReport = (await valueShape.validate(context.create({ child: true, focusNode: value }))).report;
      resultsDeep.push(valueShapeReport.results);
      if (!valueShapeReport.conforms) {
        return false;
      }
      if (siblingShapes.length === 0) {
        return true;
      }
      if (context.options.debug || context.options.details) {
        const siblingReports = await map([...siblingShapes], async (siblingShape) => {
          return (await siblingShape.validate(context.create({ child: true, focusNode: value }))).report;
        });
        resultsDeep.push(siblingReports.flatMap((report) => report.results));
        return !siblingReports.every((report) => report.conforms);
      } else {
        return !await every([...siblingShapes], async (siblingShape) => {
          return (await siblingShape.validate(context.create({ child: true, focusNode: value }))).report.conforms;
        });
      }
    })).length;
    if (maxCount !== null) {
      context.test(count <= maxCount, sh.QualifiedMaxCountConstraintComponent, {
        args: {
          qualifiedMaxCount: maxCount,
          qualifiedValueShape: valueShape.ptr.term,
          qualifiedValueShapesDisjoint: valueShapesDisjoint
        },
        message: [context.factory.literal("More than {$qualifiedMaxCount} values have shape {$qualifiedValueShape}")],
        results: resultsDeep.flat()
      });
    }
    if (minCount !== null) {
      context.test(count >= minCount, sh.QualifiedMinCountConstraintComponent, {
        args: {
          qualifiedMinCount: minCount,
          qualifiedValueShape: valueShape.ptr.term,
          qualifiedValueShapesDisjoint: valueShapesDisjoint
        },
        message: [context.factory.literal("Less than {$qualifiedMinCount} values have shape {$qualifiedValueShape}")],
        results: resultsDeep.flat()
      });
    }
  };
}

// lib/validations/string.js
function languageMatch(item, language2) {
  if (!language2) {
    return false;
  }
  return language2.slice(0, item.length) === item;
}
function compileLanguageIn(shape) {
  const languageIn = [...new Set([...shape.ptr.out([sh.languageIn]).list()].map((item) => item.value))];
  return {
    generic: validateLanguageIn(languageIn)
  };
}
function validateLanguageIn(languageIn) {
  return (context) => {
    const result = languageIn.some((item) => languageMatch(item, context.valueOrNode.term.language));
    context.test(result, sh.LanguageInConstraintComponent, {
      args: { languageIn: languageIn.join(", ") },
      message: [context.factory.literal("Language does not match any of {$languageIn}")],
      value: context.valueOrNode
    });
  };
}
function compileMaxLength(shape) {
  const maxLength = parseInt(shape.ptr.out([sh.maxLength]).value);
  return {
    generic: validateMaxLength(maxLength)
  };
}
function validateMaxLength(maxLength) {
  return (context) => {
    const result = context.valueOrNode.term.termType !== "BlankNode" && context.valueOrNode.value.length <= maxLength;
    context.test(result, sh.MaxLengthConstraintComponent, {
      args: { maxLength },
      message: [context.factory.literal("Value has more than {$maxLength} characters")],
      value: context.valueOrNode
    });
  };
}
function compileMinLength(shape) {
  const minLength = parseInt(shape.ptr.out([sh.minLength]).value);
  return {
    generic: validateMinLength(minLength)
  };
}
function validateMinLength(minLength) {
  return (context) => {
    const result = context.valueOrNode.term.termType !== "BlankNode" && context.valueOrNode.value.length >= minLength;
    context.test(result, sh.MinLengthConstraintComponent, {
      args: { minLength },
      message: [context.factory.literal("Value has less than {$minLength} characters")],
      value: context.valueOrNode
    });
  };
}
function compilePattern(shape) {
  const pattern = shape.ptr.out([sh.pattern]).value;
  const flags = shape.ptr.out([sh.flags]).value;
  const regex = new RegExp(pattern, flags);
  return {
    generic: validatePattern(pattern, flags, regex)
  };
}
function validatePattern(pattern, flags, regex) {
  return (context) => {
    context.test(regex.test(context.valueOrNode.term.value), sh.PatternConstraintComponent, {
      args: { flags, pattern },
      message: [context.factory.literal('Value does not match pattern "{$pattern}"')],
      value: context.valueOrNode
    });
  };
}
function compileUniqueLang(shape) {
  const term = shape.ptr.out([sh.uniqueLang]).term;
  const uniqueLang = term.value === "true" && xsd2.boolean.equals(term.datatype);
  if (!uniqueLang) {
    return null;
  }
  return {
    property: validateUniqueLangProperty()
  };
}
function validateUniqueLangProperty() {
  return (context) => {
    const result = Object.entries(context.values.terms.reduce((result2, term) => {
      if (term.language) {
        result2[term.language] = (result2[term.language] || 0) + 1;
      }
      return result2;
    }, {}));
    const invalid = result.filter(([, count]) => count > 1);
    for (const [lang] of invalid) {
      context.violation(sh.UniqueLangConstraintComponent, {
        args: { lang },
        message: [context.factory.literal('Language "{?lang}" used more than once')]
      });
    }
    if (invalid.length === 0) {
      context.debug(sh.UniqueLangConstraintComponent);
    }
  };
}

// node_modules/rdf-validation/lib/namespaces.js
var sh2 = namespace_default("http://www.w3.org/ns/shacl#");
var shn2 = namespace_default("https://schemas.link/shacl-next#");

// node_modules/rdf-validation/lib/Report.js
var Report2 = class {
  constructor({ results = [] } = {}) {
    this.results = results;
  }
  get conforms() {
    return !this.results.some((result) => {
      return result.severity.equals(sh2.Info) || result.severity.equals(sh2.Violation) || result.severity.equals(sh2.Warning);
    });
  }
};
var Report_default2 = Report2;

// node_modules/rdf-validation/lib/Result.js
function resolveVariables2(message, args) {
  return Object.entries(args).reduce((message2, [name, value]) => {
    if (value && value.termType) {
      value = to_ntriples_default(value);
    }
    return message2.replace(`{$${name}}`, value).replace(`{?${name}}`, value);
  }, message);
}
var Result2 = class {
  constructor({ args = {}, factory: factory2, message = [], severity = sh2.Violation } = {}) {
    this.severity = severity;
    this.message = message.map((message2) => {
      return factory2.literal(resolveVariables2(message2.value, args), message2.language || null);
    });
  }
};
var Result_default2 = Result2;

// node_modules/rdf-validation/lib/Validation.js
var Validation = class _Validation {
  constructor({ factory: factory2 = data_model_default } = {}) {
    this.factory = factory2;
  }
  clone({ factory: factory2 } = {}) {
    return new _Validation({
      factory: factory2 || this.factory
    });
  }
  validate() {
    return new Report_default2();
  }
  validateSimple() {
    return true;
  }
};
var Validation_default = Validation;

// node_modules/rdf-validation/lib/term/DatatypeValidation.js
var DatatypeValidation = class _DatatypeValidation extends Validation_default {
  constructor({ datatypes, factory: factory2 } = {}) {
    super({ factory: factory2 });
    this.datatypes = [];
    for (const datatype of Array.isArray(datatypes) ? datatypes : [datatypes]) {
      if (datatype) {
        this.datatypes.push(this.factory.fromTerm(datatype));
      }
    }
  }
  clone({ factory: factory2 } = {}) {
    return new _DatatypeValidation({
      datatypes: this.datatypes,
      factory: factory2 || this.factory
    });
  }
};
var DatatypeValidation_default = DatatypeValidation;

// node_modules/rdf-validation/lib/term/DatatypeValidations.js
var DatatypeValidations = class {
  constructor({ factory: factory2 = data_model_default, validations: validations2 } = {}) {
    this.factory = factory2;
    this.validations = new TermMap_default();
    if (validations2) {
      for (const validation of Object.values(validations2)) {
        const clone = validation.clone({ factory: this.factory });
        for (const datatype of clone.datatypes) {
          this.validations.set(datatype, clone);
        }
      }
    }
  }
  validate(term) {
    const validation = this.validations.get(term.datatype);
    if (!validation) {
      return new Report_default2();
    }
    return validation.validate(term);
  }
  validateSimple(term) {
    const validation = this.validations.get(term.datatype);
    if (!validation) {
      return true;
    }
    return validation.validateSimple(term);
  }
};
var DatatypeValidations_default = DatatypeValidations;

// node_modules/rdf-validation/lib/term/PatternValidation.js
var PatternValidation = class _PatternValidation extends DatatypeValidation_default {
  constructor(patterns, datatypes, { factory: factory2 } = {}) {
    super({ datatypes, factory: factory2 });
    this.message = [this.factory.literal("term value {$this} matches pattern {$pattern}")];
    this.patterns = Array.isArray(patterns) ? patterns : [patterns];
  }
  clone({ factory: factory2 } = {}) {
    return new _PatternValidation(this.patterns, this.datatypes, {
      factory: factory2 || this.factory
    });
  }
  validate(term) {
    const results = this.patterns.map((pattern) => {
      let severity;
      if (pattern.test(term.value)) {
        severity = shn2.Debug;
      }
      const args = {
        pattern: this.factory.literal(pattern.toString()),
        this: term
      };
      return new Result_default2({
        args,
        factory: this.factory,
        message: this.message,
        severity
      });
    });
    return new Report_default2({ results });
  }
  validateSimple(term) {
    return this.patterns.every((pattern) => pattern.test(term.value));
  }
};
var PatternValidation_default = PatternValidation;

// node_modules/rdf-validation/lib/term/IntegerValidation.js
var integerPattern = /^([-+]?[0-9]+)$/;
var IntegerValidation = class _IntegerValidation extends PatternValidation_default {
  constructor(minInclusive = null, maxInclusive = null, datatypes, { factory: factory2 } = {}) {
    super(integerPattern, datatypes, { factory: factory2 });
    this.maxInclusive = null;
    this.minInclusive = null;
    if (typeof maxInclusive === "string") {
      this.maxInclusive = BigInt(maxInclusive);
    }
    if (typeof minInclusive === "string") {
      this.minInclusive = BigInt(minInclusive);
    }
  }
  clone({ factory: factory2 } = {}) {
    return new _IntegerValidation(
      this.minInclusive?.toString(),
      this.maxInclusive?.toString(),
      this.datatypes,
      {
        factory: factory2 || this.factory
      }
    );
  }
  validate(term) {
    const results = super.validate(term).results;
    if (!shn2.Debug.equals(results[0].severity)) {
      return new Report_default2({ results });
    }
    const value = BigInt(term.value);
    if (this.minInclusive !== null && value < this.minInclusive) {
      const messageStr = `term value "${term.value}" is less than "${this.minInclusive.toString()}"`;
      const message = [this.factory.literal(messageStr)];
      results.push(new Result_default2({ factory: this.factory, message }));
    }
    if (this.maxInclusive !== null && value > this.maxInclusive) {
      const messageStr = `term value "${term.value}" is greater than "${this.maxInclusive.toString()}"`;
      const message = [this.factory.literal(messageStr)];
      results.push(new Result_default2({ factory: this.factory, message }));
    }
    return new Report_default2({ results });
  }
  validateSimple(term) {
    if (!super.validateSimple(term)) {
      return false;
    }
    const value = BigInt(term.value);
    if (this.minInclusive !== null && value < this.minInclusive) {
      return false;
    }
    if (this.maxInclusive !== null && value > this.maxInclusive) {
      return false;
    }
    return true;
  }
};
var IntegerValidation_default = IntegerValidation;

// node_modules/rdf-validation/lib/term/InValidation.js
var InValidation = class _InValidation extends DatatypeValidation_default {
  constructor(values, datatypes, { factory: factory2 } = {}) {
    super({ datatypes, factory: factory2 });
    this.values = new Set(values);
  }
  clone({ factory: factory2 } = {}) {
    return new _InValidation(this.values, this.datatypes, {
      factory: factory2 || this.factory
    });
  }
  validate(term) {
    const results = [];
    if (!this.values.has(term.value)) {
      const messageStr = `term value "${term.value}" is not included in the list: ${[...this.values].join(",")}`;
      const message = [this.factory.literal(messageStr)];
      results.push(new Result_default2({ factory: this.factory, message }));
    }
    return new Report_default2({ results });
  }
  validateSimple(term) {
    return this.values.has(term.value);
  }
};
var InValidation_default = InValidation;

// node_modules/rdf-validation/lib/term/xsd.js
var xsd_exports = {};
__export(xsd_exports, {
  anyAtomicType: () => anyAtomicType,
  anySimpleType: () => anySimpleType,
  anyURI: () => anyURI,
  base64Binary: () => base64Binary,
  boolean: () => boolean,
  byte: () => byte,
  date: () => date,
  dateTime: () => dateTime,
  dateTimeStamp: () => dateTimeStamp,
  dayTimeDuration: () => dayTimeDuration,
  decimal: () => decimal,
  double: () => double,
  duration: () => duration,
  float: () => float,
  gDay: () => gDay,
  gMonth: () => gMonth,
  gMonthDay: () => gMonthDay,
  gYear: () => gYear,
  gYearMonth: () => gYearMonth,
  hexBinary: () => hexBinary,
  int: () => int,
  integer: () => integer,
  language: () => language,
  long: () => long,
  negativeInteger: () => negativeInteger,
  nonNegativeInteger: () => nonNegativeInteger,
  nonPositiveInteger: () => nonPositiveInteger,
  normalizedString: () => normalizedString,
  positiveInteger: () => positiveInteger,
  short: () => short,
  string: () => string,
  time: () => time,
  token: () => token,
  unsignedByte: () => unsignedByte,
  unsignedInt: () => unsignedInt,
  unsignedLong: () => unsignedLong,
  unsignedShort: () => unsignedShort,
  yearMonthDuration: () => yearMonthDuration
});
var ns = {
  xsd: namespace_default("http://www.w3.org/2001/XMLSchema#")
};
var anySimpleType = new DatatypeValidation_default({ datatypes: ns.xsd.anySimpleType });
var anyAtomicType = new DatatypeValidation_default({ datatypes: ns.xsd.anyAtomicType });
var stringPattern = /^([^\ud8ff-\udfff\ufffe-\uffff]*)$/;
var decimalPattern = /^((\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+))$/;
var floatPattern = /^((\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+)([Ee](\+|-)?[0-9]+)?|(\+|-)?INF|NaN)$/;
var durationPattern = /^(-?P((([0-9]+Y([0-9]+M)?([0-9]+D)?|([0-9]+M)([0-9]+D)?|([0-9]+D))(T(([0-9]+H)([0-9]+M)?([0-9]+(\.[0-9]+)?S)?|([0-9]+M)([0-9]+(\.[0-9]+)?S)?|([0-9]+(\.[0-9]+)?S)))?)|(T(([0-9]+H)([0-9]+M)?([0-9]+(\.[0-9]+)?S)?|([0-9]+M)([0-9]+(\.[0-9]+)?S)?|([0-9]+(\.[0-9]+)?S)))))$/;
var dateTimePattern = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?|(24:00:00(\.0+)?))(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var timePattern = /^((([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?|(24:00:00(\.0+)?))(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var datePattern = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var gYearMonthPattern = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var gYearPattern = /^(-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var gMonthDayPattern = /^(--(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var gDayPattern = /^(---(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var gMonthPattern = /^(--(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/;
var hexBinaryPattern = /^(([0-9a-fA-F]{2})*)$/;
var base64BinaryPattern = /^(((([A-Za-z0-9+/] ?){4})*(([A-Za-z0-9+/] ?){3}[A-Za-z0-9+/]|([A-Za-z0-9+/] ?){2}[AEIMQUYcgkosw048] ?=|[A-Za-z0-9+/] ?[AQgw] ?= ?=))?)$/;
var string = new PatternValidation_default(stringPattern, ns.xsd.string);
var boolean = new InValidation_default(["1", "true", "0", "false"], ns.xsd.boolean);
var decimal = new PatternValidation_default(decimalPattern, ns.xsd.decimal);
var float = new PatternValidation_default(floatPattern, ns.xsd.float);
var double = new PatternValidation_default(floatPattern, ns.xsd.double);
var duration = new PatternValidation_default(durationPattern, ns.xsd.duration);
var dateTime = new PatternValidation_default(dateTimePattern, ns.xsd.dateTime);
var time = new PatternValidation_default(timePattern, ns.xsd.time);
var date = new PatternValidation_default(datePattern, ns.xsd.date);
var gYearMonth = new PatternValidation_default(gYearMonthPattern, ns.xsd.gYearMonth);
var gYear = new PatternValidation_default(gYearPattern, ns.xsd.gYear);
var gMonthDay = new PatternValidation_default(gMonthDayPattern, ns.xsd.gMonthDay);
var gDay = new PatternValidation_default(gDayPattern, ns.xsd.gDay);
var gMonth = new PatternValidation_default(gMonthPattern, ns.xsd.gMonth);
var hexBinary = new PatternValidation_default(hexBinaryPattern, ns.xsd.hexBinary);
var base64Binary = new PatternValidation_default(base64BinaryPattern, ns.xsd.base64Binary);
var anyURI = new PatternValidation_default(stringPattern, ns.xsd.anyURI);
var normalizedStringPattern = /^([^\u000d\u000a\u0009]*)$/;
var tokenPattern = /^([^ ]+( [^ ]+)*)*$/;
var languagePattern = /^([a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*)$/;
var yearMonthDurationPattern = /^([^DT]*)$/;
var dayTimeDurationPattern = /^([^YM]*[DT].*)$/;
var dateTimeStampPattern = /^(.*(Z|(\+|-)[0-9][0-9]:[0-9][0-9]))$/;
var normalizedString = new PatternValidation_default([stringPattern, normalizedStringPattern], ns.xsd.normalizedString);
var token = new PatternValidation_default([stringPattern, normalizedStringPattern, tokenPattern], ns.xsd.token);
var language = new PatternValidation_default(languagePattern, ns.xsd.language);
var integer = new IntegerValidation_default(null, null, ns.xsd.integer);
var nonPositiveInteger = new IntegerValidation_default(null, "0", ns.xsd.nonPositiveInteger);
var negativeInteger = new IntegerValidation_default(null, "-1", ns.xsd.negativeInteger);
var long = new IntegerValidation_default("-9223372036854775808", "9223372036854775807", ns.xsd.long);
var int = new IntegerValidation_default("-2147483648", "2147483647", ns.xsd.int);
var short = new IntegerValidation_default("-32768", "32767", ns.xsd.short);
var byte = new IntegerValidation_default("-128", "127", ns.xsd.byte);
var nonNegativeInteger = new IntegerValidation_default("0", null, ns.xsd.nonNegativeInteger);
var unsignedLong = new IntegerValidation_default("0", "18446744073709551615", ns.xsd.unsignedLong);
var unsignedInt = new IntegerValidation_default("0", "4294967295", ns.xsd.unsignedInt);
var unsignedShort = new IntegerValidation_default("0", "65535", ns.xsd.unsignedShort);
var unsignedByte = new IntegerValidation_default("0", "255", ns.xsd.unsignedByte);
var positiveInteger = new IntegerValidation_default("1", null, ns.xsd.positiveInteger);
var yearMonthDuration = new PatternValidation_default([durationPattern, yearMonthDurationPattern], ns.xsd.yearMonthDuration);
var dayTimeDuration = new PatternValidation_default([durationPattern, dayTimeDurationPattern], ns.xsd.dayTimeDuration);
var dateTimeStamp = new PatternValidation_default([dateTimePattern, dateTimeStampPattern], ns.xsd.dateTimeStamp);

// node_modules/rdf-validation/lib/term/XsdValidation.js
var XsdValidation = class extends DatatypeValidations_default {
  constructor({ factory: factory2 } = {}) {
    super({ factory: factory2, validations: { ...xsd_exports } });
  }
};
var XsdValidation_default = XsdValidation;

// lib/validations/type.js
var toTermType = new TermMap_default([
  [sh.BlankNode, /* @__PURE__ */ new Set(["BlankNode"])],
  [sh.BlankNodeOrIRI, /* @__PURE__ */ new Set(["BlankNode", "NamedNode"])],
  [sh.BlankNodeOrLiteral, /* @__PURE__ */ new Set(["BlankNode", "Literal"])],
  [sh.IRI, /* @__PURE__ */ new Set(["NamedNode"])],
  [sh.IRIOrLiteral, /* @__PURE__ */ new Set(["NamedNode", "Literal"])],
  [sh.Literal, /* @__PURE__ */ new Set(["Literal"])]
]);
function compileClass(shape) {
  const classes = shape.ptr.out([sh.class]).map((ptr) => resolveClasses_default(ptr));
  return {
    generic: validateClass(classes)
  };
}
function validateClass(classes) {
  return (context) => {
    const types = new TermSet_default(context.valueOrNode.out([rdf.type]).terms);
    for (const classSet of classes) {
      const result = [...types].some((type) => classSet.has(type));
      context.test(result, sh.ClassConstraintComponent, { value: context.valueOrNode });
    }
  };
}
function compileDatatype(shape) {
  const datatype = shape.ptr.out([sh.datatype]).term;
  const validation = new XsdValidation_default();
  return {
    generic: validateDatatype(datatype, validation)
  };
}
function validateDatatype(datatype, validation) {
  return (context) => {
    const result = datatype.equals(context.valueOrNode.term.datatype) && validation.validateSimple(context.valueOrNode.term);
    context.test(result, sh.DatatypeConstraintComponent, {
      args: { datatype },
      message: [context.factory.literal("Value does not have datatype {$datatype}")],
      value: context.valueOrNode
    });
  };
}
function compileNodeKind(shape) {
  const nodeKind = shape.ptr.out([sh.nodeKind]).term;
  const termTypes = toTermType.get(nodeKind);
  return {
    generic: validateNodeKind(nodeKind, termTypes)
  };
}
function validateNodeKind(nodeKind, termTypes) {
  return (context) => {
    context.test(termTypes.has(context.valueOrNode.term.termType), sh.NodeKindConstraintComponent, {
      args: { nodeKind },
      message: [context.factory.literal("Value does not have node kind {$nodeKind}")],
      value: context.valueOrNode
    });
  };
}

// lib/validations.js
var validations = new TermMap_default([
  [sh.maxCount, compileMaxCount],
  [sh.minCount, compileMinCount],
  [sh.and, compileAnd],
  [sh.not, compileNot],
  [sh.or, compileOr],
  [sh.xone, compileXone],
  [sh.closed, compileClosedNode],
  [sh.hasValue, compileHasValue],
  [sh.in, compileIn],
  [sh.disjoint, compileDisjoint],
  [sh.equals, compileEquals],
  [sh.lessThan, compileLessThan],
  [sh.lessThanOrEquals, compileLessThanOrEquals],
  [sh.maxExclusive, compileMaxExclusive],
  [sh.maxInclusive, compileMaxInclusive],
  [sh.minExclusive, compileMinExclusive],
  [sh.minInclusive, compileMinInclusive],
  [sh.node, compileNode],
  [sh.property, compileProperty],
  [sh.qualifiedValueShape, compileQualifiedShape],
  [sh.languageIn, compileLanguageIn],
  [sh.maxLength, compileMaxLength],
  [sh.minLength, compileMinLength],
  [sh.pattern, compilePattern],
  [sh.uniqueLang, compileUniqueLang],
  [sh.class, compileClass],
  [sh.datatype, compileDatatype],
  [sh.nodeKind, compileNodeKind]
]);
var validations_default = validations;

// Validator.js
var Validator = class {
  constructor(dataset2, { factory: factory2, ...options }) {
    this.factory = factory2;
    this.options = options;
    this.registry = new Registry_default(validations_default);
    this.targetResolverRegistry = new TargetResolverRegistry_default(this.options.targetResolvers || []);
    this.shapesPtr = new PathList_default({ dataset: dataset2, factory: factory2 });
    this.shapes = new TermMap_default();
    if (this.options.coverage) {
      this.options.debug = true;
      this.options.details = true;
      this.options.trace = true;
    }
    if (this.options.validations) {
      for (const [key, value] of this.options.validations) {
        this.registry.validations.set(key, value);
      }
    }
    const shapePtrs = [
      ...this.shapesPtr.hasOut([sh.targetClass]),
      ...this.shapesPtr.hasOut([sh.targetNode]),
      ...this.shapesPtr.hasOut([sh.targetObjectsOf]),
      ...this.shapesPtr.hasOut([sh.targetSubjectsOf]),
      ...this.shapesPtr.hasOut([sh.target]),
      ...this.shapesPtr.hasOut([rdf.type], [sh.NodeShape]),
      ...this.shapesPtr.hasOut([rdf.type], [sh.PropertyShape])
    ];
    for (const shapePtr of shapePtrs) {
      this.shape(shapePtr);
    }
  }
  shape(ptr) {
    if (!ptr.term) {
      return null;
    }
    let shape = this.shapes.get(ptr.term);
    if (!shape) {
      shape = new Shape_default(ptr, { validator: this });
      this.shapes.set(ptr.term, shape);
    }
    return shape;
  }
  async validate(data, shapes) {
    const focusNode = new PathList_default({ ...data, factory: this.factory });
    const context = new Context_default({ factory: this.factory, focusNode, options: this.options, validator: this });
    if (shapes) {
      shapes = shapes.map((shape) => this.shape(this.shapesPtr.node(shape.terms)));
    } else {
      shapes = this.shapes.values();
    }
    for (const shape of shapes) {
      const shapeContext = context.create({ shape });
      let targets;
      if (!focusNode.isAny()) {
        targets = focusNode;
      } else {
        targets = await shape.resolveTargets(shapeContext);
      }
      for (const focusNode2 of targets) {
        await shape.validate(shapeContext.create({ focusNode: focusNode2 }));
      }
    }
    return context.report;
  }
};
var Validator_default = Validator;
export {
  Validator_default as Validator
};
