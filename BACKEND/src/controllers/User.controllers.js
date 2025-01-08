import { userModel } from "../models/Users.model"
import bcrypt from "bcryptjs";



export const createUser = async (req, res) => {
    try {

      const { fullName, email, password, phone} = req.body;
  
      // password = vivaelpan;

      const codedPassword = await bcrypt.hash(password, 10);
      
      const newUser = await userModel.create({
          fullName,
          email,
          password:codedPassword,
          phone
      });
  
      return res.status(201).json({
          mensaje: 'hola we, ya te cree un usuario',
          datos: newUser
      });
  
    } catch (error) {
      return res.status(400).json({
          mensaje: ':c tu fealdad, se tiro el server!',
          problema: error || error.message
      });
    }
  };
  

  
  // get Mostrar
  export const showUsers = async (req, res) => {
    
    try {

      let users = await userModel.find();
      if(users.length === 0){
          return res.status(200).json({
              mensaje: 'tas solito we ;-;'
          })
      }
  
      return res.status(200).json({
          menasaje: 'ya no estas solito we',
          numeroUsuarios: users.length,
          datos: users
      })
  
    } catch (error) {
      return res.status(400).json({
          mensaje: 'no c pudo we ;-; no c moleste que es mi primer dia D:',
          problema: error || error.message
      });
    }
  };


