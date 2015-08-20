/**
 * Created by jshen on 8/19/15.
 */
describe('location search spec', function() {
    var onSuccess, onFailure, request, response, locationSearch;
    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascript/fixtures';
        loadFixtures("fixtures.html");
        expect($('#searchButton')).toExist();
        jasmine.Ajax.install();
        response = [{"name": "beijing", "description": "didu"}, {"name": "shanghai", "description": "modu"}];
    });
    describe("search spec", function() {

        it("should call callback function with correct result", function() {
            var domOperator = new DOMOperator();
            locationSearch = new LocationSearch(domOperator);
            //onSuccess = jasmine.createSpy('onSuccess');
            spyOn(domOperator, 'appendLocationList');
            //onFailure = jasmine.createSpy('onFailure');
            locationSearch.search('beijing');
            request = jasmine.Ajax.requests.mostRecent();
            expect(request.url).toBe('http://location-backend-service.herokuapp.com/locations?name=beijing');
            expect(request.method).toBe('GET');
            request.respondWith({
                status: 200,
                responseText: '[{"name": "beijing", "description": "didu"}, {"name": "shanghai", "description": "modu"}]'
            });
            expect(domOperator.appendLocationList).toHaveBeenCalledWith(response);
            var successArgs = domOperator.appendLocationList.calls.mostRecent().args[0];
            console.log(successArgs);
            expect(successArgs.length).toBe(2);

            //expect($('#results')).toHaveHtml(domOperator.getHtmlFromJson(response));
            expect($('#searchResults')).toContainText('Search results');
            expect($('#results')).toContainText("beijing");
        });

        //it("should list results when call with certain data", function() {
        //    var domOperator = new DOMOperator();
        //    domOperator.appendLocationList(response);
        //
        //});
    });
});