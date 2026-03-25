using System;
using System.Collections.Generic;
using System.Text;

namespace GymCalendarDominio.Interfaces
{
    internal interface IUsuario
    {
        string Email { get; set; }
        string Password { get; set; }

        bool ConfirmarInicioSesion(string email, string password);
    }
}
