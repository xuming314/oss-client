var Resource = require('deployd/lib/resource');
var check = require('validator').check;
var sanitize = require('validator').sanitize;
var util = require('util');

function DPDutil (name, options) {
  Resource.apply(this, arguments);
}
util.inherits(DPDutil, Resource);

DPDutil.label = 'util';
DPDutil.defaultPath = '/util'
DPDutil.events = ['get', 'post'];
DPDutil.prototype.clientGeneration = true;
DPDutil.prototype.handle = function (context, next) {
  var request = context.req;
  if (request.method === 'GET') {
    context.done();
  }
  if (request.internal && request.method === "POST") {
    var body = request.body;
  }
}

module.exports = DPDutil;
