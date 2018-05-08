(function() {
    'use strict';

    angular.module('fantasticPictures')
           .controller('FotosController', ['$scope', '$http', FotosController]);
    
    function FotosController($scope, $http) { // injetado $scope e $http no controller
        
        var vm = this;

        vm.photos = [];
        vm.filtro = '';
    
        // pendurado objeto literal no scopo da view
        $http.get('/v1/fotos')
            .success(function(photos) {
                vm.photos = photos;
            })
            .error(function(error) {
                console.log(error);  
            });
    
    }

})();
