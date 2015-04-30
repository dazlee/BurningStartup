Template.home.helpers({
    getEmployees: function() {
        var employeeCount = Session.get("employeeCount")
        if (this.employees !== undefined) {
            return this.employees;
        }
    }
});

Template.home.events({
    "click #add-employee": function(e, template) {

        if (typeof template.data.employees === "undefined") {
            template.data.employees = [];
        }
        template.data.employees.push({})
        Session.set("employeeCount", template.data.employees.length);
    }
});
Template.home.rendered = function() {
    var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };
    var myLineChart = new Chart(ctx).Line(data);
}