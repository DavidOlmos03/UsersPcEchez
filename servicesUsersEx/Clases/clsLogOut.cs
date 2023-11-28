using Newtonsoft.Json.Linq;
using servicesUsersEx.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace servicesUsersEx.Clases
{
    public class clsLogOut
    {
        public User user { get; set; }

        //public Devolucion devolucion { get; set; }

        private usuariosExEntities DBUsersEx = new usuariosExEntities();     
        /*
         * Se busca salid de la sesion con este metodo
         */
        public bool CerrarSesion()
        {
            bool banderaSalida = false;
            try {
                FormsAuthentication.SignOut();
                banderaSalida = true;
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);                         
            }
            return banderaSalida;
        }
        /*
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

        }*/
        /*
        public IQueryable ListaUsers()
        {
            return from U in DBUsersEx.Set<User>()
                   join R in DBUsersEx.Set<User>().DefaultIfEmpty()
                   on U.idRol equals R.id
                   orderby R.id
                   select new
                   {
                       id = U.id,
                       correo = U.correo,
                       contraseña = U.contraseña,
                       fkRol = R.id
                   };
        }*/

    }
}