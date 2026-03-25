using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Modelos
{
    public class Fecha
    {
        private int _año;
        private int _mes;
        private int _dia;
        public int Año { 
            get => _año;
            
            protected set {
                 if(_año < DateTime.Now.Year)
                {
                    throw new ArgumentException("El año no puede ser menor al año actual.");
                }   
            } 
        }
        public int Mes {
            get => _mes;

            protected set
            {
                if(_mes < 1 || _mes > 12)
                {
                    throw new ArgumentException("El mes debe estar entre 1 y 12.");
                }
                _mes = Mes;
            }
        }
        public int Dia {
            get => _dia; 
            
            protected set {
                if(Dia < 1 || Dia > 31)
                {
                    throw new ArgumentException("El día debe estar entre 1 y 31.");
                }   
                _dia = Dia;
            } 
        }

        public Rutina Rutina { get; protected set; }

        public Fecha(int año,int mes, int dia, Rutina rutina)
        {           
                Año = año;
                Mes = mes;
                Dia = dia;
                Rutina = rutina;
        }

    }

}
