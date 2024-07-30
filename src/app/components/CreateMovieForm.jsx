"use client"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomInput from "./CustomInput"
import { useRouter } from "next/navigation"

import Button from "./Button"
import Error from "./Error"
import { CreateMovieFormValidation } from "@/lib/validations"
import { moviesList } from "@/data/moviesList"
const CreateMovieForm = ({ setOnClick }) => {
  const router = useRouter()
  const Form = FormProvider

  const form = useForm({
    resolver: zodResolver(CreateMovieFormValidation),
    defaultValues: {
      title: "",
      year: "",
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form

  const onSubmit = (data) => {
    moviesList.push(data)
    setOnClick(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[362px]">
        <div className="mt-4 xl:mt-0">
          <CustomInput
            name="title"
            control={control}
            placeholder="Title"
            error={errors.title}
            type="text"
          />
          <Error error={errors.title?.message} />
          <CustomInput
            name="year"
            control={control}
            placeholder="Publishing year"
            error={errors.year}
            type="text"
            style={"mt-6 w-1/2"}
          />
          <Error error={errors.year?.message} />
        </div>
        <div className="flex gap-3 mt-16 mb-6 ">
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateMovieForm
