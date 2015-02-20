'use strict';

angular.module('mobile')
        .service('common', function () {
            var baseRestUrl = 'http//test.com/mobile-services/';

            return {
                baseRestUrl: function () {
                    return baseRestUrl;
                },
                accountRestUrl: function() {
                    return baseRestUrl + 'account/';
                },
                getDateString: function (value) {
                    var ddate = new Date(value);
                    return this.getDateFormat(ddate);
                },
                getDateFormat: function (ddate){
                    return (ddate.getUTCMonth() + 1) + '/' + ddate.getUTCDate() + '/' + ddate.getUTCFullYear().toString().substr(2, 2);
                }
            };
        });
