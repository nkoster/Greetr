(function(global) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language)
    }

    Greetr.prototype = {};

    Greetr.init = function(firstname, lastname, language) {

        var self = this;

        self.firstname = firstname || 'No';
        self.lastname = lastname || 'Name';
        self.language = language || 'be';
    
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.$G = Greetr;

}(window))
