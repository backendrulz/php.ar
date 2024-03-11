"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[923],{3929:function(e,n,a){a.r(n),a.d(n,{Head:function(){return c.p},default:function(){return i}});var t=a(6540),l=a(8453);function r(e){const n=Object.assign({p:"p",span:"span",strong:"strong",h2:"h2",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 22.916666666666668%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR42mP4UbKm6Hvv7iu/S1Z1/TeeycoABNHRi/kCoxdLhoauYmaAAEYGBGCE8a385vB6ANWiqHk+8+T/g1de/f6/7c7/z36zskFiQeFLq71DF4d4By1V8vHZxOUdukraN2KZdmDgYhmgJTwe0dv4QOIBAQvVAgKWK3uHLpAGiksA5SUZ/i+5+P/Xmy/f/i+88P93zOoJIANDI1c3+4Yur/IJX17nG7aswD9saZ9v2NK5PiFLU3yDl2l7hy418wlbYeQduVQ1MGyFjn/oEgOfsMVGPqFLbRjmxy48NDNh2bHZMUtPnQtfbgVyuj/QEN/wpZm+octc/UKX9viELrT3D1sONHSJtW/oIhW/0MVaIIM9QleJBkcs0/MJXSUHVCMHkmfQC12l6By2ItcidJWZvX09C8iF9vb7WUDhB+KnpUHC1SN0rihQjNMYyNcKXcUGEjcGhrkFWOwMK0i9v/98AQB4Zo/PRTG1jAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Livewire 10 banner"\n        title="Livewire 10 banner"\n        src="/static/4357a60fa19f5c9e1d39e075d443014f/7d769/livewire-banner.png"\n        srcset="/static/4357a60fa19f5c9e1d39e075d443014f/5243c/livewire-banner.png 240w,\n/static/4357a60fa19f5c9e1d39e075d443014f/ab158/livewire-banner.png 480w,\n/static/4357a60fa19f5c9e1d39e075d443014f/7d769/livewire-banner.png 960w,\n/static/4357a60fa19f5c9e1d39e075d443014f/5ece7/livewire-banner.png 1200w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(n.strong,null,"Livewire")," es un ",t.createElement(n.strong,null,"framework")," para ",t.createElement(n.strong,null,"Laravel")," que te permite crear interfaces dinámicas y reactivas sin salir de la comodidad de Laravel. Con Livewire, puedes usar ",t.createElement(n.strong,null,"Blade")," y ",t.createElement(n.strong,null,"Vue")," juntos, y renderizar el ",t.createElement(n.strong,null,"Javascript")," desde el lado del servidor. En este post, te voy a mostrar ",t.createElement(n.strong,null,"cómo instalar y usar Livewire")," en un proyecto de Laravel 10."),"\n",t.createElement(n.h2,null,"Instalar Livewire"),"\n",t.createElement(n.p,null,"Para instalar Livewire, necesitas tener ",t.createElement(n.a,{href:"/como-instalar-composer-en-windows-linux-y-mac-os/"},"Composer")," actualizado y ejecutar el siguiente comando en tu proyecto de Laravel:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-bash"},"composer require livewire/livewire\n")),"\n",t.createElement(n.p,null,"Esto instalará la versión más reciente de Livewire, que en el momento de escribir este artículo es la ",t.createElement(n.strong,null,"2.x"),"."),"\n",t.createElement(n.p,null,"Después de instalar Livewire, tienes que agregar dos directivas de Blade en tu layout principal, que se suele llamar ",t.createElement(n.code,null,"layouts/app.blade.php"),". Estas directivas son:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"@livewireStyles"),": esta directiva sirve para que se escriban los estilos CSS necesarios para que Livewire funcione. Debemos colocarla en el ",t.createElement(n.code,null,"<head>")," del documento."),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"@livewireScripts"),": esta directiva la usamos para mostrar los scripts de Javascript necesarios para Livewire. La colocaremos antes del cierre del ",t.createElement(n.code,null,"<body>")," del documento."),"\n"),"\n",t.createElement(n.p,null,"El layout podría quedar más o menos así:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-html"},'<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>@yield (\'title\')</title>\n    @livewireStyles\n  </head>\n  <body>\n    <div class="container">@yield (\'content\')</div>\n    @livewireScripts\n  </body>\n</html>\n')),"\n",t.createElement(n.h2,null,"Crear un componente Livewire"),"\n",t.createElement(n.p,null,"Un componente Livewire es una clase ",t.createElement(n.strong,null,"PHP")," que se comunica con una vista Blade. Los componentes Livewire tienen un estado interno y pueden reaccionar a eventos del usuario o del servidor."),"\n",t.createElement(n.p,null,"Para crear un componente Livewire, puedes usar el siguiente comando:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-bash"},"php artisan make:livewire nombre-del-componente\n")),"\n",t.createElement(n.p,null,"Esto creará dos archivos: uno en ",t.createElement(n.code,null,"app/Http/Livewire")," con la clase PHP del componente, y otro en ",t.createElement(n.code,null,"resources/views/livewire")," con la vista Blade del componente."),"\n",t.createElement(n.p,null,"Por ejemplo, si quieres crear un componente llamado ",t.createElement(n.code,null,"counter"),", puedes ejecutar:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-bash"},"php artisan make:livewire counter\n")),"\n",t.createElement(n.p,null,"Esto creará los archivos ",t.createElement(n.code,null,"app/Http/Livewire/Counter.php")," y ",t.createElement(n.code,null,"resources/views/livewire/counter.blade.php"),"."),"\n",t.createElement(n.p,null,"El archivo PHP tendrá una estructura como esta:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-php"},"<?php\n\nnamespace App\\Http\\Livewire;\n\nuse Livewire\\Component;\n\nclass Counter extends Component\n{\n    public function render()\n    {\n        return view('livewire.counter');\n    }\n}\n")),"\n",t.createElement(n.p,null,"El archivo Blade tendrá una estructura como esta:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-html"},"<div>\n  \x3c!-- The only way to do great work is to love what you do. - Steve Jobs --\x3e\n</div>\n")),"\n",t.createElement(n.h2,null,"Usar un componente Livewire"),"\n",t.createElement(n.p,null,"Para usar un componente Livewire en una vista Blade, solo tienes que usar la directiva ",t.createElement(n.code,null,"@livewire")," y pasarle el nombre del componente como argumento."),"\n",t.createElement(n.p,null,"Por ejemplo, si quieres usar el componente ",t.createElement(n.code,null,"counter")," que hemos creado antes en la vista ",t.createElement(n.code,null,"welcome.blade.php"),", puedes hacer algo así:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-php"},"@extends('layouts.app')\n    @section('title', 'Bienvenido')\n    @section('content')\n        <h1>Bienvenido a mi sitio web</h1>\n        <p>Aquí puedes ver un ejemplo de un componente Livewire:</p>\n        @livewire('counter')\n    @endsection\n")),"\n",t.createElement(n.p,null,"Esto renderizará el contenido del archivo ",t.createElement(n.code,null,"resources/views/livewire/counter.blade.php")," en la vista ",t.createElement(n.code,null,"welcome.blade.php"),"."),"\n",t.createElement(n.h2,null,"Agregar funcionalidad al componente Livewire"),"\n",t.createElement(n.p,null,"Ahora que ya sabes cómo crear y usar un componente Livewire, vamos a ver cómo agregarle funcionalidad y hacerlo interactivo."),"\n",t.createElement(n.p,null,"Para este ejemplo, vamos a hacer que el componente ",t.createElement(n.code,null,"counter")," tenga un botón que incremente un contador cada vez que se presione."),"\n",t.createElement(n.p,null,"Para lograr esto, vamos a modificar los archivos PHP y Blade del componente de la siguiente manera:"),"\n",t.createElement(n.p,null,"En el archivo PHP, vamos a agregar una propiedad pública llamada ",t.createElement(n.code,null,"$count")," que tendrá el valor inicial del contador, y un método público llamado ",t.createElement(n.code,null,"increment")," que incrementará el valor de ",t.createElement(n.code,null,"$count")," en uno cada vez que se llame. El archivo PHP quedaría así:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-php"},"<?php\n\nnamespace App\\Http\\Livewire;\n\nuse Livewire\\Component;\n\nclass Counter extends Component\n{\n    public $count = 0;\n\n    public function increment()\n    {\n        $this->count++;\n    }\n\n    public function render()\n    {\n        return view('livewire.counter');\n    }\n}\n")),"\n",t.createElement(n.p,null,"En el archivo Blade, vamos a mostrar el valor de ",t.createElement(n.code,null,"$count")," y agregar un botón que llame al método ",t.createElement(n.code,null,"increment")," cuando se haga clic en él. El archivo Blade quedaría así:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-html"},'<div>\n  <h3>Contador: {{ $count }}</h3>\n  <button wire:click="increment">Incrementar</button>\n</div>\n')),"\n",t.createElement(n.p,null,"Con esto, ya tenemos un componente Livewire funcional y dinámico. Si recargas la página donde lo usas, verás que el contador se actualiza cada vez que presionas el botón."),"\n",t.createElement(n.h2,null,"Conclusión"),"\n",t.createElement(n.p,null,"En este post, hemos visto cómo instalar y usar Livewire en un proyecto de ",t.createElement(n.strong,null,"Laravel 10"),". Hemos aprendido a crear y usar componentes Livewire, y a agregarles funcionalidad e interactividad. Livewire es un framework muy potente y fácil de usar, que nos permite crear interfaces dinámicas y reactivas sin salir de la comodidad de Laravel. Si quieres saber más sobre Livewire, te recomiendo que visites su documentación oficial: ",t.createElement(n.a,{href:"https://laravel-livewire.com/docs/2.x/quickstart"},"https://laravel-livewire.com/docs/2.x/quickstart")),"\n",t.createElement(n.p,null,"Espero que te haya gustado este post y que te haya servido para aprender algo nuevo. Si tienes alguna duda o comentario, puedes dejarlo abajo. ¡Gracias por leer!"))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.RP)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)},c=a(7292);function i(e){return t.createElement(c.A,e,t.createElement(o,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-05-como-empezar-con-livewire-en-laravel-10-index-mdx-68ecf259437bc33588e4.js.map