import '../styles/utility.css'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Solution from '../components/Solution'
import Testimonial from '../components/Testimonial'
import Plans from '../components/Plans'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solution />
            <Testimonial />
            <Plans />
            <Contact />
            <Footer />
        </>

    )
}