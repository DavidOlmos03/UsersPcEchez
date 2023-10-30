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
    public class PropioController : ApiController
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
            clsPropio evento = new clsPropio();
            IQueryable y = evento.ListaPropio();
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
        public Propio Get(string Serial)
        {
            clsPropio propio = new clsPropio();
            Propio y = propio.Consultar(Serial);
            return y;
        }

        // POST api/<controller>
        public string Post([FromBody] Propio value)
        {

            clsPropio propios = new clsPropio();
            propios.propio = value;
            return propios.Insertar();
        }

        // PUT api/<controller>/5
        public string Put( [FromBody] Propio value)
        {
            clsPropio propios = new clsPropio();
            propios.propio = value;
            return propios.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete([FromBody] Propio value)
        {
            clsPropio propios = new clsPropio();
            propios.propio = value;

            return propios.Eliminar();
        }
    }
}