(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotoController', FotoController);

    FotoController.$inject = ['$scope', '$routeParams', 'fotosService', 'cadastroFotoService'];

    function FotoController($scope, $routeParams, fotosService, cadastroFotoService) {

        $scope.foto = {};
        $scope.foto.grupo = {};
        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';

        if ($routeParams.fotoId) {
            fotosService.get({ fotoId: $routeParams.fotoId }, function(foto) {
                $scope.foto = foto;               
            }, function(error) {
                console.log(error);
                $scope.mensagemErro = "Não foi possível obter a foto!";
            });
        }
        
        $scope.submiter = function() {
            if ($scope.formulario.$valid) {
                cadastroFotoService.cadastrar($scope.foto)
                    .then(function(data) {
                        $scope.mensagemSucesso = data.mensagem;
                        if (data.inclusao) $scope.foto = {};
                    })
                    .catch(function(erro) {
                        $scope.mensagemErro = erro.mensagem;
                    });
            }
        }

    }

})();
