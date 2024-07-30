import Button from "./components/Button"
import LoginForm from "./components/LoginForm"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px]">
        <h1 className="text-h1 text-white text-center">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  )
}
