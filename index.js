const md5File    = require('md5-file');

if(process.argv.length <= 2) {
  console.log('no path argument');
  process.exit(1);
}
if(process.argv.length > 3) {
  console.log('please write path argument');
  process.exit(2);
}

md5File(process.argv[2]).then((hash) => {
  console.log(`The MD5 sum is: ${hash}`)
});