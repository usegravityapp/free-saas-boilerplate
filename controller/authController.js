exports.signin = async function(req, res){

  // SUGGESTED FLOW -- 
  // 1. Verify the user exists based on their email
  // 2. Verify the user's password
  // 3. Generate a JWT with the user id and permission

  // ADVANCED FLOW --
  // 1. Store the sign-in attempt to the database with ip, device and browser
  // 2. Check for a suspicious sign-in attempt and notify user or block it
  // 3. Store the JWT in the database so a user can be signed out easily

  // A full auth system is available in the web boilerplate from usegravity.app
  return res.status(200).send();

}