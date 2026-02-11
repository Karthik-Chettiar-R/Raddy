import * as z from 'zod'
const UserSchema=z.object({
    username : z
    .string()
    .min(3,"Username must atleast be 3 characters long")
    .regex(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers and underscores")
    ,
    password : z
    .string()
    .min(6,"Password must atleast be 6 characters long")
})


export {UserSchema};