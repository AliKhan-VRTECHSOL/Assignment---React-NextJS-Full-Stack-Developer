const Error = ({ error }) => {
  return error ? (
    <p className="text-bodyExtraSmall text-error flex- w-full">{error}</p>
  ) : null
}

export default Error
