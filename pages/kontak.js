import { useEffect } from 'react';
import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Kontak() {
  const title = 'Konta'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-kontak" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div className="container">
        {/*Kontak Form*/}
        <div className="paddingt20">
        </div>
        <div className="row">
          <div className="col-md-8 card paddingt20">
          <iframe id="JotFormIFrame-210582953236457" title="Kontak Form Family Status" onload="window.parent.scrollTo(0,0)" allowTransparency="true" allowFullScreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/210582953236457" frameBorder={0} style={{minWidth: '100%', height: '880px', border: 'none'}} scrolling="no"> </iframe>
            {/* <strong><h2>Kirim Pesan</h2></strong>
            <form className="form-horizontal" role="form" method="post" action="kontak">
              <div className="form-input">
                <input type="text" className="form-control wow fadeInUp" data-wow-delay="0.2s" id="name" name="name" placeholder="Nama Lengkap" />
              </div>
              <div className="form-input">
                <input type="text" className="form-control wow fadeInUp" data-wow-delay="0.2s" id="phone" name="phone" placeholder="No Telfon / HP" />
              </div>
              <div className="form-input">
                <input type="email" className="form-control wow fadeInUp" data-wow-delay="0.2s" id="email" name="email" placeholder="Alamat Email"  />
              </div>
              <div className="form-input">
                <textarea className="form-control wow fadeInUp" data-wow-delay="0.2s" rows={4} placeholder="Pesan.." name="message" />
              </div>
              <div className="form-input">
                <input type="text" className="form-control wow fadeInUp" data-wow-delay="0.2s" id="human" name="human" placeholder="Pertanyaan keamanan: 7 - 2 = ?" />
              </div>
              <div className="form-input">
                <input id="submit" name="submit" style={{background: '#339933'}} type="submit" className="btn wow fadeInUp" data-wow-delay="0.3s" />
              </div>
              <div className="form-input">
              </div>
            </form> */}
            </div><div className="col-md-4"><div className="card card-block text-center">  <h4>Kontak Informasi</h4><br />
              <h5><i className="fa fa-phone" style={{color: '#339933'}} /> 0746-21777 <br />atau <br />0822 8520  0054</h5>
              <h5><i className="fa fa-envelope" style={{color: '#339933'}} /> reservation@familyinnhotel.com </h5>
            </div>
          </div>
        </div>
        {/*/Main container*/}
      </div>
    )
};
