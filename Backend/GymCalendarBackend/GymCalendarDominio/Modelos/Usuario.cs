using GymCalendarDominio.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Modelos
{
    public class Usuario : IUsuario
    {
       
        public string Email { get; set; }
        public string Password { get; set; }

        public Usuario(string email, string password)
        {
            Email = email;
            Password = password;
        }

        

        public bool ConfirmarInicioSesion(string email,string password) { 
            
            return Password == password && Email == email;
        
        }

        

    }
}
