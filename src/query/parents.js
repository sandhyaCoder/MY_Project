const db = require("../models");

getAllParents = async function(obj) {
  let data = await db.Parents.create(obj);
  return data
};



module.exports = { getAllParents };
