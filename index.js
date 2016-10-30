'use strict';

var APP_ID = 'amzn1.ask.skill.9ab2d42e-130f-4780-85bd-6bec69f07385';

var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = "Hello";

var GreeterService = function() {
    AlexaSkill.call(this, APP_ID);
}
GreeterService.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response) {
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

GreeterService.prototype.intentHandlers = {
    'HelloWorldIntent': helloResponseFunction
};

exports.handler = function(event, context) {
    var greeterService = new GreeterService();
    greeterService.execute(event, context);
}
