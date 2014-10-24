var getGroupProcessor = require("./group-css-media-queries-processor"),
    usage = require("./usage");

module.exports = {
    install: function(less, pluginManager) {
		var GroupProcessor = getGroupProcessor(less);
        pluginManager.addPostProcessor(new GroupProcessor());
    },
    printUsage: function () {
        usage.printUsage();
    },
    minVersion: [2, 0, 0]
};