(function() {
    'use strict';

    angular.module('fantasticPictures')
           .service('FotosService', FotosService);
    
    FotosService.$inject = ['$http'];
    
    function FotosService($http) {
        
        var baseUrl = 'v1/fotos/';
        
        this.todasFotos = function() {
            return $http.get(baseUrl);
        }
    
        this.removerFoto = function(foto) {
            return $http.delete(baseUrl + foto._id)
        }
    
        this.buscarFoto = function(id) {
            return $http.get(baseUrl + id);
        }

        this.salvarFoto = function(foto) {
            return $http.post(baseUrl, foto);
        }

        this.atualizarFoto = function(foto) {
            return $http.put(baseUrl + foto._id, foto);
        }

    }

})();


