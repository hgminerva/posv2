System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Response;
    return {
        setters:[],
        execute: function() {
            (function (Response) {
                Response[Response["SUCCESS"] = 200] = "SUCCESS";
                Response[Response["BAD_REQUEST"] = 400] = "BAD_REQUEST";
                Response[Response["FORBIDDEN_ERROR"] = 403] = "FORBIDDEN_ERROR";
                Response[Response["NOT_FOUND"] = 404] = "NOT_FOUND";
            })(Response || (Response = {}));
            exports_1("Response", Response);
        }
    }
});
//# sourceMappingURL=response.js.map