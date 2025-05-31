import {createContext, useState} from 'react';

export const GlobalContext = createContext(null)

export default function GlobalState({children}) {

    const [cart, setCart] = useState(0)
    const [show, setShow] = useState(false);

    const Up  = () => setCart(prev => prev + 1);
    const Down  = () => setCart(prev => prev <= 0 ? 0 : prev - 1);

    const Delete = () => {
        setCart(0)
        setShow(prev => !prev)
    }
    
    const ShowTme = () => setShow(prev => !prev)

    return (
        <GlobalContext.Provider  value={{cart, Up , Down, Delete, ShowTme, show}} >
             {children}
        </GlobalContext.Provider >
    )
}