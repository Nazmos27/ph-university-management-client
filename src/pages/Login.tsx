import { Button } from "antd"
import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { useAppDispatch } from "../redux/features/hooks"
import { setUser, TUser } from "../redux/features/auth/authSlice"
import { verifyToken } from "../utils/verifyToken"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"



const Login = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm({
    defaultValues : {
      id : '0001',
      password : 'admin123@3.14'
    }
  })

  const [ login] = useLoginMutation()
  
  const onSubmit = async (data : FieldValues) => {
    const toastId = toast.loading("User Logging in....")
    try {
      const userInfo = {
        id : data.id,
        password : data.password
      }
      const res = await login(userInfo).unwrap()
      const user = verifyToken(res.data.accessToken) as TUser
      dispatch(setUser({ user : user, token : res.data.accessToken}))
      toast.success("Logged in successfully!", {id : toastId})
      navigate(`/${user.role}/dashboard`)
    } catch (error) {
      toast.error("Something went wrong", {id : toastId})
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID : </label>
        <input type="text" id="id" {...register('id')}></input>
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="text" id="password" {...register('password')}></input>
      </div>
      <Button htmlType="submit">Log in</Button>
    </form>
  )
}

export default Login