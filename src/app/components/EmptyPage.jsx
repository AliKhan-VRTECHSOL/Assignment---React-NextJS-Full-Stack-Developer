import Button from "./Button"

const EmptyPage = ({ setOnClick }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div>
        <h2 className="text-h2 text-white font-semibold">
          Your movie list is empty
        </h2>
        <div className="mt-10 flex justify-center">
          <Button variant="primary" onClick={() => setOnClick(true)}>
            Add a new movie
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmptyPage
