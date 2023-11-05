using System;
using System.Collections.Generic;
using System.Linq;
using servicesUsersEx.Models;

namespace servicesUsersEx.Clases
{
    public class clsPropio
    {

        public Propio propio { get; set; }
        private usuariosExEntities DBUsersEx = new usuariosExEntities();
        public string Insertar()
        {
            try
            {

                DBUsersEx.Propios.Add(propio);
                DBUsersEx.SaveChanges();
                return "Se ingreso el nuevo pc en tabla Propio";
            }
            catch (Exception e)
            {
                // retorna  error 
                return e.Message;
            }

        }
        public Propio Consultar(string serial)
        {//selecciona uno  solo
            return DBUsersEx.Propios.FirstOrDefault(r => r.Serial_ == serial);
        }
        /*
         * Probando para hacer el combo box con las fk
         */
        /*
        public List<Alquilado> ConsultarActivos()
        {
            //Este método retorna todos los tipos de productos activos
            //Se hace una consulta a la base de datos, del tipo de producto, para que los retorne todos en formato de lista
            //Sirve para llenar el combo
            return DBUsersEx.Alquiladoes
                          .OrderBy(t => t.Id)
                          .ToList();
        }*/
        public IQueryable<Propio> ConsultarAll()
        {
            //SELECCIONA todo 
            return DBUsersEx.Propios.AsQueryable();
        }
        public string Actualizar()
        {
            try
            {// pregunta si existe el pc en tabla Alquilado  
                Propio _propio = Consultar(propio.Serial_);
                if (_propio == null)
                {
                    return "No se encuentra ningun PC propio con dicho serial";
                }
                /* // pregunta  si existe el empleado 
                 if (!DBUsersEx.Empleadoes.Any(r => r.IDEmpleado == evento.IDEmpleado))
                 {
                     return " no se encuentra ningun  empleado";

                 }*/
                //actualiza los datos
                _propio.User = propio.User;
                _propio.Serial_ = propio.Serial_;
                _propio.PC_Name = propio.PC_Name;
                _propio.Installation_Date = propio.Installation_Date;
                _propio.Specifications_ = propio.Specifications_;
                _propio.Ram = propio.Ram;
                _propio.Desktop_Laptop = propio.Desktop_Laptop;
                _propio.Domain = propio.Domain;


                //_eventos.IDEmpleado = evento.IDEmpleado;


                DBUsersEx.SaveChanges();
                return "se a actualizado el PC propio con serial " + _propio.Serial_;
            }
            catch (Exception e)
            {
                return e.Message;
                throw;
            }


        }

        public string Eliminar()
        {
            try
            {
                Propio _propio = Consultar(propio.Serial_);
                if (_propio == null)
                {
                    return " no se encuentra ninguna PC propio con serial " + _propio.Serial_;
                }

                DBUsersEx.Propios.Remove(_propio);
                DBUsersEx.SaveChanges();
                return "Se a eliminado con exito el PC propio con serial " + _propio.Serial_;
            }
            catch (Exception e)
            {
                return e.Message;
                throw;
            }
        }

        public IQueryable ListaPropio()
        {
            /*
                SELECT	    E.IDEmpleado as "ID EMPLEADO", E.Nombre as "NOMBRE EMPLEADO", P.IdEventos,P.FechaInicio,P.FechaFin, P.DetalleEvento
                FROM	    Empleado E inner join Evento P
                ON E.IDEmpleado = P.IdEventos
             */
            return from A in DBUsersEx.Set<Propio>()
                   select new
                   {
                       ID = A.Id,
                       User = A.User,
                       Serial_ = A.Serial_,
                       PC_Name = A.PC_Name,
                       Installation_Date = A.Installation_Date,
                       Specifications_ = A.Specifications_,
                       Ram = A.Ram,
                       Desktop_Laptop = A.Desktop_Laptop,
                       Domain = A.Domain,
                   };
        }
        /*
        public IQueryable ListaEventos()
        {
            var query = from E in dbHotel.Set<Empleado>()
                        join P in dbHotel.Set<Evento>()
                        on E.IDEmpleado equals P.IdEventos into eventosEmpleado
                        from evento in eventosEmpleado.DefaultIfEmpty()
                        select new
                        {
                            IDEmpleado = E.IDEmpleado,
                            Nombre = E.Nombre,
                            IdEventos = P.IdEventos,
                            FechaInicio = P.FechaInicio,
                            FechaFin = P.FechaFin,
                            DetalleEvento = evento != null ? evento.DetalleEvento : null
                        };

            return query;
        }*/

    }
}