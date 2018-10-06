(function(global) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    var supportedLanguages = ['nl', 'en'];

    var greetings = {
        nl: 'Hallo',
        en: 'Hello'
    };

    var formalGreetings = {
        nl: 'Groeten',
        en: 'Greetings'
    };

    var logMessages = {
        nl: 'Log nl',
        en: 'Log en'
    };

    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) throw "Invalid language.";
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName;
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            return this;
        }
    };

    Greetr.init = function(firstName, lastName, language) {

        var self = this;

        self.firstName = firstName || 'No';
        self.lastName = lastName || 'Name';
        self.language = language || 'be';
    
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.$G = Greetr;

}(window))
