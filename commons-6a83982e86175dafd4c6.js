(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[223],{557:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var a=n(3101).Y},2174:function(e,t){"use strict";t.A=function(e){return e.replace(/\/\/+/g,"/")}},2514:function(){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},2635:function(e,t,n){"use strict";n.d(t,{N1:function(){return o},V8:function(){return i},Z0:function(){return r},kW:function(){return a}});var a=n(5019),r=(e="")=>e.split("language-").pop(),o=e=>{if(e?.children?.props){let{children:t,className:n="",...a}=e.children.props,r=n.match(/language-([\0-\uFFFF]*)/);return{codeString:t.trim(),className:n,language:null!==r?r[1]:"",...a}}},i=e=>{if(!e)return()=>!1;let t=e.split(",").map((e=>e.split("-").map((e=>parseInt(e,10)))));return e=>{let n=e+1;return t.some((([e,t])=>t?n>=e&&n<=t:n===e))}}},3554:function(){!function(e){var t=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,n=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,r=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:t,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:r,punctuation:o};var i={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},s=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:i}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:i}}];e.languages.insertBefore("php","variable",{string:s,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:t,string:s,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:n,number:a,operator:r,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",(function(t){if(/<\?/.test(t.code)){e.languages["markup-templating"].buildPlaceholders(t,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)}})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"php")}))}(Prism)},3601:function(e,t,n){"use strict";var a=n(4794);t.A=()=>(0,a.useStaticQuery)("3090400250").minimalBlogConfig},5019:function(e,t,n){var a="[object Symbol]",r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\ud800-\\udfff",s="\\u2700-\\u27bf",l="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",p="["+u+"]",g="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\d+",b="["+s+"]",m="["+l+"]",h="[^"+i+u+f+s+l+c+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",k="["+c+"]",v="(?:"+m+"|"+h+")",w="(?:"+k+"|"+h+")",S="(?:['’](?:d|ll|m|re|s|t|ve))?",_="(?:['’](?:D|LL|M|RE|S|T|VE))?",A="(?:"+g+"|\\ud83c[\\udffb-\\udfff])"+"?",E="[\\ufe0e\\ufe0f]?",F=E+A+("(?:\\u200d(?:"+["[^"+i+"]",y,x].join("|")+")"+E+A+")*"),$="(?:"+[b,y,x].join("|")+")"+F,I=RegExp(d,"g"),O=RegExp(g,"g"),N=RegExp([k+"?"+m+"+"+S+"(?="+[p,k,"$"].join("|")+")",w+"+"+_+"(?="+[p,k+v,"$"].join("|")+")",k+"?"+v+"+"+S,k+"+"+_,f,$].join("|"),"g"),T=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,z="object"==typeof self&&self&&self.Object===Object&&self,P=R||z||Function("return this")();var C,L=(C={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==C?void 0:C[e]});var j=Object.prototype.toString,D=P.Symbol,Y=D?D.prototype:void 0,H=Y?Y.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&j.call(e)==a}(e))return H?H.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function B(e){return null==e?"":G(e)}var M,U=(M=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,o=e?e.length:0;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=B(e),void 0===(t=n?void 0:t)?function(e){return T.test(e)}(e)?function(e){return e.match(N)||[]}(e):function(e){return e.match(r)||[]}(e):e.match(t)||[]}(function(e){return(e=B(e))&&e.replace(o,L).replace(O,"")}(e).replace(I,"")),M,"")});e.exports=U},5723:function(){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript},6675:function(e,t,n){"use strict";n.d(t,{A:function(){return C}});var a=n(7437),r=n(557),o=n(8053),i=n(6835),s=n(8453),l=n(6540),c=n(2635),u=n(7141),d=n(7450);var p=e=>{const{clipboard:t}=window.navigator;if(!t||"function"!=typeof t.writeText){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly","true"),t.setAttribute("contenteditable","true"),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select();const n=document.createRange(),a=window.getSelection();return null==a||a.removeAllRanges(),null==a||a.addRange(n),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),document.body.removeChild(t),Promise.resolve(!0)}return t.writeText(e)},g=n(8062);var f=e=>{let{content:t,duration:n=5e3,fileName:a="",trim:o=!1}=e;const{0:i,1:s}=(0,l.useState)(!1),c=i?(a?`${a} `:"")+"copiado al portapapeles":(a?`${a}: `:"")+"copiar al portapapeles";return(0,r.Y)("button",{type:"button",name:c,disabled:i,className:"code-copy-button",sx:{variant:"copyButton"},onClick:async()=>{await p(o?t.trim():t),s(!0),await(e=>new Promise((t=>{setTimeout(t,e)})))(n),s(!1)}},i?"Copiado":"Copiar",(0,r.Y)("span",{sx:g.Q,"aria-roledescription":"status"},c))},b=n(3601),m=n(4773);(void 0!==n.g?n.g:window).Prism=d.My,n(7022),n(2514),n(9700),n(3554),n(5723);var h=e=>{let{codeString:t,withLineNumbers:n=!0,title:a="",className:r,highlight:o=""}=e;const{showLineNumbers:i,showCopyButton:s}=(0,b.A)(),[p]=(0,u.G6)(),g="dark"===p,h=(0,c.Z0)(r),y=(0,c.V8)(o),x=n||i;return l.createElement(d.f4,{code:t,language:h,theme:g?m.a5:m._k},(e=>{let{className:n,tokens:r,getLineProps:o,getTokenProps:i}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"gatsby-highlight","data-language":h},a&&l.createElement("div",{className:"code-title"},l.createElement("div",null,a)),l.createElement("pre",{className:n,"data-linenumber":x},s&&l.createElement(f,{content:t,fileName:a}),l.createElement("code",{className:`code-content language-${h}`},r.map(((e,t)=>{const n=o({line:e,key:t});return y(t)&&(n.className=`${n.className} highlight-line`,n.style={...n.style,backgroundColor:"var(--theme-ui-colors-highlightLineBg)"}),l.createElement("div",n,x&&l.createElement("span",{className:"line-number-style"},t+1),e.map(((e,t)=>l.createElement("span",i({token:e,key:t})))))}))))))}))},y=n(6988);var x={Text:e=>l.createElement(i.EY,e),Title:e=>l.createElement(y.A,e),pre:e=>{const t=(0,c.N1)(e);return t?l.createElement(h,t):l.createElement("pre",e)}};const k={position:"relative",width:"24px",height:"24px",borderRadius:"50%",transition:"all 0.45s ease","&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",transition:"transform 0.45s ease",borderRadius:"50%"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",transition:"all 0.35s ease",boxShadow:e=>`0 -23px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, 0 23px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, 23px 0 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, -23px 0 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, 15px 15px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, -15px 15px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, 15px -15px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}, -15px -15px 0 ${(0,o.Jt)(e,"colors.toggleIcon")}`}},v={opacity:.65,position:"relative",borderRadius:"4px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}},w=()=>(0,r.Y)("button",{type:"button",sx:v},(0,r.Y)("div",{sx:{...k,transform:"scale(0.55)","&:before":{...k["&:before"],opacity:0},"&:after":{...k["&:after"],transform:"scale(0)"}}})),S=e=>{let{children:t,fallback:n}=e;const[a,r]=l.useState(!1);return l.useEffect((()=>{r(!0)}),[]),a?t:n||null};var _=()=>{const[e,t]=(0,u.G6)(),n="dark"===e;return(0,r.Y)(S,{fallback:(0,r.Y)(w,null)},(0,r.Y)("button",{onClick:()=>{const e=n?"light":"dark";t(e),document.documentElement.classList.value="theme-ui-"+e},type:"button","aria-label":n?"Activar Modo Claro":"Activar Modo Oscuro",title:n?"Activar Modo Claro":"Activar Modo Oscuro",sx:v},(0,r.Y)("div",{sx:{...k,border:e=>n?`4px solid ${(0,o.Jt)(e,"colors.toggleIcon")}`:"none",backgroundColor:n?"toggleIcon":"transparent",transform:n?"scale(0.55)":"scale(1)",overflow:n?"visible":"hidden",boxShadow:e=>n?"none":`inset 8px -8px 0px 0px ${(0,o.Jt)(e,"colors.toggleIcon")}`,"&:before":{...k["&:before"],border:e=>n?`2px solid ${(0,o.Jt)(e,"colors.toggleIcon")}`:"none",transform:n?"translate(14px, -14px)":"translate(0, 0)",opacity:n?0:1},"&:after":{...k["&:after"],transform:n?"scale(1)":"scale(0)"}}})))},A=n(4794),E=n(2174);var F=e=>{let{nav:t}=e;const{basePath:n}=(0,b.A)();return(0,r.Y)(l.Fragment,null,t&&t.length>0&&(0,r.Y)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((e=>(0,r.Y)(A.Link,{activeClassName:"active",key:e.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,E.A)(`/${n}/${e.slug}`)},e.title)))))},$=n(7533);var I=()=>{const{siteTitle:e}=(0,$.A)(),{basePath:t}=(0,b.A)();return(0,r.Y)(A.Link,{to:(0,E.A)(`/${t}`),"aria-label":`${e} - Back to home`,sx:{color:"heading",textDecoration:"none"}},(0,r.Y)("div",{sx:{my:0,fontWeight:"semibold",fontSize:[3,4]}},e))};var O=()=>{const{externalLinks:e}=(0,b.A)();return(0,r.Y)(l.Fragment,null,e&&e.length>0&&(0,r.Y)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((e=>(0,r.Y)(i.N_,{key:e.url,href:e.url},e.name)))))};var N=()=>{const{navigation:e}=(0,b.A)();return(0,r.Y)("header",{sx:{mb:[4,5]}},(0,r.Y)(i.so,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,r.Y)(I,null),(0,r.Y)(_,null)),(0,r.Y)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,r.Y)(F,{nav:e}),(0,r.Y)(O,null)))};var T=()=>{const{siteTitle:e}=(0,$.A)();return(0,r.Y)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,r.Y)("div",null,"© ",(new Date).getFullYear()," por ",e,"."))};var R={".prism-code":{fontSize:[1,1,2],webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']":{".code-content":{pt:"1rem"}},".code-content":{padding:"2rem 1rem 1rem 1rem",color:"plain-color",backgroundColor:"plain-backgroundColor"},".token":{display:"inline-block"},"p > code, li > code":{bg:"muted",color:"heading",px:2,py:1,borderRadius:"4px",fontSize:"0.95em"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",borderRadius:"4px",overflow:"hidden",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 4px 4px",color:"black",fontSize:"12px",letterSpacing:"0.035rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",fontFamily:"body",fontWeight:600},'pre[class~="language-golang"]:before, pre[class~="language-go"]:before':{content:'"go"',background:"#79d4fd",color:"black"},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"muted"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:"muted",color:"text",fontSize:1,px:3,py:2,fontFamily:"body"},".token-line":{pr:3},".highlight-line":{borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".footnotes":{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"divide",pt:2,mt:5,overflow:"auto",".sr-only":g.Q}};const z={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};var P=e=>{let{children:t,...n}=e;return(0,r.Y)("a",Object.assign({},n,{sx:z,href:"#skip-nav","data-skip-link":"true"}),t)};var C=e=>{let{children:t,className:n=""}=e;return(0,r.Y)(s.xA,{components:x},(0,r.Y)(a.mL,{styles:e=>({"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,o.Jt)(e,"colors.mediumMagenta"),color:(0,o.Jt)(e,"colors.background")},a:{transition:"all 0.3s ease-in-out",color:"text"},"a:hover":{color:(0,o.Jt)(e,"colors.mediumMagenta")},strong:{color:(0,o.Jt)(e,"colors.strongColor"),position:"relative",display:"inline-block",margin:"3px",padding:"1px"},"strong::before":{backgroundColor:(0,o.Jt)(e,"colors.strongBackground"),content:'""',position:"absolute",width:"calc(100% + 4px)",height:"110%",left:"-2px",bottom:"0",zIndex:"-1",transform:"rotate(-1deg)"}})}),(0,r.Y)(P,null,"Ir al contenido"),(0,r.Y)(i.mc,null,(0,r.Y)(N,null),(0,r.Y)(i.az,{id:"skip-nav",as:"main",variant:"layout.main",sx:{...R},className:n},t),(0,r.Y)(T,null)))}},6835:function(e,t,n){"use strict";n.d(t,{DZ:function(){return k},EY:function(){return x},N_:function(){return y},az:function(){return f},mc:function(){return S},so:function(){return b}});var a=n(4684),r=n(7437),o=n(6540),i=n(8053);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=["__themeKey","__css","variant","css","sx","as"],p=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],g=function(e){return p.includes(e)},f=(0,o.forwardRef)((function(e,t){var n=(0,a.u)(),o=e,c=o.__themeKey,g=void 0===c?"variants":c,f=o.__css,b=o.variant,m=o.css,h=o.sx,y=o.as,x=void 0===y?"div":y,k=l(o,d),v=(0,i.AH)(f)(n),w=(0,i.Jt)(n,g+"."+b)||(0,i.Jt)(n,b),S=w&&(0,i.AH)(w)(n),_=(0,i.AH)(h)(n),A=(0,i.AH)(function(e){for(var t,n={},a=u(p);!(t=a()).done;){var r=t.value;n[r]=e[r]}return n}(k))(n),E=[{boxSizing:"border-box",margin:0,minWidth:0},v,S,_,A,m];return p.forEach((function(e){delete k[e]})),(0,r.Y)(x,s({ref:t,css:E},k))})),b=o.forwardRef((function(e,t){return o.createElement(f,s({ref:t},e,{sx:s({display:"flex"},e.sx)}))})),m=function(e){return function(t){var n={};for(var a in t)e(a||"")&&(n[a]=t[a]);return n}},h=/^m[trblxy]?$/;m((function(e){return h.test(e)})),m((function(e){return!h.test(e)}));var y=o.forwardRef((function(e,t){return o.createElement(f,s({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),x=o.forwardRef((function(e,t){return o.createElement(f,s({as:"span",ref:t,variant:"default"},e,{__themeKey:"text"}))})),k=o.forwardRef((function(e,t){return o.createElement(f,s({ref:t,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),v=["size"],w=o.forwardRef((function(e,t){var n=e.size,a=void 0===n?24:n,r=s({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"currentcolor"},l(e,v));return o.createElement(f,s({ref:t,as:"svg"},r))}));w.displayName="SVG";m(g),m((function(e){return!g(e)}));var S=o.forwardRef((function(e,t){return o.createElement(f,s({ref:t,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))}))},6988:function(e,t,n){"use strict";var a=n(557),r=n(6835);t.A=e=>{let{text:t,children:n,as:o="h2",className:i=""}=e;return(0,a.Y)("div",{sx:{justifyContent:"space-between",alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"divide",pb:3,mb:4,flexFlow:"wrap",boxSizing:"border-box",display:"flex"}},(0,a.Y)(r.az,{as:o,sx:{fontWeight:"medium",fontSize:[3,4],fontFamily:"heading",lineHeight:"heading",color:"heading"},className:i},t),n?(0,a.Y)("div",{sx:{color:"secondary",a:{variant:"links.secondary"}}},n):null)}},7022:function(){!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,i=0;i<r.length;i++)o[r[i]]=e.languages.bash[r[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)},7533:function(e,t,n){"use strict";var a=n(4794);t.A=()=>(0,a.useStaticQuery)("2421966660").site.siteMetadata},8062:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});const a={border:0,clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},9700:function(){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,s=i.length;-1!==n.code.indexOf(r=t(a,s));)++s;return i[s]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);!function i(s){for(var l=0;l<s.length&&!(r>=o.length);l++){var c=s[l];if("string"==typeof c||c.content&&"string"==typeof c.content){var u=o[r],d=n.tokenStack[u],p="string"==typeof c?c:c.content,g=t(a,u),f=p.indexOf(g);if(f>-1){++r;var b=p.substring(0,f),m=new e.Token(a,e.tokenize(d,n.grammar),"language-"+a,d),h=p.substring(f+g.length),y=[];b&&y.push.apply(y,i([b])),y.push(m),h&&y.push.apply(y,i([h])),"string"==typeof c?s.splice.apply(s,[l,1].concat(y)):c.content=y}}else c.content&&i(c.content)}return s}(n.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=commons-6a83982e86175dafd4c6.js.map