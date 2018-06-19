﻿using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaxiService.Models
{
    public class Driver : User
    {
        public bool Ocuppied { get; set; }
        public Car Car { get; set; }
        public Location Location { get; set; }
    }
}