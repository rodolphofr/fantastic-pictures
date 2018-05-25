(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotoController', FotoController);

    FotoController.$inject = ['$scope', '$routeParams', 'fotosService'];

    function FotoController($scope, $routeParams, fotosService) {

        $scope.foto = {};
        $scope.foto.grupo = {};
        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';

        if ($routeParams.fotoId) {
            fotosService.get({ fotoId: $routeParams.fotoId }, function(foto) {
                $scope.foto = foto;               
            }, function(error) {
                console.log(error);
            });
        }
        
        $scope.submiter = function() {
            if ($scope.foto._id) {
                _editaFoto($scope.foto);
            } else {

                if ($scope.formulario.$valid) {
                    
                    fotosService.save($scope.foto, function() {
                        $scope.mensagemSucesso = "Sua foto foi salva com sucesso!";
                        _resetForm();
                    }, function(error) {
                        console.log(error);
                        $scope.mensagemErro = "Ocorreu algum erro ao tentar salvar sua foto!";
                    });

                }

            }
        }

        var _editaFoto = function(foto) {
            fotosService.update({ fotoId: foto._id }, $scope.foto, function() {
                $scope.mensagemSucesso = "Sua foto foi atualizada com sucesso";
            }, function(error) {
                console.log(error);
            });
        }

        var _resetForm = function() {
            document.querySelector("#form").reset();
        }

    }

})();
