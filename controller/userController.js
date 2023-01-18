const user = require('../model/user');

exports.create = async function(req, res){

  // SUGGESTED FLOW -- 
  // 1. Verify email and password was sent from the client
  // 2. Verify the user's isn't already registered
  // 3. Create the user

  return res.status(200).send()

}