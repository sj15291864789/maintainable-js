/**
 * Created by jshen on 8/19/15.
 */
function LocationSearch(domOperator) {
    var domOperator = domOperator;
    this.search = function(location) {
        var queryparam = 'name=' + location||'';
        $.get('http://location-backend-service.herokuapp.com/locations?' + queryparam)
            .done(function(data) {
                domOperator.appendLocationList(data);
            })
            .fail(function() {
                alert("failed");
            });
    };
}