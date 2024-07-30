"use client"
import { LoginFormValidation } from "@/lib/validations"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomInput from "./CustomInput"
import Button from "./Button"
import Error from "./Error"
import { useRouter } from "next/navigation"
const LoginForm = () => {
  const router = useRouter()
  const Form = FormProvider

  const form = useForm({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form
  const onSubmit = (data) => router.push("/movies")

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            error={errors.email}
            type="email"
          />
          <Error error={errors.email?.message} />
          <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            error={errors.password}
            type="password"
            style={"mt-6"}
          />
          <Error error={errors.password?.message} />
        </div>

        <div className="flex items-center justify-center my-6">
          <input
            className="rounded-sm  custom-checkbox"
            type="checkbox"
            id="check"
          />
          <label
            htmlFor="check"
            className="ml-2 text-sm text-white text-bodySmall "
          >
            Remember me
          </label>
        </div>

        <Button variant="primary" type="submit" size="large">
          Login
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
