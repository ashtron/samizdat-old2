import BookForm from "../components/BookForm"

export default function Book() {
  console.log(process.env.TEST)

  return (
    <>
      <div className="container">
        <BookForm />
      </div>
    </>
  )
}