import React, { createContext, useState, useEffect } from "react"

export const CartContext = createContext();

export const CartProvider = ({ childer }) => {
    
}

return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, clear }}>
        {children}
    </CartContext.Provider>
)