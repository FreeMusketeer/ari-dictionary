import "https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js";
import "https://unpkg.com/decap-cms-widget-id@^3.0.0/dist/decap-cms-widget-id.js";

CMS.registerWidget('ncw-id', DecapCMSWidgetId.IdControl);

CMS.init(); 