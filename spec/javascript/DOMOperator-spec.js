/**
 * Created by jshen on 8/19/15.
 */
describe('DOMOperatpr', function(){
    'use strict';
    it('should be compile correct html from json', function(){
        var response = [{"name": "beijing", "description": "didu"}, {"name": "shanghai", "description": "modu"}];
        var htmlText = '<div class="panel large-12 columns">' +
            '<h5>beijing</h5>' +
            '<h6>didu</h6>' +
            '<a href="#" class="like button tiny right">Like</a>' +
            '</div>' + '<div class="panel large-12 columns">' +
            '<h5>shanghai</h5>' +
            '<h6>modu</h6>' +
            '<a href="#" class="like button tiny right">Like</a>' +
            '</div>';
        var domOperator = new DOMOperator();

        expect(domOperator.getHtmlFromJson(response)).toBe(htmlText);
    });
});