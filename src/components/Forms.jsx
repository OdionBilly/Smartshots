import React from 'react'
import {motion} from 'motion/react'

export const Forms = ({isVisible, onChange, onSubmit}) => {
  return (
   
    isVisible && 
    <motion.div 
    initial={{y:-100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.5}}
    > 
    

    <>    

    <p className="display-6 text-center mb-3 mt-3">Upload Stock Image</p>
    <motion.div 
    initial={{x: -100, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1.5}}
    exit={{}}

    className="mb-5 d-flex align-items-center justify-content-center ">

      <form className="mb-2" style={{ textAlign: "left" }} onSubmit={onSubmit}>  
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="title"
            aria-describedby="text"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <input type="file" className="form-control" name="file"  onChange={onChange} />
        </div>
        <button
          type="submit"
          className="btn btn-success float-end"
        >
          Save changes
        </button>
      </form>
    </motion.div>
  </>
  </motion.div>
)}

  
