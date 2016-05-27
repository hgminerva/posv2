System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JVModel;
    return {
        setters:[],
        execute: function() {
            JVModel = (function () {
                function JVModel() {
                    this.jvDate = new Date();
                    this.createdDateTime = new Date();
                    this.updatedDateTime = new Date();
                }
                return JVModel;
            }());
            exports_1("JVModel", JVModel);
        }
    }
});
//# sourceMappingURL=jvModel.js.map