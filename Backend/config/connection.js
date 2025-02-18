const mongo = require("mongoose");
async function connectMongodb(url) {
  return mongo
    .connect(url,{
      serverSelectionTimeoutMS:150000,
    })
    
}
module.exports = {connectMongodb};
