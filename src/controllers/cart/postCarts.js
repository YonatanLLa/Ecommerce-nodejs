import Cart from "../../models/Cart.js"
import { jwtUser } from "../../libs/jwtUser.js";

export const postCarts = async (req, res) => {
    const { productId } = req.params
    console.log(req.body);
    const { quantity } = req.body
    console.log(quantity, "holaa");
    
    const token = req.headers.authorization;
    // id del usuario
    const userId = jwtUser(token)
    
     try {
        let userCart = await Cart.findOne({user: userId})

        if (!userCart) {
            userCart = new Cart({user: userId, items: []})
        }

        const existingItem = userCart.items
                            .find(item => item.product.toString() === productId)

        if (existingItem) {    
            console.log(existingItem);
            if (quantity === undefined) {
                
                existingItem.quantity += 1 
            }  else {
                existingItem.quantity += quantity
            }

        } else {
            userCart.items.push({product: productId, quantity})
        }

        const carrito = await userCart.save()

        res.status(200).json(carrito)

    } catch (error) {
         return res.status(400).json({error: error.message})
     }

}