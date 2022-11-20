export default function BookForm() {
  return (
    <div className="panel" style={{ width: "65%", margin: "11% auto" }}>
      <p className="panel-heading">
        Add a Book
      </p>

      <div className="fields" style={{ padding: "12px" }}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input className="input" type="text" placeholder="Author" />
          </div>
        </div>

        <div className="field">
          <label className="label">Date Read</label>
          <div className="control">
            <input className="input" type="date" placeholder="Date Read" />
          </div>
        </div>

        <div className="field">
          <label className="label">Cover Image</label>
          <div className="control">
            <input className="input" type="text" placeholder="https://..." />
          </div>
        </div>

        <button className="button is-primary">Add Book</button>
      </div>
    </div>
  )
}