import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Privasi() {
  const title = 'Kebijakan Privasi'

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
        <div className="row paddingt20">
          <p>Data Informasi pelanggan merupakan aset paling penting bagi perusahaan kami sehingga butuh perlindungan khusus. Informasi dapat berupa berbagai bentuk, oleh karena itu metode perlindungan informasi tersebut beragam.</p>
          <p>Adapun data yang kami butuhkan dan kami kelola adalah&nbsp;nama, alamat, nomor telepon, nomor kartu kredit dan alamat email.</p>
          <p>Berikut adalah prinsip-prinsip kebijakan privasi yang kami terapkan untuk perusahaan kami yang sesuai dengan kode etik bisnis.</p>
          <ol>
            <li>Data digunakan untuk meng-identifikasi kebenaran data pribadi pemesan kamar atau layanan hotel lainnya.</li>
            <li>Data digunakan untuk mengirimkan tagihan secara online.</li>
            <li>Melakukan organisir atau mengelola data pribadi dengan cara yang legal.</li>
            <li>Data pelanggan tidak akan diberikan ke pihak ketiga kecuali dengan persetujuan dari pelanggan tersebut</li>
            <li>Data disimpan kedalam sistem kami dengan standar sistem keamanan IT dan enkripsi.</li>
            <li>Dalam upaya perlindungan data informasi pribadi, kami akan mengikuti peraturan undang-undang nasional dan internasional dan menyesuaikan dengan manajemen kami.</li>
            <li>Data pribadi digunakan untuk mengenali <em>track record</em> pelanggan kami.</li>
            <li>Kami &nbsp;mengirimkan penawaran menarik melalui email atau telefon.</li>
            <li>Data digunakan untuk mendapatkan tanggapan atau komentar mengenai hotel kami.</li>
            <li>Data digunakan untuk melakukan survey kepuasan pelanggan kami.</li>
          </ol>
          <p>&nbsp;</p>
          <p><strong>Persetujuan</strong></p>
          <p>Bagi pengunjung yang berkunjung ke situs kami dan memesan kamar melalui situs kami, berarti anda telah setuju untuk memberikan data pribadi anda untuk keperluan administrasi perusahaan kami</p>
          <p><strong>Link Menuju Web Lain</strong></p>
          <p>Adapun kami akan memberikan beberapa tautan kesitus lain yang bermanfaat, namun kami tidak memiliki kendali atau tidak bertanggung jawab atas situs lain tersebut.</p>
          <p><strong>Penggunaan Cookie</strong></p>
          <p><em data-reactid=".0.1.2.1.k.0">"Cookie"</em><span data-reactid=".0.1.2.1.k.1"> adalah pengidentifikasi alfanumerik yang kami transfer ke </span><em data-reactid=".0.1.2.1.k.2">hard drive</em><span data-reactid=".0.1.2.1.k.3"> atau kartu memori Anda melalui web </span><em data-reactid=".0.1.2.1.k.4">browser</em><span data-reactid=".0.1.2.1.k.5"> ketika Anda mengunjungi situs kami. Hal ini memungkinkan sistem milik kami sendiri untuk mengenali Anda ketika Anda kembali mengunjungi situs kami dan meningkatkan layanan kami kepada Anda.</span></p>
          <p>***Perusahaan dapat mengubah kebijakan privasi ini dari waktu ke waktu.***</p>
          <p> Update terakhir: 29/2/2017</p>
        </div>
      </div>
    )
};
