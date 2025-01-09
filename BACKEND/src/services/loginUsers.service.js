import { userModel } from "../models/Users.model.js";

import { generatetoken } from "../lib/jwt.js";

import bcrypt from "bcryptjs";

const loginUsers = async (request, response) => {
    try {
      const { emailLogin, passwordLogin } = request.body;
  
      const userFound = await userModel.findOne({ 
        email: emailLogin,
      });
  
  
      if (!userFound) {
        return response
          .status(404)
          .json({
            mensaje:
              "no c encuentra el usuario, se fue a tomar tinto, vaya, registrese y vuelva a ver si volvio :)",
          });
      }
  
      //al compare c le mete el primero es password login y segundo es la contraseña de la base de datos
      const isValidPassword = await bcrypt.compare( passwordLogin, userFound.password); //cambia necesidad
  
  
      if(!isValidPassword){
          return response.status(401).json({mensaje:'no me jodas.. se mas creativo, pon otra contraseña hasta que lo hagas bien >:('})
      }
  
  
      //info en el token
      const payload ={
          id:userFound._id,
          name:userFound.fullName
  
      }
  
  
      const token = await generatetoken(payload)
  
      return response.status(200).json({
          mensaje:'ya se logro crear tu usuario :)... quieres empanada 🥟? es q estas muy desnutrido',
          tokenGenerado: token //mala practica... pero ni modo
      })
  
  
    } catch (error) {
  
      return response.status(400).json({
          mensaje:'hubo un error al iniciar la sesion',
          error: error.message || error
      })
    }
  };
  
  
  
  
  export default loginUsers; //se exporta el nombre de la funcion dada 