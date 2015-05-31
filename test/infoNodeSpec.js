var assert = require('assert');
var infoNode = require('../js/infoNode.js');

describe('infoNode', function() {
    describe('#createInfoNode', function() {

        var url = "http://myurl.com";
        var expectedContentDiv = "<div class='shape-content'>myurl</div>";
        var expectedInfoDiv = "<div class='shape'>" + expectedContentDiv + "</div>";

        it('should create a div with the basename of the url as the content', function() {
            var actualDiv = infoNode._createContentNode(url);
            assert.equal(expectedContentDiv, actualDiv);
        });

        it('should create a div that contains the contentNode', function() {
            var actualDiv = infoNode.createInfoNode(url);
            assert.equal(expectedInfoDiv, actualDiv);
        });
    });
});

