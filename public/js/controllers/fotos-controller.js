(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotosController', FotosController);
    
    // injetado $scope e FotoService no controller
    FotosController.$inject = ['$scope', 'fotosService'];

    function FotosController($scope, fotosService) { 
        
        $scope.fotos = [];
        $scope.filtro = '';
    
        fotosService.query(function(fotos) {
            $scope.fotos = fotos;
        }, function(error) {
            console.log(error);  
        });

        $scope.remover = function(foto) {
            fotosService.delete( { fotoId: foto._id }, function() {
                var index = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(index, 1);
            }, function(error) {
                console.log(error);
            });
        }

    }

})();
