using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Modelos
{
    public class Rutina
    {
        List<Ejercicio> Ejercicios {  get; set; }

        public Rutina()
        {
            Ejercicios = new List<Ejercicio>();
        }
         public Rutina(List<Ejercicio> ejercicios)
        {
            Ejercicios = ejercicios;
        }

    }
}
