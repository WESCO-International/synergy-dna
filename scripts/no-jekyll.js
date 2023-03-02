const fs = require('fs');

fs.writeFileSync('./.nojekyll', '/* Tells github pages not to use Jekyll */');