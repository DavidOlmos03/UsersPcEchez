using Newtonsoft.Json.Linq;
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
        public User user { get; set; }

        //public Devolucion devolucion { get; set; }

        private usuariosExEntities DBUsersEx = new usuariosExEntities();
        public User Consultar(string email)
        {//selecciona uno  solo
            return DBUsersEx.Users.FirstOrDefault(r => r.correo == email);
        }

        public string Insertar()
        {
            try
            {
                string Hash = BCrypt.Net.BCrypt.HashPassword(user.contraseña);
                user.contraseña = Hash;
                DBUsersEx.Users.Add(user);
                DBUsersEx.SaveChanges();
                return "Se ingreso el nuevo usuario";
            }
            catch (Exception e)
            {
                // retorna  error 
                return e.Message;
            }

        }

    }
}