import {createContext, useState} from 'react';

export const GlobalContext = createContext(null)

export default function GlobalState({children}) {

    const [cart, setCart] = useState(0)
    // const [numberOfItems, setNumberOfItems] = useState(0);

    

    const Up  = () => setCart(prev => prev + 1);
    const Down  = () => setCart(prev => prev <= 0 ? 0 : prev - 1);

    return (
        <GlobalContext.Provider  value={{cart, Up , Down}} >
             {children}
        </GlobalContext.Provider >
    )
}