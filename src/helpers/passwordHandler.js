const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {

     const hashPassword = await bcrypt.hashSync(password,10);
     return hashPassword;

}

const comparePassword = async (a,b) => await bcrypt.compare(a,b);

module.exports = {hashPassword,comparePassword}