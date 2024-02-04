import styles from './App.module.css'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar'

function App() {

  const slides = [
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618022961076.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023044488.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023038347.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023026005.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023023814.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023041731.jpg",
      width: 600,
      height: 600,
      category: "Earrings",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023011404.jpg",
      width: 600,
      height: 600,
      category: "Earrings",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023008874.jpg",
      width: 600,
      height: 600,
      category: "Earrings",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618023014132.jpg",
      width: 600,
      height: 600,
      category: "Bracelets",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618022951255.jpg",
      width: 600,
      height: 600,
      category: "Bracelets",
    },
    {
      src: "https://createcards.co.in/upload/product/1618024652FB_IMG_1618022944575.jpg",
      width: 600,
      height: 600,
      category: "Bracelets",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255images%20(2)_1_1_1_1_1_1_1_1_1_1_1_1_1_1.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255images%20(10)_1_1_1_1_1-1.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255images%20(7)_1_1_1_1_1_1_1.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255images%20(13)_1_1_1.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102647.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102738.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102800.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102924.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255images%20(15)_1_1_1.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102822.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
    {
      src: "https://createcards.co.in/upload/product/16180246521615526255IMG_20210312_102944.jpg",
      width: 600,
      height: 600,
      category: "Necklaces",
    },
  ];

  return (
    <>
    <div className={styles.container} >
   
      <Navbar/>
      <Hero/>
      <Features/>
      <Gallery slides = {slides}/>
      <Contact />
      <Map/>

      {/* <iframe src='https://329a94b18df4454b8ddb116a45bb7316.elf.site' width='100%' height='360' frameborder='0'></iframe> */}
      {/* <iframe src="https://embedsocial.com/api/pro_hashtag/0ed39e5bf4d0912af484a95aeac778fbb3a29507" width="100%" height="350px" frameborder="0" marginheight="0" marginwidth="0"></iframe> */}
      <div id='Testimonials' className="embedsocial-hashtag" data-ref="0ed39e5bf4d0912af484a95aeac778fbb3a29507"> </div> 
      
      <Footer/>
    </div>
    </>
  )
}

export default App
