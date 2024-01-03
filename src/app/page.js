'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router= useRouter();
  const route=(routeName)=>{
    router.push(routeName)
  }
  return (
      <>
        <h2>Home Landing Page</h2> <br /> <br />
        <Link href='/login'>Login</Link> <br /> <br />
        <button onClick={()=>route('/register')}>Register</button>
      </>
  )
}
