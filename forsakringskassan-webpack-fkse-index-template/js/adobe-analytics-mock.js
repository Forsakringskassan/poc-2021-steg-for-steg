/*
    Mockar ut adobe analytics windows.s generellt på hela sajten.
    Framförallt äldre angularjs tjänster förväntar sig att detta objekt finns.
 */

/* eslint-disable camelcase */
var fk_s = {
    tl: function () {},

    t: function () {},

    clearVars: function () {},

    Util: {
        cookieRead: function () {},

        cookieWrite: function () {},

        getQueryParam: function () {},

        urlDecode: function () {},

        urlEncode: function () {},
    },
};

var s_gi = function () {
    return fk_s;
};

window.s = fk_s;
window.s_gi = s_gi;
