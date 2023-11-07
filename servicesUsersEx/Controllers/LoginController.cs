using servicesUsersEx.Clases;
using servicesUsersEx.Models;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Policy;
using System.Web.Http;
using System.Web.Http.Cors;

namespace servicesUsersEx.Controllers
{
    [EnableCors(origins: "http://localhost:60277", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        

        //public Devolucion devolucion { get; set; }

        public User Get(string email, string password)
        {
            clsLogin user = new clsLogin();
            User y = user.Consultar(email);
            
            bool validPass = BCrypt.Net.BCrypt.Verify(password, y.contraseña);
            if (validPass)
            {
                return y;
            }else { return null; }
            
        }

        // POST api/<controller>
        public string Post([FromBody] User value)
        {

            clsLogin users = new clsLogin();
            users.user = value;
            return users.Insertar();
        }
        /*public bool Login(User usuario)
        {//selecciona uno  solo
            try
            {
                var usuarioEncontrado = DBUsersEx.Users.FirstOrDefault(r => r.correo == usuario.correo);

                if (usuarioEncontrado != null && usuarioEncontrado.contraseña == usuario.contraseña)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error en el proceso de inicio de sesión: " + ex.Message);
            }

        }*/
    }
}