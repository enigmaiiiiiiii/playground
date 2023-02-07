import { useRouter } from 'next/router'

export default function About({ title }) {

  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/')}>
      Click me
    </button>
  )
}