import Navbar from "./components/navber";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../app/styles/globals.scss'
import '../app/styles/css/bootstrap.min.css'
import '../app/styles/css/style.css'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from "./components/footer/footer";


export const metadata = {
  title: "Poeple Place",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
      >
     
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
