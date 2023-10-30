using System;
using System.Collections.Generic;
using System.Linq;
using servicesUsersEx.Models;

namespace servicesUsersEx.Clases
{
    public class clsDevolucion
    {

        public Devolucion devolucion { get; set; }
        private usuariosExEntities1 DBUsersEx = new usuariosExEntities1();
        public string Insertar()
        {
            try
            {

                DBUsersEx.Devolucions.Add(devolucion);
                DBUsersEx.SaveChanges();
                return "Se ingreso el nuevo pc en tabla Devolucion";
            }
            catch (Exception e)
            {
                // retorna  error 
                return e.Message;
            }

        }
        public Devolucion Consultar(string serial)
        {//selecciona uno  solo
            return DBUsersEx.Devolucions.FirstOrDefault(r => r.Serial_ == serial);
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
        public IQueryable<Devolucion> ConsultarAll()
        {
            //SELECCIONA todo 
            return DBUsersEx.Devolucions.AsQueryable();
        }
        public string Actualizar()
        {
            try
            {// pregunta si existe el pc en tabla Alquilado  
                Devolucion _devolucion = Consultar(devolucion.Serial_);
                if (_devolucion == null)
                {
                    return "No se encuentra ningun PC devuelto con dicho serial";
                }
                /* // pregunta  si existe el empleado 
                 if (!DBUsersEx.Empleadoes.Any(r => r.IDEmpleado == evento.IDEmpleado))
                 {
                     return " no se encuentra ningun  empleado";

                 }*/
                //actualiza los datos
                _devolucion.User = devolucion.User;
                _devolucion.Serial_ = devolucion.Serial_;
                _devolucion.PC_Name = devolucion.PC_Name;
                _devolucion.Installation_Date = devolucion.Installation_Date;
                _devolucion.Plate_PC = devolucion.Plate_PC;
                _devolucion.Specifications_ = devolucion.Specifications_;
                _devolucion.Ram = devolucion.Ram;
                _devolucion.Desktop_Laptop = devolucion.Desktop_Laptop;
                _devolucion.Domain = devolucion.Domain;


                //_eventos.IDEmpleado = evento.IDEmpleado;


                DBUsersEx.SaveChanges();
                return "se  a actualizado el PC devuelto con serial " + _devolucion.Serial_;
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
                Devolucion _devolucion = Consultar(devolucion.Serial_);
                if (_devolucion == null)
                {
                    return " no se encuentra ninguna PC devuelto con serial " + _devolucion.Serial_;
                }

                DBUsersEx.Devolucions.Remove(_devolucion);
                DBUsersEx.SaveChanges();
                return "Se a eliminado con exito el PC devuelto con serial " + _devolucion.Serial_;
            }
            catch (Exception e)
            {
                return e.Message;
                throw;
            }
        }

        public IQueryable ListaDevolucion()
        {
            /*
                SELECT	    E.IDEmpleado as "ID EMPLEADO", E.Nombre as "NOMBRE EMPLEADO", P.IdEventos,P.FechaInicio,P.FechaFin, P.DetalleEvento
                FROM	    Empleado E inner join Evento P
                ON E.IDEmpleado = P.IdEventos
             */
            return from A in DBUsersEx.Set<Devolucion>()
                   select new
                   {
                       ID = A.Id,
                       User = A.User,
                       Serial_ = A.Serial_,
                       PC_Name = A.PC_Name,
                       Installation_Date = A.Installation_Date,
                       Plate_PC = A.Plate_PC,
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