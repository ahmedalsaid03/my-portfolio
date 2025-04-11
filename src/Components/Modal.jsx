import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"

const Modal = ({open, children }) => {
    const dialog= useRef();

    useEffect(()=>{
        const modal= dialog.current;
        if(open){modal.showModal();}
        else{modal.close();}

        return ()=>{
            if(modal.open){
                modal.close();
            }
        }
    },[open])
  return createPortal(
    <dialog
      ref={dialog}
      className='bg-transparent max-w-[80%] h-[93%] md:h-[87%] '>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal
