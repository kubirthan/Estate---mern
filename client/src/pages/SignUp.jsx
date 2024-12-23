import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold'>Sign Up</h1>
      <form action="" className='flex p-3 flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='username'/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='username'/>
        <button className='bg-slate-700 p-3 rounded-lg text-white uppercase  hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>  
        </Link>
      </div>
    </div>
  )     
}
