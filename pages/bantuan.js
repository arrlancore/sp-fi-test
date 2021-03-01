import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Bantuan() {
  const title = 'Bantuan'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-bantuan" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div className="container paddingt20">
        <div className="text-center">
          <h2><strong>Pertanyaan umum</strong></h2><br /></div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody><tr>
                    <td>Q:</td>
                    <td>Berapa saluran TV yang dimiliki hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>&nbsp;Kami berlangganan dengan suatu provider TV kabel yang menyediakan kurang lebih 20-30 siaran nasional dan internasional.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>&nbsp;Apakah ada lokasi parkir dekat hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami memiliki area parkir khusus untuk tamu hotel.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah bisa memesan extra bed dalam kamar?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, sesuai syarat dan ketentuan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah tersedia fasilitas keranjang bayi?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami memilikinya.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah mudah untuk mendapatkan taksi dari hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak, taksi dikota bangko sangat sedikit. Silahkan memesan satu jam sebelum keberangkatan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>&nbsp;Apakah ada fasilitas penukaran mata uang asing di hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak, namun kami dapat membantu anda untuk mendapatkan penukaran mata uang.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah boleh membawa binatang peliharaan?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak di izinkan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah anda memiliki dokter dengan permintaan?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak, namun lokasi hotel kami berdekatan dengan klinik pengobatan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Bagaimana cara melakukan reservasi melalui situs familyinnhotel.com?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Klik tombol "Pesan Kamar" pada tipe kamar yang anda inginkan, kemudian mengisi formulir dan melakukan pembayaran.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah aman bila melakukan reservasi melalui website anda?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami menggunakan server yang aman sebagai host transaksi. Semua data anda akan dirahasiakan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Berapa minimum jumlah malam yg harus saya booking?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Satu malam.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah bisa melakukan pembayaran reservasi dengan kartu kredit?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Saat ini belum bisa.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Berapa banyak kamar yg bisa saya pesan dalam satu kali reservasi?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Anda bebas memesan berapa kamar pun.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Bisakah saya mengakses internet di hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, anda dapat mengakses internet dari kamar, lobby, cafe dan restoran secara gratis.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah tersedia jasa housekeeping?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Housekeeping kami ber operasi setiap hari.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>&nbsp;Apakah terdapat business centre di dalam hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami mempunyai ruangan meeting beserta sarana penunjang seperti proyektor, papan tulis dan sound system.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah anda menyediakan jasa transport dari dan menuju airport?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami menyediakan transport ke bandara dengan tambahan biaya.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah aman untuk menginap di hotel Family Inn?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami memiliki security 24 jam, CCTV System dan secure lock di setiap kamar.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>&nbsp;Apakah tersedia jasa laundry?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>&nbsp;Iya, silahkan beritahukan kepada petugas kami jika ada pakaian yang akan di cuci.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>&nbsp;Apakah bebas merokok didalam hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak, kami tidak mengizinkan merokok dikamar hotel. Namun kami menyediakan smoking area.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah terdapat penjualan makanan dan minuman di dalam dan luar hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Ya, kami memiliki restoran yang menjual makanan dan minuman. Disekitar hotel juga terdapat aneka macam makanan.</td>
                  </tr>
                  <tr>
                    <td>Q:</td>
                    <td>Apakah ada kolam renang di hotel?</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">A:</td>
                    <td>Tidak</td>
                  </tr>
                </tbody></table>
            </div>
            {/*/.Table*/}
          </div>
        </div>  
      </div>
    )
};
