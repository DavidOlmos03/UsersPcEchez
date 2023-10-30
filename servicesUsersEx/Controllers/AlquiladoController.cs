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
            clsAlquilado evento = new clsAlquilado();
            IQueryable y = evento.ListaAlquilado();
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

            return alquilados.Eliminar();
        }
    }
}