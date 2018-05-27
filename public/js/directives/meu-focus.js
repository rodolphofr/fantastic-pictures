(function() {
    'use strict';

    angular.module('minhasDiretivas')
           .directive('meuFocus', function(){

        var ddo = {
            restrict: 'A',
            scope: {
                // quando queremos que tanto a diretiva quanto o controller acessem o mesmo dado, 
                // isto é, qualquer alteração no escopo privado da diretiva afetará a propriedade 
                // do controller e qualquer alteração nesta propriedade no controller afetará a diretiva
                // realiza um two-way data bind
                focado: '='
            }
        };

        // parametros -> escopo do elemento e o elemento
        ddo.link = function(scope, element) {
            // quero observar qualquer mudança q ocorrer na propriedade scope.focado

            // scope.$watch('focado', function(novoValor, valorAnterior) {
            //     if (scope.focado) element[0].focus();
            // });

            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });

        }

        return ddo;

    });

})();