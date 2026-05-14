import bcrypt from 'bcrypt';

export const register = async (req, res) => {

    const { username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    res.body = {
        username : username,
        email : email,
        password : hashedPassword
    }

    console.log(res.body);
    
}

export const login = (req, res) => {
    console.log("login end point");
}

export const signout = (req, res) => {
    console.log("signout end point");
}

