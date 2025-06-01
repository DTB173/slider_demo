import 'swiper/css'
import 'swiper/css/navigation'
import styles from './app.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'

const photos = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  //'/img5.jpg',
]

function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>React Slider Demo</header>

      <Swiper
        modules={[Navigation, EffectCoverflow]} // Dodajemy moduły: przyciski nawigacji i efekt coverflow (3D)
        navigation // Pokazuje przyciski "następny/poprzedni"
        loop={photos.length > 3} // Pętla: wraca do początku, jeśli mamy więcej niż 3 zdjęcia
        centeredSlides // Środkowy slajd jest wyśrodkowany
        slidesPerView={1.75} // Pokazuje 1 slajd na środku i częściowo 2 po bokach
        initialSlide={Math.floor(photos.length / 2)} // Zaczynamy od środkowego slajdu
        effect="coverflow" // Aktywujemy efekt coverflow
        coverflowEffect={{
          rotate: 0,          // Rotacja slajdu (np. 50 oznacza obrót przy przesuwaniu)
          stretch: 0,         // Rozciągnięcie (odstępy między slajdami)
          depth: 100,         // "Głębia" — jak bardzo slajdy znikają w tło
          modifier: 2.5,      // Wzmocnienie całego efektu (większe = bardziej dramatyczne)
          slideShadows: false // Czy dodawać cienie dla slajdów (można dać true, ale czasem psuje styl)
        }}
        className={styles.carousel} // Klasa CSS do stylizacji karuzeli
      >
        {photos.map((photo, index) => (
          <SwiperSlide
            key={`slide-${index}`} // Klucz do Reacta — unikalny identyfikator slajdu
            className={styles.carouselSlide} // Stylizacja pojedynczego slajdu
          >
            <img
              src={photo} // Ścieżka do zdjęcia
              alt={`Slide ${index}`} // Alternatywny tekst (SEO, dostępność)
              className={styles.slideImage} // Stylizacja obrazka
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <footer className={styles.footer}>
        © 2025 Jacek Brytan
      </footer>
    </div>
  )
}

export default App
