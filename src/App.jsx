
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "./reducers/user/userSlice";

export const  App =() => {
  
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user); 
  return (
   
      <div>
      <h1> Hello, world!</h1>
      <p> This is a simple react app  email {email}</p>
      <button className="btn-btn-primary"
      onClick={ ()=>{
        dispatch(setUser({
          email: "prueba@gmail.com",
          fullname: "Noelia",
          token: "123456"
        }))
      }}
      > Cambiar User </button>
    </div>
  )
}


