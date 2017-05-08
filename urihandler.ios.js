"use strict";
/// <reference path='./node_modules/tns-platform-declarations/ios/ios.d.ts' />
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
var MyDelegate = (function (_super) {
    __extends(MyDelegate, _super);
    function MyDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDelegate.prototype.applicationOpenURLOptions = function (application, url, options) {
        if (url) {
            URIHandler.prototype.uri = url.absoluteString;
            URIHandler.prototype.fragment = url.fragment;
            URIHandler.prototype.scheme = url.scheme;
            URIHandler.prototype.query = url.query;
            URIHandler.prototype.path = url.path;
            URIHandler.prototype.host = url.host;
            URIHandler.prototype.user = url.user;
            URIHandler.prototype.password = url.password;
        }
        return true;
    };
    return MyDelegate;
}(UIResponder));
MyDelegate.ObjCProtocols = [UIApplicationDelegate];
exports.MyDelegate = MyDelegate;
application.ios.delegate = MyDelegate;
