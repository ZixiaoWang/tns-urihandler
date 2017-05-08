/// <reference path='./node_modules/tns-platform-declarations/ios/ios.d.ts' />
/// <reference path='./node_modules/tns-core-modules/tns-core-modules.d.ts' />

import { _URIHandler } from './urihandler.common';
import * as application from 'application';

export class URIHandler extends _URIHandler{}
export class MyDelegate extends UIResponder implements UIApplicationDelegate{

    public static ObjCProtocols = [UIApplicationDelegate];
    
    applicationOpenURLOptions(application: UIApplication, url: NSURL, options: any): boolean {
        if(url){
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
    }
}

application.ios.delegate = MyDelegate;
