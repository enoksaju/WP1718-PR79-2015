﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaxiService.Models;
using TaxiService.Repository;

namespace TaxiService.Controllers
{
    public class CustomerController : ApiController
    {
        private CustomerRepo _custRepo = new CustomerRepo();
        private DriveRepo _driveRepo = new DriveRepo();

        [HttpPost]
        public HttpResponseMessage CreateNewDrive([FromBody]Drive drive)
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
