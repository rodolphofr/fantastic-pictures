(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotoController', FotoController);

    FotoController.$inject = ['$scope', '$routeParams', 'FotosService'];

    function FotoController($scope, $routeParams, FotosService) {

        $scope.foto = {};
        $scope.foto.grupo = {};
        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';

        FotosService.buscarFoto($routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;               
            })
            .error(function(error) {
                console.log(error);
            });
        
        $scope.submiter = function() {
            if ($scope.foto._id) {
                _editaFoto($scope.foto);
            } else {

                if ($scope.formulario.$valid) {
                    
                    FotosService.salvarFoto($scope.foto)
                        .success(function(novaFoto) {
                            _resetForm();
                            $scope.mensagemSucesso = "Sua foto foi salva com sucesso!";
                        })
                        .error(function(error) {
                            console.log(error);
                            $scope.mensagemErro = "Ocorreu algum erro ao tentar salvar sua foto!";
                        });

                }

            }
        }

        var _editaFoto = function(foto) {
            FotosService.atualizarFoto(foto)
                .success(function() {
                    $scope.mensagemSucesso = "Sua foto foi atualizada com sucesso";
                })
                .error(function(error) {
                    console.log(error);
                });
        }

        var _resetForm = function() {
            document.querySelector("#form").reset();
        }

    }

})();
