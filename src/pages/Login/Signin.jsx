import React, { useContext } from 'react'
import { TwitterIcon } from '../../assets/images/Icons'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Context } from '../../context/Context'
function Signin() {
  const { setToken } = useContext(Context)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value,
      password: e.target.password.value
    }
    e.target.reset()
    setToken(data)
  }
  return (
    <form onSubmit={handleSubmitLogin} autoComplete='off' className='w-[450px] mx-auto mt-[60px]'>
      <Link className='mb-[36px] inline-block' to={'/'}><TwitterIcon /></Link>
      <h1 className='text-[42px] font-black mb-[36px]'>Log in to Twitter</h1>
      <Input isRequired={true} placeholder={'Phone number, email address'} type={'text'} name={'login'} extraClass={'mb-[25px]'} />
      <Input isRequired={true} placeholder={'Password'} type={'password'} name={'password'} extraClass={'mb-[25px]'} />
      <Button title={'Login'} type={'submit'} />
      <div className='flex items-center justify-between mt-[40px]'>
        <Link className='text-[18px] text-[#1DA1F2]' to={'/sign-up'}>Forgot password?</Link>
        <Link className='text-[18px] text-[#1DA1F2]' to={'/sign-up'}>Sign up to Twitter</Link>
      </div>
    </form>
  )
}

export default Signin
