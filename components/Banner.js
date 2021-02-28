export default function BannerImage({title, classBanner}) {
  return (
    <header className={`image-bg-fluid-height ${classBanner}`}><div className="description text-center">
          <h2 className="page-title wow fadeInDown">{title}</h2>
          <span className="figure-img">
            <img alt="decor-small1" src="/img/decor-small-white.png" />
          </span>
        </div>
      </header>
  )
}