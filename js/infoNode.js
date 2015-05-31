var utilities = require('./utilities.js');

var infoNode = {
    createInfoNode : function(url) {
        var contentNode = this._createContentNode(url);
        return "<div class='shape'>" + contentNode + "</div>";

    },

    _createContentNode : function(url) {
        var urlTLD = utilities.getTopLevelDomainNameFrom(url);
        return "<div class='shape-content'>" + urlTLD + "</div>";
    }
};

module.exports = infoNode;
