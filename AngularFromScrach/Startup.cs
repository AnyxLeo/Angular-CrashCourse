using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularFromScrach.Startup))]
namespace AngularFromScrach
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
