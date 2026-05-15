import bcrypt from 'bcrypt';
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {

    try {
      const { username, email, password} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      console.log(newUser);
      
      res.status(201).json({message : "User Created Successfully."})    
    } catch (error) {
        console.log(error);
        res.status(599).json({message : "Failed to create user"});
    }
}

export const login = async (req, res) => {
    
    try {
      const { username, password} = req.body;

      const user = await prisma.user.findUnique({
        where : {username}
      })
      if (!user) return res.status(401).json({message : "Invalid Credentials"})

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).json({message : "Incorrect Password"});
      
      // res.setHeader("Set-Cookie", "test =" + "myvalue" ).json({message : "Login succesfully !"})
      const age = 60 * 60 * 24 * 3;

      const token = jwt.sign({
        user : user.id,
      }, process.env.JWT_SECRET_KEY, {expiresIn : age})

      res.cookie("token", token, {
        httpOnly : true,
        maxAge : age * 1000
      }).status(200).json({"message" : "Login Successfully !"});

    } catch (error) {
      console.log(error);
      res.status(500).json({message : "Failed to Login"});
    }
}

export const signout = (req, res) => {
    res.clearCookie("token").status(200).json({message : "Logout Successfully"})  
}

