(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[68308],{68308:function(){!function(e){var t="(?:\\B-|\\b_|\\b)[A-Za-z][\\w-]*(?![\\w-])",n="(?:\\b(?:unsigned\\s+)?long\\s+long(?![\\w-])|\\b(?:unrestricted|unsigned)\\s+[a-z]+(?![\\w-])|(?!(?:unrestricted|unsigned)\\b)"+t+"(?:\\s*<(?:[^<>]|<[^<>]*>)*>)?)(?:\\s*\\?)?",a={};for(var r in e.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp("(\\bnamespace\\s+)"+t),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:a},{pattern:RegExp("(\\b(?:attribute|const|deleter|getter|optional|setter)\\s+)"+n),lookbehind:!0,inside:a},{pattern:RegExp("(\\bcallback\\s+"+t+"\\s*=\\s*)"+n),lookbehind:!0,inside:a},{pattern:RegExp("(\\btypedef\\b\\s*)"+n),lookbehind:!0,inside:a},{pattern:RegExp("(\\b(?:callback|dictionary|enum|interface(?:\\s+mixin)?)\\s+)(?!(?:interface|mixin)\\b)"+t),lookbehind:!0},{pattern:RegExp("(:\\s*)"+t),lookbehind:!0},RegExp(t+"(?=\\s+(?:implements|includes)\\b)"),{pattern:RegExp("(\\b(?:implements|includes)\\s+)"+t),lookbehind:!0},{pattern:RegExp(n+"(?=\\s*(?:\\.{3}\\s*)?"+t+"\\s*[(),;=])"),inside:a}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/},e.languages["web-idl"])"class-name"!==r&&(a[r]=e.languages["web-idl"][r]);e.languages.webidl=e.languages["web-idl"]}(Prism)}}]);
//# sourceMappingURL=68308-07752b5724808d02da80.js.map