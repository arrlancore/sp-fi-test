import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import roomData from '../data/rooms.json'
import { useRouter } from 'next/router'
import { formatHarga } from '../utils/formatter';



export default function Reservasi() {
  const title = 'Reservasi'

  const router = useRouter()
  const qr = router.query
  const kamar = roomData[qr.id]
  

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-reservasi" />
      <Content kamar={{...kamar, ...qr}} router={router} />
      <Footer />
    </Layout>
  )
}

const Content = ({kamar, router}) => {

  const total = formatHarga.format((kamar?.harga || 0) * Number(kamar?.totalHari || 0) * Number(kamar?.jumlah || 0))
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = document.forms['submitf']
    if(!form.name.value || !form.phone.value || !form.email.value) {
      alert('Data form belum lengkap')
      return
    }
    confirm('Mohon memastikan bahwa data yang anda masukan sudah benar, jika sudah silahkan klik OK untuk melanjutkan atau Cancel untuk melakukan perubahan.');

    const formValue = {
      nama: form.name?.value,
      phone: form.phone?.value,
      email: form.email?.value,
      note: form.note?.value,
      total,
      ...kamar
    }
    router.push('/proses-reservasi')
  }
    return (
      <div className="container">
        <div className="card card-block reserv">
          {/*Reservasi Form*/}
          <form name="submitf" method="post" onSubmit={handleSubmit}>
            <div style={{paddingBottom: '18px', fontSize : '2rem'}}>Reservasi Online</div>
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody><tr>
                    <td>Tipe Kamar:</td>
                    <td>{kamar?.nama}</td>
                  </tr>
                  <tr>
                    <td>Jumlah Kamar:</td>
                    <td>{kamar?.jumlah} Kamar</td>
                  </tr>
                  <tr>
                    <td>Lama Inap:</td>
                    <td>{kamar?.totalHari} Malam</td>
                  </tr>
                  <tr>
                    <td>Total Biaya:</td>
                    <td>IDR {total}</td>
                  </tr>
                  <tr>
                    <td />
                    <td><small><a href="javascript:history.back(1);">Ubah</a></small></td>
                  </tr>
                </tbody></table>
            </div>
            <h4>Silahkan mengisi data anda dengan benar.</h4>
            <hr />
            <div style={{marginLeft : 0, marginRight : '1%', width : '450px'}}>Nama Lengkap<span style={{color: 'red'}}> *</span><br />
              <input type="name" id="nama" name="name" style={{width: '100%'}} className="form-control" required />
            </div>
            <div style={{paddingBottom: '18px'}}>Telepon/No HP<span style={{color: 'red'}}> *</span><br />
              <input type="tel" id="phone" name="phone" style={{width : '450px'}} className="form-control" required />
            </div>
            <div style={{paddingBottom: '18px'}}>Email<span style={{color: 'red'}}> *</span><br />
              <input type="email" id="email" name="email" style={{width : '450px'}} className="form-control" required />
            </div>
            <div style={{paddingBottom: '18px'}}>Catatan Tambahan<br />
              <textarea id="note" false name="note" style={{width : '450px'}} rows={6} className="form-control" defaultValue={""} />
            </div>
            <p><small>Dengan menekan tombol "LANJUTKAN", berarti saya telah setuju dengan <a target="_blank" href="https://familyinnhotel.com/privasi">kebijakan privasi</a> yang berlaku </small></p><p>
              <button onClick={handleSubmit} type="submit" id="lanjut" className="btn innbtn">Lanjutkan</button>
            </p></form>
        </div>
      </div>
    )
};
