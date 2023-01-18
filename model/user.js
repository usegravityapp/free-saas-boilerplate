const { v4: uuidv4 } = require('uuid');

exports.create = async function({ email, password }){

  // SUGGESTED FLOW -- 
  // 1. Hash the password using bcrypt
  // 2. Create a UUID for the user id using uuidv4
  // 3. Insert the user

}