import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Here you would fetch and return the user
const useUser = () => ({ user: "hello", loading: false})

export default function Page() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/index')
    }
  }, [user, loading])

  return (
    <>
      <div>
        <form action="/api/hello" method="POST">
          <input type="text" name="username" placeholder="username" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}