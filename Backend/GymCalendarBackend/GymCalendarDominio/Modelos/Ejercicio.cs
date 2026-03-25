using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Modelos
{
    public class Ejercicio
    {

        public string Nombre { get; protected set; }
        public double PesoRecord { get; protected set; }
        public int RepeticionesRecord { get; protected set; }
        public Dictionary<String,int> Series { get; protected set; }

        public Musculo Musculo { get; set; }
        public Ejercicio()
        {
            
        }

        public Ejercicio(string nombre,Musculo musculo)
        {
            Nombre = nombre;
            Musculo = musculo;
        }

        public void IngresarDatosEjercicio(double pesoRecord,List<int> repeticiones,int series) {
            PesoRecord = pesoRecord;
            for (int i = 0; i<series; i++)
            {
                Series.Add($"Serie {i + 1}", repeticiones[i]);
            }

        }

        public (string,double,Dictionary<String,int>) LeerDatosEjercicio()
        {
            return (Nombre,PesoRecord, Series);
        }

    }
}
