var angularpic = angular.module('angularpic', []);

PhotoService.$inject = ['$http'];
angularpic.service('PhotoService', PhotoService);

function PhotoService($http) {

    var vm = this;

    vm.all = all;

    var all = function() {
        var photos = [];

        $http.get('/v1/fotos')
            .success(function(result) {
                photos = result;
            })
            .error(function(error) {
                console.log(error);  
            });

        return photos;
    }

}

