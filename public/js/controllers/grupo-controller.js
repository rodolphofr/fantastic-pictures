(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('GrupoController', GrupoController);

    GrupoController.$inject = ['$scope', 'GruposService'];

    function GrupoController($scope, GruposService) {

        $scope.grupos = [];

        GruposService.todosGrupos()
            .success(function(grupos) {
                $scope.grupos = grupos;
            })
            .error(function(error) {
                console.log(error);
            });

    }

})();