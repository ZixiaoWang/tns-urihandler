# tns-urihandler
A NativeScript Module for inner-app communication URI handling

### How to custom scheme in NativeScript Projects
**Android**  
Add following code to your AndroidManifest.xml, where you can find through /app/App_Resources/Android/AndroidManifest.xml  
```xml
<activity android:launchMode="singleTop">

    <!-- Copy from here -->
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="yourscheme" />
    </intent-filter>
    <!-- Copy end here -->

</activity>
```
NOTE: the attribute ```android:launchMode="singleTop"``` prevent OS start multiple activities.  

**iOS**  
Add following code to your Info.plist, where you can find it in /app/App_Resources/iOS/Info.plist
```xml
<dict>
    <!-- Copy from here -->
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleURLName</key>
            <string>your.app.id</string>
        </dict>
        <dict>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>yourscheme</string>
            </array>
        </dict>
    </array>
    <!-- Copy end here -->
</dict>
```

<span style="color:#ed1b2e">NOTE: After modified AndroidManifest.xml or Info.plist, please remove the entire platform and re-add the platform. This is also recommended by official document.</span>

### How to install Plugin?
Run command 
```
    tns plugin add tns-urihandler
```
or
```
    tns plugin add tns-urihandler-1.0.0.tgz
```

### How to use Plugin?

imcoming URI: ```myapp://Jacky:Passw0rd@home/path/to/my/page?from=anotherApp#fragment```

```javascript
    import { URIHandler } from 'tns-urihandler';

    export class MyApp{
        foo(): void{
            let uriHandler = new URIHandler();
            console.log(uriHandler.getURI()); // myapp://Jacky:Passw0rd@home/path/to/my/page?from=anotherApp#fragment
        }
    }
```

### APIs
```javascript
    uriHandler.getURI();            // myapp://Jacky:Passw0rd@home/path/to/my/page?from=anotherApp#fragment
    uriHandler.getHost();           // home
    uriHandler.getFragment();       // fragment
    uriHandler.getScheme();         // myapp
    uriHandler.getQuery();          // from=anotherApp
    uriHandler.getPath();           // path/to/my/page
    uriHandler.getUser();           // Jacky (if there's any Username)
    uriHandler.getPassword();       // Passw0rd (if there's any Password)

    // experimental function, returns object
    uriHandler.search();            // { form: 'antherApp' }
```

### Thanks
I would like to thank [hypery2k's nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler).
My inspiration comes from his great work.