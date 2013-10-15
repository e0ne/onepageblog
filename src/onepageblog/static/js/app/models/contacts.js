define(['backbone'],
function(Backbone){
    var Contacts = Backbone.Model.extend({
        urlRoot: '/api/v1/contacts/1/?format=json'
    });

    return Contacts;

});