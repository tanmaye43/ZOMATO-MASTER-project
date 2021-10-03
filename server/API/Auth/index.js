//Library
import exprees from "exprees";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Model
import { UserModel, Usermodel } from "../../database/user";

const Router = express.Router();

/*
Route   /signup
des      signup wth email and password
params   none
access   public
method   post
*/

Router.post ("/signup", async (req, res) => {
    try {
      const { email, password, fullname, phoneNumber } = req.body.credentials;

      // Check Whether email exist
      const checkUserByEmail = await UserModel.findOne({ email });
      const checkUserByPhone = await UserModel.findOne({ phoneNumber });
      
      if (checkUserByEmail || checkUserByPhone) {
        return res.json({ error: "User already exits!"});
      }

      // Hash Password 
      const bcryptSalt = await bcrypt.genSalt(8);

      const hashedPassword = await bcrypt.hash(password, bcryptsalt);

      // Save tO DB
      await UserModel.create({
        ... req.body.credentials,
        password: hashedPassword,
      })

      // generate JWT auth token
      const token = jwt.sign({ user:{ fullname, email }}, "ZomatoAPP");

      // return
      return res.status(200).json({ token, status:"success" });
   } catch (error) {
     return res.status(500).json({ error: error.message });
   }
});

export default Router;