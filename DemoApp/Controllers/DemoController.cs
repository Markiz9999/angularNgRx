using System;
using Microsoft.AspNetCore.Mvc;

namespace DemoApp.Controllers
{
    public class Model {
        public string Value { get; set; }
    }

    [Route("[controller]")]
    public class DemoController : Controller
    {
        [HttpPost]
        public IActionResult GetModifiedString([FromBody] Model data) {
            return Json(string.Format("Your string '{0}' ({1})", data.Value, DateTime.Now));
        }
    }
}
