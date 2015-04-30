Router.configure({
    layoutTemplate: 'layout'
});

var BaseController = RouteController.extend({

});

Router.route("/", {
    name: "home",
    template: "home",
    data: function() {
        return {};
    }
});