(function() {
    'use strict';
    
    angular.module('minhasDiretivas')
           .directive('meuPainel', function() {
    
        var ddo = { // Directive Definition Object
            restrict: 'AE', // Pode ser usado como Atributo ou Elemento
            scope: { // define as propriedades que serão utilizadas no template
                titulo: '@' // o nome do atributo a ser informado na hora de especificar a diretiva possui o mesmo nome da propriedade (titulo)
            },
            transclude: true, // a diretiva conterá elementos filhos
            templateUrl: 'js/directives/templates/painel.html' // localizacao do template
        };
    
        return ddo;
    
    });

})();
