(function() {
    'use strict';

    angular.module('meusServicos')
           .service('FotosService', FotosService);
    
    FotosService.$inject = ['$http', '$resource'];
    
    function FotosService($http, $resource) {
        
        var resource = $resource('v1/fotos/:fotoId', null, {
            update: { method: 'PUT' }
        });
        
        this.todasFotos = function() {
            return resource.query();
        }
    
        this.removerFoto = function(foto) {
            return resource.delete({ fotoId: foto._id });
        }
    
        this.buscarFoto = function(id) {
            return resource.get({ fotoId: id });
        }

        this.salvarFoto = function(foto) {
            return resource.post({ foto });
        }

        this.atualizarFoto = function(foto) {
            return resource.update({ fotoId: foto._id }, foto);
        }

    }

})();


