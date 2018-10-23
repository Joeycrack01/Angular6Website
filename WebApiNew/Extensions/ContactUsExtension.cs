using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiNew.Entities;
using WebApiNew.Dtos;
using WebApiNew.ViewModels;

namespace WebApiNew.Extensions
{
    public static class ContactUsExtension
    {
        public static void UpdateContactUs(this ContactUs contactUs, ContactUsViewModel contactUsVm)
        {
            contactUs.ID = contactUsVm.ID;
            contactUs.Name = contactUsVm.Name;
            contactUs.Email = contactUsVm.Email;
            contactUs.Message = contactUsVm.Message;
            contactUs.DateContacted = contactUsVm.DateContacted;


        }
    }
}
