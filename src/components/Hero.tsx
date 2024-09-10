import rectangleOne from "../assets/images/Rectangle-1.png";
import HeroRectangleTwo from "../assets/images/Rectangle-2.png";
import "../styles/index.css"
import "../styles/utility.css"
import "../styles/hero.css"
import Button from "./Button";


export default function Hero() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={rectangleOne} alt="Retangulo dois tela inicial" />



                <div className="container content">
                    <p className="desktop-only">
                        Olá

                        <h1> Uma solução que irá te entragar X </h1></p>
                    <p>
                        Teste para Slogan
                    </p>
                    <div className="flex gap-1">

                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>
        </>
    )
}


