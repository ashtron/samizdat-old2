import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ borderBottom: "1px solid black" }}>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/" className="navbar-item">
              Home
            </Link>

            <Link href="/book" className="navbar-item">
              Add Book
            </Link>

            <Link href="/books" className="navbar-item">
              My Books
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}