import { useEffect } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div>
        <div className="view hm-black-light" style={{ minHeight: "calc(100vh - 90px)" }}>
          <div className="full-bg-img flex-center">
            <div className="container">
              <div className="row" id="home">
                {/*First column*/}
                <div className="col-lg-12">
                  <div className="description">
                    <h2 className="text-center ontitle wow fadeInDown font-weight-bold"><strong>NYAMAN DAN ELEGAN</strong></h2>
                    <p className="text-center wow bounceIn">Family Inn hadir Dengan pelayanan hotel berbintang</p>
                    <br />
                    <div className="text-center">
                      <a href="http://familyinnhotel.com/kamar-hotel"> <button className="btn btn-lg btn-outline-white waves-effect waves-light wow fadeInUp" data-wow-delay="0.6s"><i className="fa fa-search" /> Lihat Kamar</button></a>
                    </div>
                  </div>
                </div>
                {/*/.First column*/}
              </div>
            </div>
          </div>
        </div>
        {/*/.Mask*/}
        {/*Main container*/}
        <div className="container-fluid">
          <div className="row">
            {/*Hotel columnn*/}
            <section id="hotel-short-desc">
              <div className="col-sm-6 nopadding text-center opa90 fill"><div className="card-block">
                  <h2 className="ontitle wow fadeInDown" data-wow-delay="0.2s">The Hotels</h2>
                  <span className="figure-img">
                    <img alt="decor-small1" src="/img/decor-small-green.png" />
                  </span>
                  <p>Hotel Family Inn adalah sebuah penginapan modern dengan fasilitas lengkap. Kami menawarkan sebuah pengalaman penginapan yang menarik dan bisa menjadi pilihan untuk anda yang sedang dalam perjalanan atau liburan.</p>    
                  <p>Saat ini kami memiliki 35 kamar yang terbagi kepada 4 tipe kamar. Adapun tipe kamar kami adalah Executive room, family suite room, deluxe room &amp; superior room.</p>
                  <a href="http://familyinnhotel.com/about">  <button type="button" className="btn innbtn">Selengkapnya</button></a>
                </div></div>
            </section>
            {/*/Hotel columnn*/}
            {/*Resto columnn*/}
            <section id="resto-short-desc">
              <div className="col-sm-6 pull-right nopadding text-center opa90 fill"><div className="card-block">
                  <h2 className="ontitle wow fadeInDown" data-wow-delay="0.2s">The Restaurant</h2>
                  <span className="figure-img">
                    <img alt="decor-small1" src="/img/decor-small-green.png" />
                  </span>
                  <p>Restoran  Family Inn adalah restoran masakan padang yang kami hadirkan untuk memenuhi kebutuhan makanan dan minuman anda selama berada di kota Bangko.</p>
                  <p>Selain itu kami juga menerima berbagai macam pesanan seperti katering, resepsi pernikahan, dan juga tersedia untuk acara-acara lainnya</p>
                  <a href="http://familyinnhotel.com/restoran">  <button type="button" className="btn innbtn">Selengkapnya</button></a>
                </div></div>
            </section>
            {/*/Resto columnn*/}
          </div>
          <div className="row">
            <section id="main-content">
              <div className="card-block text-center">
                <h2 className="ontitle wow fadeInDown" data-wow-delay="0.6s">Fasilitas</h2>
                <span className="figure-img">
                  <img alt="decor-small1" src="/img/decor-small-green.png" />
                </span>
                <div className="row in-center wow fadeInUp" data-wow-delay="0.6s">
                  {/*First columnn*/}
                  <div className="col-md-4">
                    {/*Tablet*/}			
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody><tr>
                            <td><img alt="24 hour ico" height={64} width={64} src="/img/ico/24-hour.png" /></td>
                            <td>24 Jam Pelayanan &amp; Keamanan</td>
                          </tr>
                          <tr>
                            <td><img alt="Free WiFi ico" height={64} width={64} src="/img/ico/ico-free-wifi.png" /></td>
                            <td>Free WiFi di kamar, lobby &amp; Restoran</td>
                          </tr>
                          <tr>
                            <td><img alt="Sarapan ico" height={64} width={64} src="/img/ico/ico-breakfast.png" /></td>
                            <td>Sarapan Gratis</td>
                          </tr>
                          <tr>
                            <td><img alt="Full AC ico" height={64} width={64} src="/img/ico/ico-AC.png" /></td>
                            <td>Full AC Diseluruh ruangan</td>
                          </tr>
                          <tr>
                            <td><img alt="Air Panas ico" height={64} width={64} src="/img/ico/ico-hot-water.png" /></td>
                            <td>Tersedia Air Panas</td>
                          </tr>
                          <tr>
                            <td><img alt="Ruang meeting ico" height={64} width={64} src="/img/ico/ico-meeting-event.png" /></td>
                            <td>Ruang Meeting atau Acara</td>
                          </tr>
                        </tbody></table>
                    </div>
                    {/*/.Table*/}
                  </div>
                  {/*First columnn*/}
                  {/*Second column*/}
                  <div className="col-md-4">
                    {/*Tablet*/}			
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody><tr>
                            <td><img alt="Tempat Tidur ico" height={64} width={64} src="/img/ico/ico-clean-bed.png" /></td>
                            <td>Tempat Tidur yang Nyaman &amp; Bersih</td>
                          </tr>
                          <tr>
                            <td><img alt="Laundry ico" height={64} width={64} src="/img/ico/ico-laundry.png" /></td>
                            <td>Laundry Express</td>
                          </tr>
                          <tr>
                            <td><img alt="Restoran ico" height={64} width={64} src="/img/ico/ico-resto.png" /></td>
                            <td>Restoran Masakan Padang</td>
                          </tr>
                          <tr>
                            <td><img alt="Tour & Travel ico" height={64} width={64} src="/img/ico/ico-tour-travel.png" /></td>
                            <td>Jasa Tour &amp; Travel</td>
                          </tr>
                          <tr>
                            <td><img alt="TV ico" height={64} width={64} src="/img/ico/ico-tv.png" /></td>
                            <td>TV Kabel</td>
                          </tr>
                          <tr>
                            <td><img alt="Drink ico" height={64} width={64} src="/img/ico/ico-welcomedrink.png" /></td>
                            <td>Welcome Drink</td>
                          </tr>
                        </tbody></table>
                    </div>
                    {/*/.Table*/}
                  </div>
                  {/*/Second column*/}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/*Section: Testimonials*/}
            <section id="testimonials">
              <div className="card-block text-center">
                <h2 className="ontitle wow fadeInDown" data-wow-delay="0.6s">Testimonials</h2>
                <span className="figure-img">
                  <img alt="decor-small1" src="/img/decor-small-green.png" />
                </span>
                <div className="row">
                  {/*Carousel Wrapper*/}
                  <div id="multi-item-example" className="carousel slide carousel-multi-item wow fadeIn" data-ride="carousel">
                    {/*Controls
                  <div class="controls-top">
                      <a class="btn-floating btn-small mdb-color" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                      <a class="btn-floating btn-small mdb-color" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                  </div>
                  /.Controls*/}
                    {/*Slides*/}
                    <div className="carousel-inner" role="listbox">
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="col-md-4">
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> Hotel yg bagus di Bangko</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (2).JPG" className="img-circle" />
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Amin History</h4>
                            <small>Enterpreneur</small>
                          </div>
                          {/*/.Card*/}
                        </div>
                        <div className="col-md-4 hidden-sm-down">
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> One of the best and affordable hotels in Bangko, padang restaurant next door</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (1).jpg" className="img-circle" />
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Bas van Helvoort</h4>
                            <small>Traveller</small>
                          </div>
                          {/*/.Card*/}
                          {/*/.Card*/}
                        </div>
                        <div className="col-md-4 hidden-sm-down">
                          {/*Card*/}
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> Tempatnya bersih dan nyaman makanan enak</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (3).jpg" className="img-circle" />                                    
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Marvel alvino</h4>
                            <small>Mahasiswa</small>
                          </div>
                          {/*/.Card*/}
                          {/*/.Card*/}
                        </div>
                      </div>
                      {/*/.First slide*/}
                      {/* The second slide */}
                      <div className="carousel-item">
                        <div className="col-md-4">
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> Family Inn Hotel dan Restoran Family ... Two In One</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (4).jpg" className="img-circle" />
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Teddy Aurora</h4>
                            <small>Executive Director</small>
                          </div>
                          {/*/.Card*/}
                        </div>
                        <div className="col-md-4 hidden-sm-down">
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> Menyenangkan</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (5).jpg" className="img-circle" />
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Yuli Saputra</h4>
                            <small>Contractor</small>
                          </div>
                          {/*/.Card*/}
                          {/*/.Card*/}
                        </div>
                        <div className="col-md-4 hidden-sm-down">
                          {/*Card*/}
                          {/*Card*/}
                          <div className="card-block testimoni">
                            {/*Bacground color*/}
                            <div className="card-up green darken-2">
                            </div>
                            {/*Quotation*/}
                            <p><i className="fa fa-quote-left" /> Tempat bagus dan bersih utk istirahat' d lintas Sumatera</p>
                            <hr />
                            {/*Avatar*/}
                            <div className="avatar"><img src="/img/testi/review (6).jpg" className="img-circle" />                                    
                            </div>
                            {/*Name*/}
                            <h4 className="card-title">Dandi Taufiq</h4>
                            <small>Enterpreneur</small>
                          </div>
                          {/*/.Card*/}
                          {/*/.Card*/}
                        </div>
                      </div>
                    </div>
                    {/*/.Slides*/}
                    {/*Indicators*/}
                    <br /><br /><ol className="carousel-indicators">
                      <li data-target="#multi-item-example" data-slide-to={0} className="active" />
                      <li data-target="#multi-item-example" data-slide-to={1} />
                    </ol>
                    {/*/.Indicators*/}
                  </div>
                  {/*/.Carousel Wrapper*/}
                </div>
                <p><small>Lihat testimoni lebih lengkap di&nbsp;<a href="https://www.google.com/maps/place/FAMILY+INN+HOTEL/@-2.0588772,102.2732976,15z/data=!4m7!3m6!1s0x0:0xfa66737b4b69aa5!8m2!3d-2.0588772!4d102.2732976!9m1!1b1" target="_blank">Google Review</a></small></p>
              </div>
            </section>
          </div>
          {/*/Section: Testimonials*/}
          {/*Section: lokasi*/}
        </div>
        <div className="container-fluid">
          <section id="lokasi">
            <div className="row">
              {/*First column*/}
              <div className="col-md-6">
              <div style={{width: '100%'}}><iframe width="100%" height={320} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=family%20inn%20bangko+(Hotel%20Family%20Inn)&t=&z=16&ie=UTF8&iwloc=B&output=embed" /><a href="https://www.maps.ie/route-planner.htm">Journey Planner</a></div>
              </div>
              {/*/First column*/}
              {/*Second column*/}
              <div className="col-md-6">
                <div className="card-block text-center">
                  <h2 className="ontitle wow fadeInDown">Lokasi Kami</h2>
                  <span className="figure-img">
                    <img alt="decor-small1" src="/img/decor-small-green.png" />
                  </span>
                  <p>Hotel Family Inn terletak di pusat kota Bangko, tepatnya berada di depan kantor Bupati Kabupaten Merangin.</p>
                  <p>Kota Bangko dapat ditempuh dari Kota Jambi dengan jarak tempuh kurang lebih 260km dan dari Kerinci sekitar 170km.</p>
                  <p>Anda juga bisa mengunjungi beberapa tempat wisata seperti Taman Bumi Geopark, Cagar Alam Gua Tiangko atau Air Terjun Segerincing.</p>
                </div>
                {/*/Second column*/}
              </div>
            </div></section>
        </div>
      </div>
    );
};
