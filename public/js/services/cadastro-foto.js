(function() {
    'use strict';

    angular.module('meusServicos')
           .factory('cadastroFotoService', cadastroFotoService);

    // $rootScope é o escopo pai de todos os escopos        
    cadastroFotoService.$inject = ['fotosService', '$q', '$rootScope'];
     
    function cadastroFotoService(fotosService, $q, $rootScope) {
        
        var service = {};

        service.cadastrar = function(foto) {
            return $q(function(resolve, reject) {

                if (foto._id) {

                    fotosService.update({ fotoId: foto._id }, foto, function() {
                        
                        // O $broadcast desce na hierarquia de elementos no escopo do controller, 
                        // diferente do seu irmão $emit.
                        $rootScope.$broadcast('fotoCadastrada');

                        resolve({
                            mensagem: "Sua foto foi atualizada com sucesso!",
                            inclusao: false
                        });

                    }, function(error) {

                        console.log(error);
                        reject({
                            mensagem: "Ocorreu algum erro ao tentar atualizar sua foto!",
                        });

                    });


                } else {

                    fotosService.save(foto, function() {

                        $rootScope.$broadcast('fotoCadastrada');

                        resolve({
                            mensagem: "Sua foto foi salva com sucesso!",
                            inclusao: true
                        });

                    }, function(error) {

                        console.log(error);
                        reject({
                            mensagem: "Ocorreu algum erro ao tentar salvar sua foto!"
                        });

                    });

                }

            });

        }

        return service;

    }

})();