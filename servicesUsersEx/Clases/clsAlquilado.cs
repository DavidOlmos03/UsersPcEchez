using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using servicesUsersEx.Models;

namespace servicesUsersEx.Clases
{
    public class clsAlquilado
    {

        public Alquilado alquilado { get; set; }

        //public Devolucion devolucion { get; set; }

        private usuariosExEntities DBUsersEx = new usuariosExEntities();
        public string Insertar()
        {
            try
            {

                DBUsersEx.Alquiladoes.Add(alquilado);
                DBUsersEx.SaveChanges();
                return "Se ingreso el nuevo pc en tabla Alquilado";
            }
            catch (Exception e)
            {
                // retorna  error 
                return e.Message;
            }

        }
        
        public Alquilado Consultar(string serial)
        {//selecciona uno  solo
            return DBUsersEx.Alquiladoes.FirstOrDefault(r => r.Serial_ == serial);
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
        public IQueryable<Alquilado> ConsultarAll()
        {
            //SELECCIONA todo 
            return DBUsersEx.Alquiladoes.AsQueryable();
        }
        /*
        public List<Alquilado> consultarActivos() {
            return DBUsersEx.Alquiladoes
                .OrderBy(t => t.Id)
                .Where(t => t.Status_PC == "active")
                .ToList();
        }
        public List<Alquilado> consultarInactivos()
        {
            return DBUsersEx.Alquiladoes
                .OrderBy(t => t.Id)
                .Where(t => t.Status_PC != "active")
                .ToList();
        }*/

        public string Actualizar()
        {
            try
            {// pregunta si existe el pc en tabla Alquilado  
                Alquilado _alquilados = Consultar(alquilado.Serial_);
                if (_alquilados == null)
                {
                    return "No se encuentra ningun PC Alquilado con dicho serial";
                }
                /* // pregunta  si existe el empleado 
                 if (!DBUsersEx.Empleadoes.Any(r => r.IDEmpleado == evento.IDEmpleado))
                 {
                     return " no se encuentra ningun  empleado";

                 }*/
                //actualiza los datos
                _alquilados.User = alquilado.User;
                _alquilados.Serial_ = alquilado.Serial_;
                _alquilados.PC_Name = alquilado.PC_Name;
                _alquilados.Installation_Date = alquilado.Installation_Date;
                _alquilados.Plate_PC = alquilado.Plate_PC;
                _alquilados.Specifications_ = alquilado.Specifications_;
                _alquilados.Ram = alquilado.Ram;
                _alquilados.Desktop_Laptop = alquilado.Desktop_Laptop;
                _alquilados.Domain = alquilado.Domain;
                _alquilados.Status_PC = alquilado.Status_PC;


                //_eventos.IDEmpleado = evento.IDEmpleado;


                DBUsersEx.SaveChanges();
                return "se  a actualizado el PC Alquilado con serial " + _alquilados.Serial_;
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
                Alquilado _alquilado = Consultar(alquilado.Serial_);
                if (_alquilado == null)
                {
                    return " no se encuentra ninguna PC alquilado con serial " + _alquilado.Serial_;
                }
                /*
                    Se hace el envio de la información a  eliminar en la tabla de alquilado a la tabla de devuelto
                 */
                
                //DBUsersEx.Devolucions.Add(devolucion);
                //Devolucion y = devolucion.Consultar(value.Serial_);

                DBUsersEx.Alquiladoes.Remove(_alquilado);
                DBUsersEx.SaveChanges();
                return "Se a eliminado con exito el PC alquilado con serial " + _alquilado.Serial_;
            }
            catch (Exception e)
            {
                return e.Message;
                throw;
            }
        }

        public IQueryable ListaAlquilado()
        {
            /*
                SELECT	    E.IDEmpleado as "ID EMPLEADO", E.Nombre as "NOMBRE EMPLEADO", P.IdEventos,P.FechaInicio,P.FechaFin, P.DetalleEvento
                FROM	    Empleado E inner join Evento P
                ON E.IDEmpleado = P.IdEventos
             */
            return from A in DBUsersEx.Set<Alquilado>()
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
                       Estatus_PC = A.Status_PC
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