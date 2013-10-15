define(['marionette', 'text!templates/contacts.html', 'js/app/models/contacts'],
function(Marionette, contactsTemplate, Contacts){
    var ContactsView = Backbone.Marionette.ItemView.extend({
        model: new Contacts(),
        template: function(model) {
            return _.template(contactsTemplate, {model: model});
        },

        events: {
        },

        initialize: function(options){
            this.model.fetch();
            this.model.on('sync', this.render);
        },

        onRender: function(){
            $('#home-link').removeClass('active');
            $('#contacts-link').addClass('active');
        }
    });

    return ContactsView;
});