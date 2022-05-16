const db = require("../models");

getAllStudents = async function(obj) {
  let data = await db.Students.create(obj);
  return data
};

module.exports = { getAllStudents };
