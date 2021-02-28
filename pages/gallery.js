import { useEffect } from 'react';
import BannerImage from '../components/Banner';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'


export default function Gallery() {
  const title = 'Gallery'
  return (
    <Layout metaTitle={title}>
      <Header />
      <BannerImage title={title} classBanner="header-gallery" />
      <Content />
      <Footer />
    </Layout>
  )
}

const Content = () => {

  useEffect(() => {
    if (window.blueimp) {
      document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
      };
    }
  }, [])

    return (
      <div className="container">
        {/* The Gallery as lightbox dialog, should be a child element of the document body */}
        <div id="blueimp-gallery" className="blueimp-gallery blueimp-gallery-controls">
          <div className="slides" />
          <h3 className="title" />
          <a className="prev">{'<'}</a>
          <a className="next">{'>'}</a>
          <a className="close">{'x'}</a>
          <a className="play-pause" />
          <ol className="indicator" />
        </div>
        <div id="links">
          <div className="paddingt20 row">
            <div className="col-md-10 offset-1">
              <section id="photos" className="wow slideInUp" data-wow-delay="1.2s">
                <a id="links" href="img/room/deluxe-b.jpg" title="Superior">
                  <img src="/img/room/deluxe-b.jpg" alt="deluxeb" />
                </a>
                <a id="links" href="img/room/deluxe-b-twin.jpg" title="Superior twin">
                  <img src="/img/room/deluxe-b-twin.jpg" alt="deluxe twin" />
                </a>
                <a id="links" href="img/room/meet-room.jpg" title="Meeting room">
                  <img src="/img/room/meet-room.jpg" alt="meeting room" />
                </a>
                <a id="links" href="img/room/resto-vip.jpg" title="Restoran">
                  <img src="/img/room/resto-vip.jpg" alt="restoran" />
                </a>
                <a id="links" href="img/room/cafe.jpg" title="Cafe">
                  <img src="/img/room/cafe.jpg" alt="cafe" />
                </a>
                <a id="links" href="img/room/deluxe-a-twin.jpg" title="Deluxe twin">
                  <img src="/img/room/deluxe-a-twin.jpg" alt="superior twin" />
                </a>
                <a id="links" href="img/room/room-exec-2.jpg" title="Executive 1">
                  <img src="/img/room/room-exec-2.jpg" alt="executive 1" />
                </a>
                <a id="links" href="img/room/room-exec.jpg" title="Executive 2">
                  <img src="/img/room/room-exec.jpg" alt="executive 2" />
                </a>
                <a id="links" href="img/room/family-suite-3.jpg" title="Family suite 3">
                  <img src="/img/room/family-suite-3.jpg" alt="family suite 3" />
                </a>
                <a id="links" href="img/room/room-exec-3.jpg" title="Executive 3">
                  <img src="/img/room/room-exec-3.jpg" alt="executive 3" />
                </a>
                <a id="links" href="img/room/deluxe-a.jpg" title="Deluxe room">
                  <img src="/img/room/deluxe-a.jpg" alt="deluxe room" />
                </a>
                <a id="links" href="img/room/family-suite.jpg" title="Family suite">
                  <img src="/img/room/family-suite.jpg" alt="family suite" />
                </a>
                <a id="links" href="img/room/deluxe-b-2.jpg" title="Superior 2">
                  <img src="/img/room/deluxe-b-2.jpg" alt="deluxe b" />
                </a>
                <a id="links" href="img/room/deluxe-a-2.jpg" title="Deluxe 2">
                  <img src="/img/room/deluxe-a-2.jpg" alt="superior 2" />
                </a>
                <a id="links" href="img/room/family-suite-2.jpg" title="Family suite 2">
                  <img src="/img/room/family-suite-2.jpg" alt="family suite 2" />
                </a>
                <a id="links" href="img/room/entrance.jpg" title="Entrance">
                  <img src="/img/room/entrance.jpg" alt="Entrance" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
};
