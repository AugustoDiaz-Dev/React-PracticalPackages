import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// This has other many configuration options, check it out in the docs.
// https://fkhadra.github.io/react-toastify/introduction/ 
const CustomToast = ({closeToast}) => {
    return (
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close me!</button>
        </div>
    )
    }
const Toastify = () => {

    const notify = () => {
        toast("Wow so easy!",{ position: toast.POSITION.TOP_LEFT});
        toast.success("Wow so easy!",{ position: toast.POSITION.TOP_CENTER, autoClose: 8000});
        toast.info("Wow so easy!",{ position: toast.POSITION.TOP_RIGHT, autoClose: false});
        toast.error(<CustomToast/>,{ position: toast.POSITION.BOTTOM_LEFT, autoClose: false});
        toast.warn("Wow so easy!",{ position: toast.POSITION.BOTTOM_CENTER});
        toast("Wow so easy!",{ position: toast.POSITION.BOTTOM_RIGHT});
    }
   
  return (
    <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
  </div>
  )
}

export default Toastify