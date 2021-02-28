import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function About() {
  const title = 'Tentang Kami'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-abouts" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div>
        {/*Main container*/}
        <div className="container">
          <div className="row paddingt20">
            <div className="col-sm-12 text-center"><img src="/img/tentang kami family inn.png" width={240} alt="About Family Inn Hotel" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
              <p /><a title="Kamar Hotel" href="https://familyinnhotel.com/kamar-hotel">Hotel Family Inn</a>&nbsp;adalah sebuah penginapan modern dengan fasilitas lengkap. Kami menawarkan sebuah pengalaman penginapan yang menarik dan bisa menjadi pilihan untuk anda yang sedang dalam perjalanan atau liburan.<p />
              <p>Saat ini kami memiliki 35 kamar yang terbagi kepada 4 tipe kamar. Adapun tipe kamar kami adalah Executive room, family suite room, deluxe room &amp; Superior</p>
            </div>
            <div className="col-sm-4">
              {/* Nav tabs */}
              {/* Tab panels */}
              {/*Panel 1*/}
              <div className="card-block">
                <br /><h3>Visi:</h3>
                <p><i className="fa fa-quote-left" /> Menjadi salah satu hotel modern terbaik di Indonesia dan menyetarai hotel berbintang</p>
              </div>
              {/*/.Panel 1*/}
            </div>
            <div className="col-sm-8">
              {/*Panel 2*/}
              <div className="card-block">
                <br />
                <h3>Misi:</h3>
                <p> 1. Kenyamanan anda adalah fokus utama kami</p>
                <p> 2. Menerapkan standar hotel berbintang untuk memaksimalkan pelayanan kami </p>
                <p> 3. Memiliki staff yang berkompetensi dan professional</p>
              </div>
              {/*/.Panel 2*/}
              {/*Panel 3*/}
            </div>
          </div>
        </div><hr />
        <div className="container-fluid paddingt20">
          <div className="text-center">
            <h2 className="h2-responsive font-weight-bold wow fadeInUp"><strong> Kenapa di Family Inn?</strong></h2><br /></div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card pricing-card wow fadeInUp" data-wow-delay="0.4s">
                {/*Price*/}
                <div className="price danger-color text-white card-block">
                  <h3><i className="fa fa-bookmark-o" aria-hidden="true" /> Fasilitas Lengkap</h3>
                </div>
                {/*/.Price*/}
                {/*Features*/}
                <div className="card-block">
                  <p>Kami menyediakan berbagai macam bentuk pelayanan dan jasa, mulai dari kelengkapan fasilitas &amp; pelayanan hotel yang memiliki standar, ruang untuk resepsi pernikahan, ruangan meeting, katering, jasa tour &amp; travel, sewa mobil, bus, pengiriman barang &amp; restoran. </p>
                </div>
                {/*/.Features*/}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card pricing-card wow fadeInUp" data-wow-delay="0.4s">
                {/*Price*/}
                <div className="price warning-color text-white card-block">
                  <h3><i className="fa fa-bookmark-o" aria-hidden="true" /> Lokasi Yang Strategis</h3>
                </div>
                {/*/.Price*/}
                {/*Features*/}
                <div className="card-block">
                  <p>Berlokasi di pusat kota Bangko, yang dapat memudahkan anda untuk melakukan berbagai hal dengan mudah seperti acara atau event, meeting, bisnis, pertemuan resmi, wisata kuliner dan masih banyak hal lainnya yang bisa anda lakukan. Selain itu jika anda sedang dalam perjalanan melalui jalan lintas Sumatera, Hotel Family Inn sangat cocok sebagai persinggahan atau tempat istirahat anda karena hotel kami berada dijalan utama lintas Sumatera</p>
                </div>
                {/*/.Features*/}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card pricing-card wow fadeInUp" data-wow-delay="0.4s">
                {/*Price*/}
                <div className="price success-color text-white card-block">
                  <h3><i className="fa fa-bookmark-o" aria-hidden="true" /> Pelayanan Terbaik</h3>
                </div>
                {/*/.Price*/}
                {/*Features*/}
                <div className="card-block">
                  <p>Hotel Family Inn memiliki karyawan yang sangat berkompetensi, attitude yang baik, serta memenuhi standar pelayanan Hospitality Industri. Dengan Tim yang solid kami membangun kepercayaan dan integritas untuk&nbsp;dapat melayani tamu kami sepenuh hati.&nbsp;</p>
                </div>
                {/*/.Features*/}
              </div>
            </div>
          </div>
          <hr />
          {/*Section: Our Groups*/}
          <section id="our-group">
            <div className="text-center">
              <p /><h2 className="h2-responsive font-weight-bold wow fadeInUp">Family Raya Group</h2><p>
              </p><p>Family Inn merupakan salah satu anak perusahaan dari Family Raya Group. PT Family Raya Ceria Sejati (FRC) adalah sebuah perusahaan jasa yang bergerak dalam bidang transportasi darat yang menyediakan berbagai macam bus dengan kualitas terbaik untuk memenuhi kebutuhan transportasi diwilayah Sumatera &amp; Jawa.</p>
              <p>Family Raya Juga memiliki anak perusahaan lain yang bergerak diberbagai bidang. Antara lain yaitu kargo , executive coach &amp; travel, termasuk juga Hotel &amp; Restoran Family Inn.</p><p>
              </p><div className="row">
                {/*Carousel Wrapper*/}
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  {/*First slide*/}
                  <div className="row carousel-item active">
                    <div className="col-md-3">
                      {/*Card*/}
                      <div className="group-carousel">
                        {/*Logo*/}
                        <div className="avatar"><a href="http://familyraya.com"><img src="/img/group/logo-fr-300x100.png" className="grayscale img-responsive" /></a>
                        </div>
                        <div className="card-block">
                          {/*Category*/}
                          <p>Bus Transportation</p>
                        </div>
                      </div>
                      {/*/.Card*/}
                    </div>
                    <div className="col-md-3">
                      {/*Card*/}
                      <div className="group-carousel">
                        {/*Logo*/}
                        <div className="avatar"><a href="http://familycargo.com"><img src="/img/group/logo-fc-300x100.png" className="grayscale img-responsive" /></a>
                        </div>
                        <div className="card-block">
                          {/*Category*/}
                          <p>Cargo &amp; Shipping</p>
                        </div>
                      </div>
                      {/*/.Card*/}
                    </div>
                    <div className="col-md-3">
                      {/*Card*/}
                      <div className="group-carousel">
                        {/*Logo*/}
                        <div className="avatar"><a href="http://familyexecutive.co.id"><img src="/img/group/logo-fe-300x100.png" className="grayscale img-responsive" /></a>
                        </div>
                        <div className="card-block">
                          {/*Category*/}
                          <p>Executive Coach &amp; Travel</p>
                        </div>
                      </div>
                      {/*/.Card*/}
                    </div>					
                    <div className="col-md-3">
                      {/*Card*/}
                      <div className="group-carousel">
                        {/*Logo*/}
                        <div className="avatar"><a href="https://familyinnhotel.com"><img src="/img/group/logo-fi-300x100.png" className="grayscale img-responsive" /></a><a>
                          </a></div><a>
                          <div className="card-block">
                            {/*Category*/}
                            <p>Hotel &amp; Restaurant</p>
                          </div>
                        </a></div><a>
                        {/*/.Card*/}
                      </a></div><a>
                    </a></div><a>
                    {/*/.First slide*/}
                  </a></div><a>
                  {/*/.Slides*/}
                </a></div><a>
                {/*/.Carousel Wrapper*/}
              </a></div><a>
            </a></section><a>
          </a></div><a> 
          {/*/Main container*/}
        </a></div>
    )
};
