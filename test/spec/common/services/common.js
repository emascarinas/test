'use strict';

describe('Service: common', function () {

    beforeEach(module('mobile'));

    var common;
    beforeEach(inject(function (_common_) {
        common = _common_;
    }));

    it('base url should contain mobile-services', function () {
        expect(common.baseRestUrl()).toMatch('mobile-services\/$');
    });
    it('account url should contain mobile-services', function () {
        expect(common.accountRestUrl()).toMatch(common.baseRestUrl() + 'account');
    });
    it('should format date from timestamp', function () {
        expect(common.getDateString(1421902800000)).toBe('1/22/15');
    });
});