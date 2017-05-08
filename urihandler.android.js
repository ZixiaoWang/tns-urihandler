"use strict";
/// <reference path='./node_modules/tns-platform-declarations/android/android.d.ts' />
/// <reference path='./node_modules/tns-core-modules/tns-core-modules.d.ts' />
Object.defineProperty(exports, "__esModule", { value: true });
var urihandler_common_1 = require("./urihandler.common");
var application = require("application");
var URIHandler = (function (_super) {
    __extends(URIHandler, _super);
    function URIHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return URIHandler;
}(urihandler_common_1._URIHandler));
exports.URIHandler = URIHandler;
function androidHandleBundleEventData(args) {
    var intent = args.activity.getIntent();
    var data = intent.getData();
    if (data) {
        URIHandler.prototype.uri = data.toString();
        URIHandler.prototype.fragment = data.getFragment();
        URIHandler.prototype.scheme = data.getScheme();
        URIHandler.prototype.query = data.getQuery();
        URIHandler.prototype.path = data.getPath();
        URIHandler.prototype.host = data.getHost();
        if (/^[^:]*:[^:]*$/g.test(data.getUserInfo())) {
            var userAndPassword = data.getUserInfo().split(':');
            URIHandler.prototype.user = userAndPassword[0];
            URIHandler.prototype.password = userAndPassword[1];
        }
    }
}
application.android.on(application.AndroidApplication.activityCreatedEvent, androidHandleBundleEventData);
application.android.on(application.AndroidApplication.activityResumedEvent, androidHandleBundleEventData);
