/// <reference path='./node_modules/tns-platform-declarations/android/android.d.ts' />
/// <reference path='./node_modules/tns-core-modules/tns-core-modules.d.ts' />

import { _URIHandler } from './urihandler.common';
import * as application from 'application';

export class URIHandler extends _URIHandler{}

function androidHandleBundleEventData(args){
    var intent = args.activity.getIntent();
    var data = intent.getData();
    if(data){
        URIHandler.prototype.url = data.toString();
        URIHandler.prototype.fragment = data.getFragment();
        URIHandler.prototype.scheme = data.getScheme();
        URIHandler.prototype.query = data.getQuery();
        URIHandler.prototype.path = data.getPath();
        URIHandler.prototype.host = data.getHost();
        if( /^[^:]*:[^:]*$/g.test(data.getUserInfo()) ) {
            var userAndPassword = data.getUserInfo().split(':');
            URIHandler.prototype.user = userAndPassword[0];
            URIHandler.prototype.password = userAndPassword[1];
        }
    }
}

application.android.on(
    application.AndroidApplication.activityCreatedEvent,
    androidHandleBundleEventData
);

application.android.on(
    application.AndroidApplication.activityResumedEvent,
    androidHandleBundleEventData
);