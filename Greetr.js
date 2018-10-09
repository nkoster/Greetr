(function(global, $) {

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
        nl: 'Een login van: ',
        en: 'A login from: '
    };

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

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'No';
        self.lastName = lastName || 'Name';
        self.language = language || 'be'
    
    }

    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.$G = Greetr

}(window, jQuery))
