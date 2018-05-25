(function() {
    'use strict';

    angular.module('minhasDiretivas')
           .directive('botaoPerigo', function() {

        var ddo = {
            restrict: 'E',
            scope: {
                nome: '@',
                // precisamos que scope.acao esteja associada à uma função de um controller, isto é, 
                // do escopo pai na qual a diretiva está inserida
                acao: '&' 
            },
            templateUrl: 'js/directives/templates/botao-perigo.html'
        }

        return ddo;

    });

})();