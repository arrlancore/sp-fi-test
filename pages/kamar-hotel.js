import Link from 'next/link';
import { useEffect } from 'react';
import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import roomData from '../data/rooms.json'
import { formatHarga } from '../utils/formatter';

  // "vipDeluxe": {
  //   "nama": "VIP Deluxe Room",
  //   "deskripsi": "Kamar VIP Deluxe Room merupakan sebuah kamar yang didesain unik dan modern dengan ukuran kamar yang lebih luas. Semua furniture didesain unik dan terbuat dari bahan yang berkualitas.",
  //   "kapasitas": 2,
  //   "harga": 500000,
  //   "images": [],
  //   "thumbnail": "img/room/deluxe-a-twin.jpg"
  // },


export default function KamarHotel() {
  const title = 'Kamar Hotel'

  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-hotel" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

    return (
      <div className="container-fluid">
        <div className="text-center paddingt20 font-weight-bold"><h2>Silahkan Pilih Kamar</h2><p /></div>
        <div className="row card-block">
          {Object.entries(roomData).map(([key, room]) => (
            <div className="col-md-4 paddingt20">
            {/*Card*/}
            <div className="card wow fadeInUp">
              {/*Card image*/}
              <div className="view overlay hm-white-slight">
                <img src={room.thumbnail} className="img-fluid" alt="executive-suite" />
                <Link href="/kamar/[kamarid]" as={`/kamar/${key}`}>
                  <div className="mask waves-light" />
                </Link>
              </div>
              {/*/.Card image*/}
              {/*Card content*/}
              <div className="card-block">
                {/*Title*/}
                <h4 className="card-title font-weight-normal">{room.nama}</h4>
                <hr />
                {/*Text*/}
                <p className="card-text">IDR {formatHarga.format(room.harga)} / malam
                  <Link href="/kamar/[kamarid]" as={`/kamar/${key}`}><button type="button" className="btn innbtn pull-right">Detail</button></Link></p>
              </div>
              {/*/.Card content*/}
            </div>
            {/*/.Card*/}
          </div>
          ))}
          {/*5th columnn*/}
          <div className="col-md-4 paddingt20">
            {/*Card*/}
            <div className="card wow fadeInUp" data-wow-delay="0.2s">
              {/*Card image*/}
              <div className="view overlay hm-white-slight">
                <img src="/img/room/honeymoon.jpg" className="img-fluid" alt="family-suite" />
                <a href="#">
                  <div className="mask waves-light" />
                </a>
              </div>
              {/*/.Card image*/}
              {/*Card content*/}
              <div className="card-block">
                {/*Title*/}
                <h4 className="card-title">Kamar Spesial Honeymoon</h4>
                <hr />
                {/*Text*/}
                <p className="card-text">Silahkan hubungi kami untuk detail program bulan madu ini.</p>
              </div>
              {/*/.Card content*/}
            </div>
            {/*/.Card*/}
          </div>
          {/*5th columnn*/}
          {/*6th columnn*/}
          {/*6th columnn*/}
        </div>
      </div>
    )
};
