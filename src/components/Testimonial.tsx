import "../styles/index.css";
import "../styles/utility.css";
import "../styles/testimonial.css";
import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";
import Profile1 from "../assets/Profile1.svg"
import Profile2 from "../assets/Profile2.svg"

export default function Testimonial() {
    return (
        <>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Problemas ao tentar resolver o conflito entre
                        os dois principais domínios da física clássica: a mecânica newtoniana
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={Profile1} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Transformou minha rotina! Agora consigo organizar minhas tarefas e ganhar muito mais tempo livre.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width="20" height="22" />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={Profile2} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Minha produtividade aumentou significativamente. Consigo fazer mais coisas em menos tempo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width="20" height="22" />
                            </span>
                            <span className="names">
                                <p>Ryan Gosling</p>
                                <p>Agrônomo</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={Profile2} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Me ajuda a manter o controle das minhas tarefas e me deixa mais tranquilo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={Star} alt="ícone estrela" width="22" height="20" />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width="20" height="22" />
                            </span>
                            <span className="names">
                                <p>Alfa Romeu</p>
                                <p>Programador</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
