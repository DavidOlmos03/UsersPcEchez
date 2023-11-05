using servicesUsersEx.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace servicesUsersEx.Clases
{
    public class clsLogin
    {
        public User alquilado { get; set; }

        //public Devolucion devolucion { get; set; }

        private usuariosExEntities DBUsersEx = new usuariosExEntities();
        public User Consultar(string email)
        {//selecciona uno  solo
            return DBUsersEx.Users.FirstOrDefault(r => r.correo == email);
        }
    }
}