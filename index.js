var _ = require('underscore');

/* require() resolves in this order */
// 1. Core module
// 2. File or folder
// 3. node_modules

var result = _.contains([1, 2, 3], 2);
console.log(result);