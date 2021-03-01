import Link from 'next/link'

const Header = () => (
  <nav className="navbar navbar-toggleable-md navbar-light scrolling-navbar">
  
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="http://familyinnhotel.com">
              <img src="/img/logo.png" className="d-inline-block align-top z-depth-0 logo-nav" alt="Family Inn Hotel" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav1">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/">Home </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/about">Tentang Kami</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/layanan">Layanan</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/gallery">Galeri</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/kontak">Kontak</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link link-header-app" href="/kamar-hotel">Reservasi</Link>
                  </li>
              </ul>
      
          <ul className="nav navbar-nav navbar-right social">
              <li><a href="https://www.facebook.com/HotelFamilyInn/" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/familyinnhotel/" target="_blank"><i className="fa fa-instagram"></i></a></li>
          </ul>
      
          </div>
     
  </nav>    
)

export default Header