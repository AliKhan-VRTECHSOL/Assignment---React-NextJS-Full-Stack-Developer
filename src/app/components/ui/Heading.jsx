import Image from "next/image"
import AddButton from "../../../../public/assets/addButton.svg"
import LogOutButton from "../../../../public/assets/logoutButton.svg"

const Heading = ({ addMovie, logout, setOnClick, title }) => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-h3 xl:text-h2 text-white font-semibold my-[120px]">
          {title}
        </h1>
        {addMovie && (
          <div onClick={() => setOnClick(true)}>
            <Image
              src={AddButton}
              width={27}
              height={27}
              alt="button"
              className="  xl:mt-2 ml-3 hover:cursor-pointer"
            />
          </div>
        )}
      </div>
      {logout && (
        <div>
          <h6 className="text-bodyRegular font-bold text-white inline-flex">
            Logout
          </h6>
          <Image
            src={LogOutButton}
            width={24}
            height={24}
            alt="button"
            className="inline-flex ml-4 hover:cursor-pointer"
          />
        </div>
      )}
    </>
  )
}

export default Heading
