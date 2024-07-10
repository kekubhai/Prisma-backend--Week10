

const prisma =require('../prisma/index')

const cookieToken =require('../utils/cookieToken')


//user signup 
exports.signup=async (req,res,next)=>{ 
    try {
          const {name,email,password}=req.body
            if (!name || !email || !password) { 
                throw new Error('please provide all the fields')
            }

            const user =await prisma.user.create({ 
                date:{
                    name,
                    email,
                    password,
                }
            })
//send user a Token 
cookieToken(user,res)



    } catch (error) {
        throw new Error(error)
        
    }
}