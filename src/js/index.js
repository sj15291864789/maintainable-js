/**
 * Created by jshen on 8/18/15.
 */
$(document).ready(function() {
    var domOperator = new DOMOperator();
    var locationSearch = new LocationSearch(domOperator);
    $('.row').on('click', '#searchButton', function() {
        var location = $('#locationInput').val();
        locationSearch.search(location, domOperator.appendLocationList);
    });

    $('#results').on('click', '.like', function() {
        var likePlace = $(this).closest('div').find('h5').text();
        alert(likePlace);
        domOperator.insertLikePlace(likePlace);
    });
});