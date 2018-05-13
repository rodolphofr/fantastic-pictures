(function() {
    'use strict';

    angular.module('fantasticPictures')
           .service('GruposService', GrupoService);

    GrupoService.$inject = ['$http'];

    function GrupoService($http) {

        var baseUrl = 'v1/grupos';

        this.todosGrupos = function() {
            return $http.get(baseUrl);    
        }
    }

})();