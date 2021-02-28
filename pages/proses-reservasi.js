import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function About() {
  const title = 'Proses Reservasi'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-reservasi" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div className="container">
        <div className="row paddingt20">
          <div className="col-sm-8 card card-block">
            <p>Terimakasih, pesanan anda telah kami terima dan sebuah billing sudah dikirimkan ke alamat email anda. Berikut detail pemesanan anda:</p>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Nomor booking</td>
                    <td>{/*?php echo $_POST["bookno"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Nama Pemesan</td>
                    <td>{/*?php echo $_POST["name"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Tipe Kamar</td>
                    <td>{/*?php echo $_POST["tipe"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Jumlah Kamar</td>
                    <td>{/*?php echo $_POST["jumlah"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Lama Inap</td>
                    <td>{/*? echo $_POST["duration"] . " Malam" ?*/}</td>
                  </tr>
                  <tr>
                    <td>Jumlah Tagihan</td>
                    <td>IDR.{/*?php echo $_POST["harga"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Nomor Tagihan</td>
                    <td>{/*?php echo $_POST["billno"]  ?*/}</td>
                  </tr>
                  <tr>
                    <td>Batas Waktu Pembayaran</td>
                    <td>{/*?php echo $batas;  ?*/}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="alert alert-warning" style={{paddingLeft: '10px', paddingRight: '10px'}}> Harap melakukan pembayaran sebelum batas waktu yang ditentukan. Jika melewati batas waktu pembayaran, pemesanan anda otomatis akan dibatalkan. </div>
            <p>Silahkan melakukan konfirmasi pembayaran untuk memudahkan dan mempercepat kami dalam mem-verifikasi data anda. </p>
            <a href="/konfirm"><button id="konfirm" className="btn innbtn">Konfirmasi Pembayaran</button></a>
          </div>
          <div className="col-sm-4">
            <div className="bank card card-block">
              <p>Silahkan melakukan pembayaran ke rekening dibawah ini:</p>
              <h3>Bank Mandiri</h3>
              <p>No. Rekening: 110.000.7798.025</p>
              <p>Atas nama: Hotel Family Inn</p>
            </div></div>
        </div>
      </div>
    )
};
