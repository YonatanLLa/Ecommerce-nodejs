import Cart from "../../models/cart.js"
import Product from "../../models/product.js"

import { jwtUser } from "../../libs/jwtUser.js";

export const postCarts = async (req, res) => {

    const { productId } = req.params
    const { quantity } = req.body    
    const token = req.headers.authorization;

    const userId = jwtUser(token)
    
     try {
        let userCart = await Cart.findOne({user: userId})

        if (!userCart) {
            userCart = new Cart({user: userId, items: []})
        }

        const existingItem = userCart.items
                            .find(item => item.product.toString() === productId)

        if (existingItem) {    
            if (quantity === undefined) {
                
                existingItem.quantity += 1 
            }  else {
                existingItem.quantity += quantity
            }

        } else {
            userCart.items.push({product: productId, quantity})
        }

        const carrito = await userCart.save();
        // Mapear los items del carrito y obtener los detalles completos

        const itemsWithDetails = await Promise.all(carrito.items.map( async item => {
         
            const product = await Product.findById(item.product);

            return {
                product,
                quantity: item.quantity,
                _id: item._id
            }
        }
        ))

        carrito.items = itemsWithDetails

        res.status(200).json(carrito)



    } catch (error) {
         return res.status(400).json({error: error.message})
     }

}

export const getCart = async (req, res) =>{
    const token = req.headers.authorization;
    // id del usuario
    const userId = jwtUser(token)
    try {
        const userCart = await Cart.findOne({ user: userId })
        console.log(userCart);

        const cartAll = await Promise.all(userCart.items.map( async item =>{
            const product = await Product.findById(item.product)

            return {
                product,
                quantity: product.quantity,
                _id: product._id
            }
        } ))

        userCart.items = cartAll
        
        res.status(200).json(userCart)

    } catch (error) {
        
    }

}