(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotoController', FotoController);

    function FotoController($scope, $http) {
        
        $scope.foto = {
            url: '',
            titulo: '',
            descricao: ''
        };

        $scope.mensagemSucesso = '';
        $scope.mensagemErro = '';

        $scope.submiter = function() {
            if ($scope.formulario.$valid) {
                $http.post('v1/fotos', $scope.foto)
                     .success(function(result) {
                        $scope.resetForm();
                        $scope.mensagemSucesso = "Sua foto foi salva com sucesso!";
                     })
                     .error(function(error) {
                        console.log(error);
                        $scope.mensagemErro = "Ocorreu algum erro ao tentar salvar sua foto!"
                     });
            }
        }

        $scope.resetForm = function() {
            document.querySelector("#form").reset();
        }

    }

})();
