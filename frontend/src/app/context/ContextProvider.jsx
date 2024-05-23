import { useState } from "react";
import { ShopContext, UserContext, AdminContext } from "./Context";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [cart, setCart] = useState('');
    const [orders, setOrders] = useState('');
    return (
        <UserContext.Provider value={{user, setUser, cart, setCart, orders, setOrders}}>
            <>{children}</>
        </UserContext.Provider>
    );
};

export const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState('');
    const [searchedProducts, setSearchedProducts] = useState(''); 
    return (
        <ShopContext.Provider value={{products, setProducts, searchedProducts, setSearchedProducts}}>
            <>{children}</>        
        </ShopContext.Provider>
    );
};
