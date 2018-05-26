(function() {
    'use strict';

    angular.module('meusServicos')
           .factory('cadastroFotoService', cadastroFotoService);

    cadastroFotoService.$inject = ['fotosService', '$q'];

    function cadastroFotoService(fotosService, $q) {
        
        var service = {};

        service.cadastrar = function(foto) {
            return $q(function(resolve, reject) {

                if (foto._id) {

                    fotosService.update({ fotoId: foto._id }, foto, function() {
                        
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