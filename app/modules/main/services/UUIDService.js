(function(){
    'use strict';

    function UUIDService() {
        var service = this;

        service.v4 = v4;

        function getRandom(max) {
            return Math.random() * max;
        }

        function v4() {
            var id = '', i;

            for (i = 0; i < 36; i++) {
                if (i === 14) {
                    id += '4';
                }
                else if (i === 19) {
                    id += '89ab'.charAt(getRandom(4));
                }
                else if (i === 8 || i === 13 || i === 18 || i === 23) {
                    id += '-';
                }
                else {
                    id += '0123456789abcdef'.charAt(getRandom(16));
                }
            }
            return id;
        }
    }

    angular
        .module('mdDataTable')
        .service('UUIDService', UUIDService);
}());