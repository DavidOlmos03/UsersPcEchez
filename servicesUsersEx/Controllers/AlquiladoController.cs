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

    [Authorize]
    public class AlquiladoController : ApiController
    {
        /*
        public List<Evento> Get()
        {
            clsEvento _evento = new clsEvento();
            return _evento.ConsultarActivos();
        }*/

        // GET api/<controller>
        public IQueryable Get()
        {
            clsAlquilado alquilado = new clsAlquilado();
            IQueryable y = alquilado.ListaAlquilado();
            return y;
        }

        
        // GET api/<controller>
        /*
        public IQueryable<Evento> Get()
        {
            clsEvento eventos=new clsEvento();

            return eventos.ConsultarAll(); 
        }*/

        // GET api/<controller>/5
        public Alquilado Get(string Serial)
        {
            clsAlquilado alquilado = new clsAlquilado();
            Alquilado y = alquilado.Consultar(Serial);
            return y;
        }
        /*
        public List<Alquilado> GetActivos()
        {
            clsAlquilado _alquilado = new clsAlquilado();
            return _alquilado.consultarActivos();
        }
        
        public List<Alquilado> obtenerInactivos()
        {
            clsAlquilado _alquilado = new clsAlquilado();
            return _alquilado.consultarInactivos();
        }*/
        // POST api/<controller>
        public string Post([FromBody] Alquilado value)
        {

            clsAlquilado alquilados = new clsAlquilado();
            alquilados.alquilado = value;
            return alquilados.Insertar();
        }

        // PUT api/<controller>/5
        public string Put( [FromBody] Alquilado value)
        {
            clsAlquilado alquilados = new clsAlquilado();
            alquilados.alquilado = value;
            return alquilados.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete([FromBody] Alquilado value)
        {
            clsAlquilado alquilados = new clsAlquilado();
            alquilados.alquilado = value;

           /* clsDevolucion devoluciones = new clsDevolucion();
            Alquilado y = alquilados.Consultar(value.Serial_);
            devoluciones.devolucion = y;
            devoluciones.Insertar();*/
            

            return alquilados.Eliminar();
        }
    }
}