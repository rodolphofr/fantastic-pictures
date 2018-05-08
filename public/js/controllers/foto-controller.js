(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotoController', FotoController);

    function FotoController($scope, $http) {
        
        var vm = this;

        vm.foto = {
            url: '',
            titulo: '',
            descricao: ''
        };

        vm.mensagemSucesso = '';
        vm.mensagemErro = '';

        $scope.submiter = function() {
            if ($scope.formulario.$valid) {
                $http.post('v1/fotos', vm.foto)
                     .success(function(result) {
                        vm.resetForm();
                        vm.mensagemSucesso = "Sua foto foi salva com sucesso!";
                     })
                     .error(function(error) {
                        console.log(error);
                        vm.mensagemErro = "Ocorreu algum erro ao tentar salvar sua foto!"
                     });
            }
        }

        vm.resetForm = function() {
            document.querySelector("#form").reset();
        }

    }

})();
