import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Konfirm() {
  const title = 'Konfirmasi Pembayaran'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-about" />
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
          <iframe id="JotFormIFrame-210589107413452" title="Konfirmasi Pembayaran Form" onload="window.parent.scrollTo(0,0)" allowTransparency="true" allowFullScreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/210589107413452" frameBorder={0} style={{minWidth: '100%', height: '1400px', border: 'none'}} scrolling="no">
      </iframe>
            </div>
        </div>
      </div>
    )
};
