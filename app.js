// get a new object. The architecture allows us to
// not have to use the "new" keyword here
var g = $G('Niels', 'Apekop', 'nl');

// use the chainable methods
g.greet().setLanguage('en').greet(true).setLanguage('nl').log()
.setGreeting('#greeting', true).setGreeting('.g2');

// change the g object with a click event
$('#login').click(function() {
    $('#logindiv').hide();
    // use the chainable methods to change
    // everything on the fly
    g.setLanguage($('#language').val())
        .setGreeting('#greeting', true)
        .setGreeting('.g2')
        .log()
});
