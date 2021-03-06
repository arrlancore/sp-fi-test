import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import BannerImage from '../../components/Banner';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import roomData from '../../data/rooms.json'
import { formatHarga } from '../../utils/formatter';


export default function Kamar() {
  const router = useRouter()
  const { kamarid } = router.query
  
  const kamar = roomData[kamarid]
  const classBanner = {
    executive: 'header-executive',
    family: 'header-family',
    deluxe: 'header-deluxe',
    vipDeluxe: 'header-deluxe',
    superior: 'header-superior',
  }
  
  useEffect(() => {
    if (kamarid && !kamar) {
      router.push('/404')
    }
  }, [])
  
  const title = `Kamar ${kamar?.nama}`
  return (
    <Layout metaTitle={title}>
      <Head>
        <link href="/css/pikaday.min.css" rel="stylesheet" type="text/css" />
        <script src="/js/pikaday.min.js" type="text/javascript"></script>
        <script src="/js/moment.min.js" type="text/javascript"></script>
      </Head>
      <Header />
      <BannerImage title={title} classBanner={classBanner[kamarid]} />
      <Content kamar={{...kamar, kamarid}} />
      <Footer />
    </Layout>
  )
}

const Content = ({kamar}) => {
  const dayAfter = cDate => {
    const d = new Date(cDate).getTime() + oneDay
    return toCommonDate(new Date(d))
  }
  const toCommonDate = dt => dt.toISOString().substring(0, 10)
  const today = toCommonDate(new Date)
  const oneDay = 86400000
  const [payload, setPayload] = useState({
    start: today,
    end:  dayAfter(today),
    totalHari: 1,
    jumlah: 1
  })

  const updatePayload = (key, value) => {
    const updates = {...payload}
    updates[key] = value

    if (key === 'end' && window.moment) {
      const diff = moment(value).diff(payload.start, 'day')
      updates.totalHari = diff
    }

    if (key === 'start' && window.moment) {
      const diff = moment(payload.end).diff(value, 'day')
      updates.totalHari = diff
    }

    setPayload(updates)
  }

  const params = Object.entries({...payload, id: kamar.kamarid}).map(([key, val]) => `${key}=${val}`).join('&');

    return (
      <section id="kamar">
        <div className="card-block">
          <small><a href="https://familyinnhotel.com">Home</a> &gt; <a href="https://familyinnhotel.com/kamar-hotel">Kamar Hotel</a> &gt; Superior Room</small>
          <div className="row">
            <div className="col-md-5 wow fadeIn">
              <div className="table-responsive">
                <table className="table table-hover">
                  <tbody><tr>
                      <td>Kapasitas Ruangan</td>
                      <td>: <i className="fa fa-user" aria-hidden="true" /><i className="fa fa-user" aria-hidden="true" /> {kamar?.kapasitas} orang</td>
                    </tr>
                    <tr>
                      <td>Twin Bed Room</td>
                      <td>: <i className="fa fa-bed" aria-hidden="true" /> Tersedia</td>
                    </tr>
                    <tr>
                      <td>Sarapan</td>
                      <td>: <i className="fa fa-cutlery" aria-hidden="true" /> Sudah Termasuk Sarapan</td>
                    </tr>
                    <tr>
                      <td>Cancellation</td>
                      <td>: <i className="fa fa-remove" aria-hidden="true" /> Non-Refundable</td>
                    </tr>
                    <tr>
                      <td>Check In</td>
                      <td>: <i className="fa fa-clock-o" aria-hidden="true" /> 14.00 - 24.00</td>
                    </tr>
                    <tr>
                      <td>Check Out</td>
                      <td>: <i className="fa fa-ban" aria-hidden="true" /> 12.00</td>
                    </tr>
                  </tbody></table>
              </div>
              <p><strong /></p><h3><strong>Deskripsi Kamar</strong></h3> <p></p>
              <p>{kamar?.deskripsi}</p>
              <p className="card-text harga">Harga: IDR {formatHarga.format(kamar?.harga)} / malam </p><p>
              </p><form id="pesan-kamar" action={`/reservasi?${params}`} method="post">
                <input type="hidden" name="harga" defaultValue={kamar?.harga} />
                <input type="hidden" name="tipe" defaultValue={kamar?.nama} />
                <label htmlFor="cin">Tanggal Check In<span style={{color: 'red'}}> *</span></label>
                <input defaultValue={payload.start} value={payload.start} onChange={({target}) => updatePayload('start', target.value)} min={today} type="date" id="datepicker" name="cin" required />
                <label htmlFor="cot">Tanggal Check Out<span style={{color: 'red'}}> *</span></label>
                <input defaultValue={payload.end} value={payload.end} onChange={({target}) => updatePayload('end', target.value)} min={dayAfter(payload.start)} type="date" id="datepicker2" name="cot" required />
                <label htmlFor="jumlah">Jumlah Kamar:</label>
                <input value={payload.jumlah} onChange={({target}) => updatePayload('jumlah', target.value)} type="number" id="jumlah" placeholder="Jumlah" defaultValue={1} name="jumlah" min={1} max={10} />
                <button type="submit" className="btn innbtn">Pesan Kamar</button></form>
              <p><strong /></p><h4><strong>Informasi Tambahan</strong></h4><p>
              </p><div className="card card-block">
                <p>1. Semua kamar di Hotel Family Inn merupakan kamar bebas asap rokok</p>
                <p>2. Dibutuhkan ID pengenal seperti KTP/SIM/Passport atau tanda pengenal lainnya yang dikeluarkan resmi oleh pemerintah</p>
                <p>3. Dibutuhkan Deposit pada saat check-in</p>
              </div>
            </div>
            {/*/First column*/}
            {/*Second column*/}
            <div className="col-md-7">
              {/*Carousel Wrapper*/}
              <div id="carousel-example-2" className="carousel slide carousel-fade no-flex wow fadeIn" data-wow-delay="0.3s" data-ride="carousel">
                {/*Indicators*/}
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
                  <li data-target="#carousel-example-2" data-slide-to={1} />
                  <li data-target="#carousel-example-2" data-slide-to={2} />
                </ol>
                {/*/.Indicators*/}
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  {kamar?.images?.map((url, idx) => (
                    <div key={idx} className={`carousel-item ${idx === 0 && 'active'}`}>
                      <img style={{ maxHeight: 430, width: '100%', objectFit: 'cover' }} className="img-fluid" src={url} alt="Room slide" />
                    </div>
                  ))}
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a className="left carousel-control" href="#carousel-example-2" role="button" data-slide="prev">
                  <span className="icon-prev" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-2" role="button" data-slide="next">
                  <span className="icon-next" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <h3 className="h3-responsive font-weight-bold">Fasilitas Kamar</h3>
                </li>
                <li className="list-group-item">
                  Televisi <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  Air Conditioner <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  WiFi <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  Water Heater <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  Kamar Full Furnish <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  Secure Room Lock <i className="fa fa-check ml-auto" />
                </li>
                <li className="list-group-item">
                  Telepon Kamar <i className="fa fa-check ml-auto" />
                </li>
              </ul>
              {/*/.Carousel Wrapper*/}
            </div>
            {/*/Second column*/}
          </div></div>
      </section>
    )
};
