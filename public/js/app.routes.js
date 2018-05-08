(function() {
    'use strict';
    
    var routes = angular.module('fantasticPictures');
    
    routes.config(function($routeProvider, $locationProvider) {
    
        /*
            Quando alguém abrir o endereço, quem será carregada é a view principal index.html, 
            que buscará a parcial através do sistema de rotas do Angular. Com o advento do HTML5 
            foi criada a History API, que permite conseguirmos o mesmo resultado, mas sem o uso do #. 
            O Angular suporta a History API e podemos ativá-la através do serviço $locationProvider
        */
         $locationProvider.html5Mode(true);
    
        $routeProvider
            .when('/fotos', { templateUrl: 'partials/principal.html', controller: 'FotosController' })
            .when('/fotos/new', { templateUrl: 'partials/formulario.html', controller: 'FotoController' })
            .when('/error', { templateUrl: 'partials/notfound.html' })
            .otherwise({ redirectTo: '/error' });
    
    }); 

})();