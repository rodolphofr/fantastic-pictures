(function() {
    'use strict';

    angular.module('meusServicos')
           .factory('fotosService', fotosService);
    
    fotosService.$inject = ['$resource'];
    
    function fotosService($resource) {
        
        var fotosResource = $resource('v1/fotos/:fotoId', null, {
            update: { 
                method: 'PUT' 
            }
        });
        
        return fotosResource;

    }

})();


