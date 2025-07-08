const Loading = () => {
  return (
    <p className="loading_flashing mt-20 w-full text-center">
      <svg className="mr-3 size-5 animate-spin"></svg>
      Fetching meal details...
    </p>
  )
}

export default Loading