import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link href="/" className="navbar-item">
              Home
            </Link>

            <Link href="/movie" className="navbar-item">
              Add Movie
            </Link>

            <Link href="/book" className="navbar-item">
              Add Book
            </Link>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}