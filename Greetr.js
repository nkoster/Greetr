;(function(global, $) {

    // "new" an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    // hidden within the scope of the IIFE, and never directly accessible
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
        nl: 'Een login van: ',
        en: 'A login from: '
    };

    // All methods and public stuff should live here
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1)
                throw 'Invalid language: ' + this.language;
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
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }
            if (console) {
                console.log(msg)
            }
            return this
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this
        },
        setLanguage: function(lang) {
            this.language = lang;
            this.validate();
            return this
        },
        setGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not available.'
            }
            if (!selector) {
                throw 'Nothing selected.'
            }
            var msg;
            if (formal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }
            $(selector).html(msg);
            return this
        }
    };

    // Constructor, to make sure the prototype is on the object ("new").
    // The actual object is created here, allowing us to "new" an object
    // without calling "new".
    Greetr.init = function(firstName, lastName, language) {
        // "self" can be used in functions that live here, within this scope,
        // because "this" will refer to the global scope!
        var self = this;
        self.firstName = firstName || 'No';
        self.lastName = lastName || 'Name';
        self.language = language || 'nl';
        self.validate()
    }

    // force the init functions prototype to be on the Greetr objects prototype
    Greetr.init.prototype = Greetr.prototype;
    // make the "framework" available on the global obkect
    global.Greetr = global.$G = Greetr

}(window, jQuery))
