import React from "react"
import Heading from "./ui/Heading"
import Image from "next/image"
import Upload from "../../../public/assets/upload.svg"
import CreateMovieForm from "./CreateMovieForm"

const CreateMovie = ({ setOnClick }) => {
  return (
    <div className="px-6 xl:px-[120px]">
      <div className="flex justify-between items-center">
        <Heading title={"Create a new movie "} />
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[473px] h-[504px] border-2 border-dotted rounded-[10px] bg-inputColor flex justify-center items-center flex-col">
          <Image
            src={Upload}
            width={16}
            height={16}
            alt="upload"
            className="hover:cursor-pointer"
          />
          <p className="text-bodySmall mt-2 block text-white">
            Drop an image here
          </p>
        </div>
        <div className="flex xl:ml-[127px]">
          <CreateMovieForm setOnClick={setOnClick} />
        </div>
      </div>
    </div>
  )
}

export default CreateMovie
