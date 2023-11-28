using System;
using System.Collections.Generic;
using System.Linq;
using servicesUsersEx.Models;

namespace servicesUsersEx.Clases
{
    public class clsRol
    {
        public Rol Rol { get; set; }
        private usuariosExEntities DBUsersEx = new usuariosExEntities();

        public List<Rol> ConsultarRoles()
        {
            return DBUsersEx.Rols
                .OrderBy(t=>t.id)
                .ToList();
        }


    }
}