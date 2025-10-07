import {User} from "../models/user.models.js"; // Always include the file extension (.js) in imports when using ES modules in Node.js. This is a common source of errors.=

export const findUser = async({username, email})=>{ // sending username: username, email: email that why it can access it ny destructuring if we just do (username, email) then it will get only object

    //console.log(`username: ${username}, email: ${email}`); // Debugging line to check values
    
    return  await User.findOne({
        $or: [{ username }, { email }],
    });

}// findUser DAO is useful, but not for token generation.

export const findUserById = async(userId) => {
    return await User.findById(userId);
}

export const removeRefreshToken =  async(userId) => {
    return await User.findByIdAndUpdate(
        userId,
        { 
            $unset: { refreshToken: 1 } // This removes the field from document
        },
        { new: true }
    );
}


export const createUser = async ({username, email, password}) =>{

    return await User.create({ 
        username: username,
        email,
        password
    });

};

export const updateCurrentPassword = async(userId, newPassword) =>{

    // get the user
    const user = User.findById(userId);
    // update
    user.password = newPassword; // return await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });
    return await user.save({ validateBeforeSave: false });// It’s a shortcut to save only what you changed without touching unrelated validations.
};

export const updateUserDetails = async(userId, {username, email}) =>{
    return await User.findByIdAndUpdate(userId, {
        $set: {
            email: email,
            username: username
        }
    }, { new: true }).select("-password -refreshToken")
};