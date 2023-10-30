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
    public class DevolucionController : ApiController
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
            clsDevolucion evento = new clsDevolucion();
            IQueryable y = evento.ListaDevolucion();
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
        public Devolucion Get(string Serial)
        {
            clsDevolucion devolucion = new clsDevolucion();
            Devolucion y = devolucion.Consultar(Serial);
            return y;
        }

        // POST api/<controller>
        public string Post([FromBody] Devolucion value)
        {

            clsDevolucion devueltos = new clsDevolucion();
            devueltos.devolucion = value;
            return devueltos.Insertar();
        }

        // PUT api/<controller>/5
        public string Put( [FromBody] Devolucion value)
        {
            clsDevolucion devueltos = new clsDevolucion();
            devueltos.devolucion = value;
            return devueltos.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete([FromBody] Devolucion value)
        {
            clsDevolucion devueltos = new clsDevolucion();
            devueltos.devolucion = value;

            return devueltos.Eliminar();
        }
    }
}