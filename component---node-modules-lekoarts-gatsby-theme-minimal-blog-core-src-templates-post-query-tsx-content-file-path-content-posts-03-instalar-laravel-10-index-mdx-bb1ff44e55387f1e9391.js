"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[963],{4559:function(e,a,n){n.r(a),n.d(a,{Head:function(){return o.p},default:function(){return c}});var l=n(6540),t=n(8453);function r(e){const a=Object.assign({span:"span",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",ol:"ol",strong:"strong"},(0,t.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR42n1SS0tCURD2T7fqD7QJMqplixYq96GGFSVF9JRKJKj0uolIbKWCFN17zpk5X3PP1YsiNMxizsx88/jmFPCvWGuNEzEWnZlRWExEnuEMZo7jmIkMkRgZhuRpjITm4G6UqohScCBJgcsgZkEaWDOZ2NuWYtJKSRWpJVUc+OoOrUd0eyh58OuoBDhpohJaL7S9iI9OueRx2eegZqQykVKKnDjwzT38Gso+wjrW1tG8QFDH/oEV3dpBcRcbm1zcI68qTdmNnU3uwKMxLq/R7uDwGJ1nfP9gMMTZOY9G/PLG44lpd3TU5+FXulmSpETMds5I+hzYRoOrIaJ+Tls2G8uGzOISQ2stMGk7ZztLfe1xENJ2EQ9PMJQ6BUYzeqzsmSRG65zt5VP9xnj/SHU6Xbyz9JFuGYDm2+bRwuq3WP0q5BiWKnY5+geENTZ7T8CA9QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Laravel 10 banner"\n        title="Laravel 10 banner"\n        src="/static/4b176b15df406a8d3b6a87ac6df1b1ae/7d769/laravel-10-banner.png"\n        srcset="/static/4b176b15df406a8d3b6a87ac6df1b1ae/5243c/laravel-10-banner.png 240w,\n/static/4b176b15df406a8d3b6a87ac6df1b1ae/ab158/laravel-10-banner.png 480w,\n/static/4b176b15df406a8d3b6a87ac6df1b1ae/7d769/laravel-10-banner.png 960w,\n/static/4b176b15df406a8d3b6a87ac6df1b1ae/140de/laravel-10-banner.png 1100w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement(a.p,null,"Laravel es un framework de PHP que te permite crear aplicaciones web modernas, escalables y con alto rendimiento. En este artículo, te voy a enseñar cómo instalar Laravel 10 en Windows, Linux y macOS de forma fácil y rápida."),"\n",l.createElement(a.h2,null,"¿Qué necesitas para instalar Laravel 10?"),"\n",l.createElement(a.p,null,"Antes de instalar Laravel 10, necesitas tener instalados en tu máquina los siguientes requisitos:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"PHP 8 o superior"),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"/como-instalar-composer-en-windows-linux-y-mac-os"},"Composer"),", el gestor de dependencias de PHP"),"\n",l.createElement(a.li,null,"Node.js y NPM, para compilar los assets de tu aplicación"),"\n",l.createElement(a.li,null,"Un servidor web como Apache o Nginx (opcional)"),"\n"),"\n",l.createElement(a.p,null,"Puedes verificar si tienes instalados estos requisitos ejecutando los siguientes comandos en tu terminal:"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"php -v\ncomposer -V\nnode -v\nnpm -v\n")),"\n",l.createElement(a.p,null,"Si alguno de estos comandos no te devuelve una versión válida, significa que tienes que instalar o actualizar el componente correspondiente."),"\n",l.createElement(a.h2,null,"¿Cómo instalar Laravel 10 en Windows?"),"\n",l.createElement(a.p,null,"Para instalar Laravel 10 en Windows, puedes seguir estos pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Descarga e instala Docker Desktop desde su página oficial: ",l.createElement(a.a,{href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop")),"\n",l.createElement(a.li,null,"Asegúrate de que tienes habilitado el Subsistema de Windows para Linux 2 (WSL2) siguiendo las instrucciones de este enlace: ",l.createElement(a.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"https://docs.microsoft.com/en-us/windows/wsl/install-win10")),"\n",l.createElement(a.li,null,"Abre una terminal de WSL2 y ejecuta el siguiente comando para crear un nuevo proyecto de Laravel:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"curl -s https://laravel.build/example-app | bash\n")),"\n",l.createElement(a.p,null,"Este comando creará una carpeta llamada ",l.createElement(a.code,null,"example-app")," con la instalación básica de Laravel 10 y un entorno de desarrollo con Docker."),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Entra en la carpeta del proyecto y ejecuta el siguiente comando para iniciar el servidor web:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"./vendor/bin/sail up\n")),"\n",l.createElement(a.p,null,"Este comando levantará los contenedores de Docker necesarios para tu aplicación, como el servidor web, la base de datos, el servidor Redis y el servidor Mailhog."),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Abre tu navegador y accede a la dirección ",l.createElement(a.a,{href:"http://localhost"},"http://localhost"),". Deberías ver la página de bienvenida de Laravel."),"\n"),"\n",l.createElement(a.h2,null,"¿Cómo instalar Laravel 10 en Linux?"),"\n",l.createElement(a.p,null,"Para instalar Laravel 10 en Linux, puedes seguir estos pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abre una terminal y ejecuta el siguiente comando para crear un nuevo proyecto de Laravel:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"composer create-project laravel/laravel example-app\n")),"\n",l.createElement(a.p,null,"Este comando creará una carpeta llamada ",l.createElement(a.code,null,"example-app")," con la instalación básica de Laravel 10."),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Entra en la carpeta del proyecto y ejecuta el siguiente comando para iniciar el servidor web:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"php artisan serve\n")),"\n",l.createElement(a.p,null,"Este comando iniciará el servidor web integrado de PHP en el puerto 8000."),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Abre tu navegador y accede a la dirección ",l.createElement(a.a,{href:"http://localhost:8000"},"http://localhost:8000"),". Deberías ver la página de bienvenida de Laravel."),"\n"),"\n",l.createElement(a.h2,null,"¿Cómo instalar Laravel 10 en macOS?"),"\n",l.createElement(a.p,null,"Para instalar Laravel 10 en macOS, puedes seguir estos pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Instala PHP y Composer usando Homebrew, el gestor de paquetes de macOS. Para ello, abre una terminal y ejecuta los siguientes comandos:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"brew update\nbrew install php composer\n")),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Instala Node.js y NPM usando Homebrew también. Para ello, ejecuta el siguiente comando:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"brew install node\n")),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Crea un nuevo proyecto de Laravel usando el instalador global de Laravel. Para ello, ejecuta los siguientes comandos:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"composer global require laravel/installer\nlaravel new example-app\n")),"\n",l.createElement(a.p,null,"Estos comandos crearán una carpeta llamada ",l.createElement(a.code,null,"example-app")," con la instalación básica de Laravel 10."),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Entra en la carpeta del proyecto y ejecuta el siguiente comando para iniciar el servidor web:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"language-bash"},"php artisan serve\n")),"\n",l.createElement(a.p,null,"Este comando iniciará el servidor web integrado de PHP en el puerto 8000."),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Abre tu navegador y accede a la dirección ",l.createElement(a.a,{href:"http://localhost:8000"},"http://localhost:8000"),". Deberías ver la página de inicio."),"\n"),"\n",l.createElement(a.h2,null,"¿Qué ventajas tiene usar Laravel 10 frente a otras versiones o frameworks?"),"\n",l.createElement(a.p,null,"Laravel 10 es la última versión del popular framework de PHP. Esta versión trae varias mejoras y novedades que hacen que Laravel sea más potente, flexible y fácil de usar. Algunas de estas ventajas son:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Soporte para PHP 8")," y sus nuevas características, como los atributos, las uniones de tipos, el operador nullsafe y las expresiones match."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de rutas"),", como la posibilidad de definir rutas con múltiples verbos HTTP, agrupar rutas por dominio o usar closures en los middleware."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de validación"),", como la posibilidad de usar reglas personalizadas o condicionales, validar arrays anidados o usar mensajes personalizados por campo."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de autenticación"),", como la posibilidad de usar múltiples guardias o proveedores, definir políticas personalizadas o usar tokens Sanctum para autenticar aplicaciones SPA o API."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de cacheo"),", como la posibilidad de usar múltiples almacenes o drivers, definir etiquetas o grupos para invalidar el cache o usar eventos para escuchar los cambios en el cache."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de eventos"),", como la posibilidad de usar listeners sincrónicos o asíncronos, definir prioridades o condiciones para los listeners o usar eventos falsos para pruebas."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de colas"),", como la posibilidad de usar múltiples conexiones o drivers, definir reintentos o tiempos de espera para los trabajos o usar eventos para monitorear las colas."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mejoras en el sistema de testing"),", como la posibilidad de usar Pest como alternativa a PHPUnit, definir factories personalizadas o estados para los modelos o usar helpers para simular acciones del usuario."),"\n"),"\n",l.createElement(a.h2,null,l.createElement(a.strong,null,"Nuevas características")),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Jetstream"),", un paquete que te permite crear aplicaciones con autenticación, registro y gestión de usuarios."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Fortify"),", un paquete que te permite personalizar la lógica de autenticación y registro."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Breeze"),", un paquete que te ofrece un esqueleto básico para tus aplicaciones."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Sail"),", un paquete que te permite usar ",l.createElement(a.strong,null,"Docker")," para tu entorno de desarrollo."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Octane"),", un paquete que te permite mejorar el rendimiento de tu aplicación usando ",l.createElement(a.strong,null,"Swoole")," o ",l.createElement(a.strong,null,"RoadRunner"),"."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Socialite"),", un paquete que te permite integrar tu aplicación con servicios externos como ",l.createElement(a.strong,null,"Facebook")," o ",l.createElement(a.strong,null,"Google"),"."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Cashier"),", un paquete que te permite integrar tu aplicación con servicios de pago como ",l.createElement(a.strong,null,"Stripe")," o ",l.createElement(a.strong,null,"Paddle"),"."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Scout"),", un paquete que te permite integrar tu aplicación con motores de búsqueda como ",l.createElement(a.strong,null,"Algolia")," o ",l.createElement(a.strong,null,"MeiliSearch"),"."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Telescope"),", un paquete que te permite monitorear y depurar tu aplicación."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Horizon"),", un paquete que te permite gestionar y supervisar tus colas."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Dusk"),", un paquete que te permite hacer pruebas de navegador automatizadas."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Sanctum"),", un paquete que te permite autenticar aplicaciones ",l.createElement(a.strong,null,"SPA")," o ",l.createElement(a.strong,null,"API")," usando tokens."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Passport"),", un paquete que te permite implementar ",l.createElement(a.strong,null,"OAuth2")," en tu aplicación."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nova"),", un paquete que te ofrece un panel de administración elegante y potente para tu aplicación."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Spark"),", un paquete que te ofrece una solución completa para crear aplicaciones ",l.createElement(a.strong,null,"SaaS")," con facturación y suscripciones."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Livewire"),", un paquete que te permite crear interfaces dinámicas usando solo PHP."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Inertia"),", un paquete que te permite crear aplicaciones ",l.createElement(a.strong,null,"SPA")," usando ",l.createElement(a.strong,null,"Vue"),", ",l.createElement(a.strong,null,"React")," o ",l.createElement(a.strong,null,"Svelte")," sin usar una API."),"\n"),"\n",l.createElement(a.p,null,"Como puedes ver, Laravel 10 tiene muchas ventajas y características que lo hacen uno de los mejores frameworks de PHP del mercado. Si quieres aprender más sobre Laravel 10 y cómo usarlo para crear aplicaciones web increíbles, te recomiendo que visites su página oficial: ",l.createElement(a.a,{href:"https://laravel.com"},"https://laravel.com")),"\n",l.createElement(a.h2,null,"Conclusión"),"\n",l.createElement(a.p,null,"En este artículo, te he mostrado cómo ",l.createElement(a.strong,null,"instalar Laravel 10")," en ",l.createElement(a.strong,null,"Windows"),", ",l.createElement(a.strong,null,"Linux")," y ",l.createElement(a.strong,null,"macOS")," de forma fácil y rápida. También te he explicado algunas de las ventajas y características que tiene ",l.createElement(a.strong,null,"Laravel 10")," frente a otras versiones o frameworks. Espero que este artículo te haya sido útil y que te animes a probar Laravel 10 en tus próximos proyectos."),"\n",l.createElement(a.p,null,"Si te ha gustado este artículo, por favor compártelo con tus amigos y déjame un comentario con tu opinión. También puedes suscribirte a mi blog para recibir más artículos sobre desarrollo web con PHP y Laravel. Muchas gracias por leerme y hasta la próxima. ¡Saludos! 🙌"))}var s=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.RP)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},o=n(7292);function c(e){return l.createElement(o.A,e,l.createElement(s,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-03-instalar-laravel-10-index-mdx-bb1ff44e55387f1e9391.js.map