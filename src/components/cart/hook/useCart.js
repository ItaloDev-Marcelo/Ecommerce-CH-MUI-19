
import {useContext, useState} from 'react'
import {GlobalContext} from  '../../../context/index';

export default function useCart() {
   
       const {cart, Delete, show } =  useContext(GlobalContext)
       const [open, setOpen] = useState(false) 
       const Result =  open ? 'block' : 'none';
       let price = 125.00 * cart;
       const flipH01 =  show ? 'auto' : '225px'
    
       const OpenMenu = () => {
           setOpen(prev => !prev)
       }
 
    return {
        OpenMenu ,  
        Result,
        price,
        flipH01
    }
}