import { userModel } from "../models/Users.model.js"
import bcrypt from "bcryptjs";


export const createUser = async (req, res) => {


  
    try {

      const {fullName, email, password, phone} = req.body;
  
      // password = vivaelpan;

      const codedPassword = await bcrypt.hash(password, 10);
      
      const newUser = await userModel.create({
          fullName,
          email,
          password:codedPassword,
          phone
      });
  
      return res.status(201).json({
          mensaje: 'ya te cree un usuario, no molestes y dejame comer mi ajiaco.',
          datos: newUser
      });
  
    } catch (error) {

      return res.status(500).json({ 
        mensaje: ':c tu fealdad, se tiro el server!',
        problema: error.message });
    }
  };
  














  // get Mostrar
  export const showUsers = async (req, res) => {
    
    try {

      let users = await userModel.find();
      if(users.length === 0){
          return res.status(200).json({
              mensaje: 'estamos los dos solitos aca... jugamos UNO?'
          })
      }
  
      return res.status(200).json({
          menasaje: 'ya no estas solito... mejor juguemos parques entonces',
          numeroUsuarios: users.length,
          datos: users
      })
  
    } catch (error) {
      return res.status(400).json({
          mensaje: 'no c moleste que es mi primer dia D: yo que culpa!?',
          problema: error || error.message
      });
    }
  };


