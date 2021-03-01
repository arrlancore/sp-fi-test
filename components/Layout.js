import Head from 'next/head'
      
export default function Layout ({ children, metaTitle }) {
  const defaultTitle = "Hotel FamilyInn - Bangko, Jambi"
  return (
    <div style={{ maxWidth: 1600, margin: '0 auto' }}>
      <Head>
        <title>{metaTitle ? `${metaTitle} - Hotel Family Inn` : defaultTitle}</title>
      </Head>
      {children}
    </div>
  )
}