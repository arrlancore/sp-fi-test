const Footer = () => {

    function scrollToTop() {
        let verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        let element = $('body');
        let offset = element.offset();
        let offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
        }

    return (
    <footer className="page-footer center-on-small-only">
      <div className="container-fluid">
          <div className="row">
  
              <div className="col-md-2 offset-md-1">
                  <h5 className="title">Site</h5>
                 <ul>
                      <li><a href="http://familyinnhotel.com/about">Tentang Kami</a></li>
                      <li><a href="http://familyinnhotel.com/kontak">Hubungi Kami</a></li>
                      <li><a href="http://familyinnhotel.com/bantuan">FAQ</a></li>
                      <li><a href="http://familyinnhotel.com/kamar-hotel">Harga</a></li>
                  </ul>
        </div>
  
              <hr className="hidden-md-up" />
  
              <div className="col-md-2">
                  <br />
                  <ul>
                      <li><a href="#!">Blog</a></li>
                      <li><a href="http://familyinnhotel.com/privasi">Privasi</a></li>
                      <li><a href="http://familyinnhotel.com/konfirm">Konfirmasi Pembayaran</a></li>
                      <li><a href="http://familyinnhotel.com/kontak">Kerja Sama</a></li>
                  </ul>
              </div>
  
              <hr className="hidden-md-up" />
  
              <div className="col-md-3">
                  <h5 className="title">HOTEL FAMILY INN</h5>
                  <ul>
                      <li><a className="btn-floating btn-small"><i className="fa fa-map-marker" style={{color:'#339933'}}></i></a>
                          Jl. Jend. Sudirman KM.2 Merangin, Bangko, Jambi
                      </li>
  
                      <li><a className="btn-floating btn-small" data-toggle="modal" data-target="#contact-form"><i className="fa fa-phone" style={{color:'#339933'}}></i></a>
                          (0746)21777 atau 0822 8520  0054
                      </li>
  
                      <li><a className="btn-floating btn-small" data-toggle="modal" data-target="#contact-form"><i className="fa fa-envelope" style={{color:'#339933'}}></i></a>
                          <a href="mailto:reservation@familyinnhotel.com?Subject=Reservasi%20hotel" target="_top">reservation@familyinnhotel.com</a>
                      </li>
                  </ul>
              </div>
  
              <hr className="hidden-md-up" />
  
              <div className="col-md-3">
                  <div className="langganan"><p>Dapatkan Promo & Penawaran menarik Melalui email</p></div>
  
  
  <div id="mc_embed_signup">
  <form action="//banjarwangi.us14.list-manage.com/subscribe/post?u=42c2138fcdaf484388b120c84&amp;id=828c28a95e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
    
        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Masukan Alamat Email" required />
        <div style={{position: 'absolute', left: -5000 }} aria-hidden="true"><input type="text" name="b_42c2138fcdaf484388b120c84_828c28a95e" tabIndex="-1" /></div>
        <div className="clear">
            <button type="submit" value="Daftar" name="subscribe" id="mc-embedded-subscribe" className="btn innbtn">Daftar</button>
        </div>
    </div>
  </form>
  </div>
  
      <p>atau bergabung bersama kami di <a href="https://www.facebook.com/HotelFamilyInn/" target="_blank">facebook</a> dan <a href="https://www.instagram.com/familyinnhotel/" target="_blank">instagram</a></p>
              </div>
  
          </div>
      </div>
  
     
  
      <div className="foot-copyright text-center">
          <div className="container-fluid">
           &copy {new Date().getFullYear()} Copyright <strong>Family Inn.</strong> All Right Reserved  <i onClick={scrollToTop} className="fa fa-2x fa-arrow-circle-up go-up"></i>
      
      
      
  
          </div>
      </div>
  
  
  </footer>    
    )
}

export default Footer