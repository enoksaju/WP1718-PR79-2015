﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class Car
    {
        public Driver MyDriver { get; set; }
        public int ModelYear { get; set; }
        public string RegNumber { get; set; }
        public int Id { get; set; }
        public Enums.CarTypes Type { get; set; }
    }
}