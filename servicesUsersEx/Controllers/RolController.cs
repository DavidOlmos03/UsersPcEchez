using servicesUsersEx.Clases;
using servicesUsersEx.Models;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace servicesUsersEx.Controllers
{
    [EnableCors(origins: "http://localhost:60277", headers: "*", methods: "*")]
    public class RolController : ApiController
    {
        
        public List<Rol> Get()
        {
            clsRol _rol = new clsRol();
            return _rol.ConsultarRoles();
        }

       
    }
}