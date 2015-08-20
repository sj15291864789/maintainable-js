/**
 * Created by jshen on 8/19/15.
 */
function DOMOperator() {
    this.appendLocationList = function(data) {
        $('#results').html(this.getHtmlFromJson(data));
    };

    this.getHtmlFromJson = function(data) {
        var template = _.template('<div class="panel large-12 columns">' +
            '<h5><%= name%></h5>' +
            '<h6><%= description%></h6>' +
            '<a href="#" class="like button tiny right">Like</a>' +
            '</div>');
        var htmlText = '';
        data.forEach(function(ele) {
            htmlText += template(ele);
        });
        return htmlText;
    };

    this.insertLikePlace = function(name) {
        var htmlText = '<li class="like">' + name + '</li>';
        $('#likedPlaces').find('ul').append($(htmlText));
    };
}