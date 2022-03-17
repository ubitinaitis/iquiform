import Layout from '../components/Layout'
import Background from '../components/Background'
import '../styles/global.css'
// add to the layout component how you want the child content
// to be wrapped on every page!


export default function App({ Component, pageProps }) {
  return (
    <Layout> 
      <div className="relative z-10">
      <Component {...pageProps} />
      </div>

      <div className="relative -z-5">
      <Background>
      </Background>
      </div>
    </Layout>
  )
}
