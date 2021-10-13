//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Model
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route   /signup
des      Register new user
params   none
access   public
method   post
*/

Router.post ("/signup", async (req, res) => {
    try {
      await UserModel.findByEmailAndPhone(req.body.credentials);

      // Save tO DB
      const newUser = await UserModel.create(req.body.credentials);
       
      // generate JWT auth token
      const token = newUser.generateJwtToken();

      // return
      return res.status(200).json({ token, status:"success" });
   } catch (error) {
     return res.status(500).json({ error: error.message });
   }
});


export default Rout

