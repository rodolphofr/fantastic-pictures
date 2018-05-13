(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotosController', FotosController);
    
    // injetado $scope e FotoService no controller
    FotosController.$inject = ['$scope', 'FotosService'];

    function FotosController($scope, FotosService) { 
        
        $scope.fotos = [];
        $scope.filtro = '';
    
        FotosService.todasFotos()
                .success(function(fotos) {
                    $scope.fotos = fotos;
                })
                .error(function(error) {
                    console.log(error);
                });

        $scope.remover = function(foto) {
            FotosService.removerFoto(foto)
                .success(function(foto) {
                    var index = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(index, 1);
                })
                .error(function(error) {
                    console.log(error);
                });
        }

    }

})();
