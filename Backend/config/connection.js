const mongo = require("mongoose");
async function connectMongodb(url) {
  return mongo
    .connect(url)
    
}
module.exports = {connectMongodb};
