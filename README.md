# AutoCAD-Javascript-API
AutoCAD Javascript API, Fixes, Autodesk.AutoCAD.js

This is a slightly updated version of the V2 Autodesk.AutoCAD.js file provided by AutoDesk via 

http://www.autocadws.com/jsapi/v2/Autodesk.AutoCAD.js

http://app.autocad360.com/jsapi/v2/Autodesk.AutoCAD.js

https://df-prod.autocad360.com/jsapi/v3/Autodesk.AutoCAD.js

Getting Started Guide for v3: https://df-prod.autocad360.com/jsapi/v3/GettingStart/index.html?url=files/GUID-140C1DFD-D9CC-4856-8C8D-54B6B3BA8544.htm,topicNumber=d30e415

Their old one wasn't working with any examples anymore.

To run any example you need to download and modify the LoadIntoAutoCAD.js file and change the html file path string to your local html file to load.  Then you'll want to webload the LoadIntoAutoCAD.js file.

I'm currently testing this with AutoDesk AutoCAD 2019 / AutoDesk AutoCAD Plant3D 2019

The capture.html example now works.

If you'd like to debug, click in the new pallet window and hit F12, this'll bring up the chrome inspector for the pallet.

To keep it consistent I've put together a css template to give the visual appearance of a native autocad app and I've started pushing out the webapps into their own fragments which are loaded through an iframe via a url parameter.  They all use the app.html as the wrapper now.
