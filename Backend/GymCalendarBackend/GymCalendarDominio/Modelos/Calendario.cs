using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Modelos
{
    public class Calendario
    {

        public List<Fecha>? Fechas { get; protected set; }

        public Calendario()
        {
            Fechas = new List<Fecha>();
        }
    }
}
