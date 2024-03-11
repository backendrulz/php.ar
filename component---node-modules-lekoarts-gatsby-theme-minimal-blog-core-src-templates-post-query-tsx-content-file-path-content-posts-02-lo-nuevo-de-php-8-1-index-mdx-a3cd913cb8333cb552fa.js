"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[419],{9184:function(e,n,a){a.r(n),a.d(n,{Head:function(){return o.p},default:function(){return c}});var l=a(6540),t=a(8453);function r(e){const n=Object.assign({p:"p",span:"span",h2:"h2",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li",a:"a"},(0,t.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkklEQVR42mPwj54MQQExk30iJuaUr+iYvL+xe3dF86aCqtXZ5StT8hfHZy+MSJkNVABXDEEMaPyKpo2NXVvyyheUN2509koNi29PKVgSGt8XEN0XGDsNp2a/qEnB8dPqOrZ6+KQ6eyTaOEaY2wRa2UeYWPqbWYcZmfu7+FYFxk73j5qERbNv5MSotDmVzaut7YPDYmtVNcydPVL9w6tU1Y3sXNONLYKcfSoD42Zg0RwQDfTwhOS8JXlls8ytA5Iy22tbFiVkTY1I7NPWd7N1TnIPrAuImeofPQmLs8GhNQEYNnUd63LLFy3fcHPVhuPhif0N3Ts7+1dHpc0NS56DphNdc0bJ0p5pB1snHCisnJeSUR0U29c7de+JM/cD46YFx09F04mseQpQc1Htmr4ZRxMyOs2tgybN3DFn8fGFK44vWXUc6GBgWOLUDEE1bZuBmmOSW3yD8xu6tjZ0balu3ZhduiwsaUZgLG6bgfEUmjC9bcKetgm7G7t3Fdeuyq1YkVa4NC5rPjAKIpJnBsZOwdQMAFCuB30l88cuAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="PHP 8.1 banner"\n        title="PHP 8.1 banner"\n        src="/static/0634a4cd77ead0b9f036446d3811c7c5/7d769/php-8.1-banner.png"\n        srcset="/static/0634a4cd77ead0b9f036446d3811c7c5/5243c/php-8.1-banner.png 240w,\n/static/0634a4cd77ead0b9f036446d3811c7c5/ab158/php-8.1-banner.png 480w,\n/static/0634a4cd77ead0b9f036446d3811c7c5/7d769/php-8.1-banner.png 960w,\n/static/0634a4cd77ead0b9f036446d3811c7c5/2e7cd/php-8.1-banner.png 1104w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nPHP 8.1 se lanzó el pasado 25 de noviembre de 2021. Ya pasó un tiempo pero vale la pena rescatar que esta versión trae consigo varias mejoras y novedades que harán la vida más fácil a los desarrolladores y a los usuarios. En este artículo vamos a repasar algunas de las más destacadas."),"\n",l.createElement(n.h2,null,"Enumeraciones"),"\n",l.createElement(n.p,null,"Las enumeraciones son un tipo de dato que permite definir un conjunto finito y ordenado de valores constantes, que se pueden usar como alternativa a las constantes globales o a las clases con propiedades estáticas. Las enumeraciones facilitan la legibilidad y la seguridad del código, ya que evitan errores de escritura o de asignación de valores no válidos."),"\n",l.createElement(n.p,null,"Las enumeraciones se definen con la palabra reservada ",l.createElement(n.code,null,"enum"),", seguida del nombre y del tipo de los valores (que puede ser ",l.createElement(n.code,null,"int")," o ",l.createElement(n.code,null,"string"),"). Dentro de las llaves se especifican los valores posibles, separados por comas. Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"enum Status: string\n{\n    case DRAFT = 'draft';\n    case PUBLISHED = 'published';\n    case ARCHIVED = 'archived';\n}\n")),"\n",l.createElement(n.p,null,"Para acceder a los valores de una enumeración se usa el operador ",l.createElement(n.code,null,"::"),", como si fuera una clase. Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"$status = Status::DRAFT;\necho $status->value; // 'draft'\necho $status->name; // 'DRAFT'\n")),"\n",l.createElement(n.p,null,"Las enumeraciones también pueden tener métodos, que se definen dentro de las llaves después de los valores. Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"enum Status: string\n{\n    case DRAFT = 'draft';\n    case PUBLISHED = 'published';\n    case ARCHIVED = 'archived';\n\n    public function isEditable(): bool\n    {\n        return $this === Status::DRAFT;\n    }\n}\n")),"\n",l.createElement(n.h2,null,"Readonly properties"),"\n",l.createElement(n.p,null,"Las propiedades de solo lectura son aquellas que solo se pueden asignar una vez, en el constructor de la clase o en la declaración de la propiedad. Esto evita que se modifiquen accidentalmente o intencionadamente después de su inicialización, lo que mejora la inmutabilidad y la consistencia de los objetos."),"\n",l.createElement(n.p,null,"Las propiedades de solo lectura se declaran con el modificador ",l.createElement(n.code,null,"readonly")," antes del modificador de visibilidad (",l.createElement(n.code,null,"public"),", ",l.createElement(n.code,null,"protected")," o ",l.createElement(n.code,null,"private"),"). Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"class User\n{\n    public readonly int $id;\n    public readonly string $name;\n\n    public function __construct(int $id, string $name)\n    {\n        $this->id = $id;\n        $this->name = $name;\n    }\n}\n")),"\n",l.createElement(n.p,null,"Si se intenta modificar una propiedad de solo lectura después de su asignación inicial, se produce un error fatal. Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"$user = new User(1, 'Alice');\n$user->name = 'Bob'; // Fatal error: Uncaught Error: Cannot modify readonly property User::$name\n")),"\n",l.createElement(n.h2,null,"El operador match"),"\n",l.createElement(n.p,null,"El operador ",l.createElement(n.code,null,"match")," de ",l.createElement(n.strong,null,"PHP 8.1")," es una nueva característica que permite escribir expresiones condicionales de forma más compacta y legible que el ",l.createElement(n.code,null,"switch"),". El operador ",l.createElement(n.code,null,"match")," evalúa una expresión y compara su valor con una lista de opciones, devolviendo el valor asociado a la primera opción que coincida. A diferencia del ",l.createElement(n.code,null,"switch"),", el operador ",l.createElement(n.code,null,"match")," no requiere usar ",l.createElement(n.code,null,"break")," para evitar la ejecución de las opciones siguientes, y soporta comparaciones estrictas y uniones de tipos."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"// Usando switch\n$color = 'red';\nswitch ($color) {\n    case 'red':\n    case 'green':\n    case 'blue':\n        $rgb = true;\n        break;\n    default:\n        $rgb = false;\n}\n\n// Usando match\n$color = 'red';\n$rgb = match ($color) {\n    'red', 'green', 'blue' => true,\n    default => false,\n};\n")),"\n",l.createElement(n.h2,null,"Operador nullsafe"),"\n",l.createElement(n.p,null,"El operador nullsafe de ",l.createElement(n.strong,null,"PHP 8.1")," es una nueva característica que permite acceder a propiedades o métodos de objetos que pueden ser nulos sin provocar un error. El operador nullsafe consiste en usar el símbolo ",l.createElement(n.code,null,"?->")," en lugar de ",l.createElement(n.code,null,"->")," para indicar que si el objeto es nulo, se devuelva nulo en lugar de lanzar una excepción. Esto evita tener que usar múltiples comprobaciones de nulidad o el operador de fusión null (",l.createElement(n.code,null,"??"),") para evitar errores."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"// Sin el operador nullsafe\n$user = getUserById($id);\nif ($user !== null) {\n    $address = $user->getAddress();\n    if ($address !== null) {\n        $country = $address->country;\n    }\n}\n\n// Con el operador nullsafe\n$user = getUserById($id);\n$country = $user?->getAddress()?->country;\n")),"\n",l.createElement(n.h2,null,"Final class constants"),"\n",l.createElement(n.p,null,"Las constantes de clase final son aquellas que no se pueden sobrescribir en las clases hijas. Esto evita que se modifique el valor original de la constante, lo que puede causar inconsistencias o errores en el código."),"\n",l.createElement(n.p,null,"Las constantes de clase final se declaran con el modificador ",l.createElement(n.code,null,"final")," antes del modificador ",l.createElement(n.code,null,"const"),". Por ejemplo:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-php"},"class A\n{\n    final const FOO = 'foo';\n}\n\nclass B extends A\n{\n    const FOO = 'bar'; // Fatal error: Cannot override final constant A::FOO\n}\n")),"\n",l.createElement(n.p,null,"En este ejemplo, la constante ",l.createElement(n.code,null,"FOO")," de la clase ",l.createElement(n.code,null,"A")," es final, por lo que no se puede sobrescribir en la clase ",l.createElement(n.code,null,"B"),". Si se intenta hacerlo, se produce un error fatal."),"\n",l.createElement(n.p,null,"Las constantes de clase final pueden ser útiles para definir valores que no deben cambiar en las subclases, como por ejemplo identificadores únicos o configuraciones globales."),"\n",l.createElement(n.h2,null,"Otros cambios"),"\n",l.createElement(n.p,null,"Además de las características mencionadas anteriormente, PHP 8.1 también incluye otros cambios menores o experimentales, como:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"La sintaxis ",l.createElement(n.code,null,"new Foo[]")," para crear arrays de objetos."),"\n",l.createElement(n.li,null,"El modificador ",l.createElement(n.code,null,"never")," para indicar que una función o método nunca retorna."),"\n",l.createElement(n.li,null,"El atributo ",l.createElement(n.code,null,"#[Deprecated]")," para marcar elementos obsoletos."),"\n",l.createElement(n.li,null,"El operador ",l.createElement(n.code,null,"throw")," para lanzar excepciones como expresiones."),"\n",l.createElement(n.li,null,"El atributo ",l.createElement(n.code,null,"#[Pure]")," para indicar que una función o método no tiene efectos secundarios."),"\n",l.createElement(n.li,null,"El atributo ",l.createElement(n.code,null,"#[Immutable]")," para indicar que una clase o propiedad es inmutable."),"\n"),"\n",l.createElement(n.p,null,"Puedes consultar la lista completa de cambios en el ",l.createElement(n.a,{href:"https://www.php.net/releases/8.1/en.php"},"sitio oficial")," de PHP."),"\n",l.createElement(n.h2,null,"Conclusión"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"PHP 8.1")," es una versión muy interesante y esperada por muchos desarrolladores, que trae consigo varias mejoras y novedades que harán la vida más fácil a los desarrolladores y a los usuarios. En este artículo hemos repasado algunas de las más destacadas, como las enumeraciones, las propiedades de solo lectura, las fibras, los tipos de intersección y las constantes de clase final."),"\n",l.createElement(n.p,null,"Esperamos que este artículo te haya resultado útil e interesante. Si te ha gustado, compártelo con tus amigos y déjanos un comentario con tu opinión o tus dudas. ¡Hasta la próxima!"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},o=a(7292);function c(e){return l.createElement(o.A,e,l.createElement(s,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-02-lo-nuevo-de-php-8-1-index-mdx-a3cd913cb8333cb552fa.js.map