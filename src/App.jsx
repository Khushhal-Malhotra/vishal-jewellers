import styles from './App.module.css'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <Features/>
      <Contact/>
      <Map/>

      {/* <iframe src='https://329a94b18df4454b8ddb116a45bb7316.elf.site' width='100%' height='360' frameborder='0'></iframe> */}
      {/* <iframe src="https://embedsocial.com/api/pro_hashtag/0ed39e5bf4d0912af484a95aeac778fbb3a29507" width="100%" height="350px" frameborder="0" marginheight="0" marginwidth="0"></iframe> */}
      <div className="embedsocial-hashtag" data-ref="0ed39e5bf4d0912af484a95aeac778fbb3a29507"> </div> 
      
      <Footer/>
    </div>
    </>
  )
}

export default App
