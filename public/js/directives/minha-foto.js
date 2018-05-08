(function() {
    'use strict';
    
    angular.module('minhasDiretivas')
           .directive('minhaFoto', function() {
    
        var ddo = {
            restrict: 'E',
            scope: {
                url: '@',
                titulo: '@'
            },
            templateUrl: 'js/directives/templates/foto.html'
        };
    
        return ddo;
        
    });

})();

