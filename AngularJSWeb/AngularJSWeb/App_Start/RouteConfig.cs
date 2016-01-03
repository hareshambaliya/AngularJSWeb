using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Routing;
using Microsoft.AspNet.FriendlyUrls;

namespace AngularJSWeb
{
    public static class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //var settings = new FriendlyUrlSettings();
            //settings.AutoRedirectMode = RedirectMode.Permanent;
            //routes.EnableFriendlyUrls(settings);
            routes.Ignore("{resource}.axd/{*pathInfo}");
            routes.Ignore("fonts*.woff");
            routes.Ignore("*.js");
            routes.Ignore("*.html");
            routes.Ignore("*.css");
            routes.Ignore("api/*");
            

            routes.MapPageRoute("Default", "{*.}", "~/Default.aspx");
        }
    }
}
