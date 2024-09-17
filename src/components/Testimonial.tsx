import "../styles/index.css"
import "../styles/utility.css"
import "../styles/testimonial.css"


export default function Testimonial() {
    return (
        <>
            <div className="fundo">
                <section className="container" id="Testimonial">
                    <header>
                        <span>
                            <h2>Conselho de quem conhece</h2>
                            <span className="desktop-only">
                                <h2>Cada cliente importa!</h2>
                            </span>
                        </span>
                        <p>
                            Problemas ao tentar resolver o conflito entre
                            os dois principais domínios da física clássica: a mecânica newtoniana
                        </p>
                    </header>
                    <section className="even-columns container">
                        <div className="Testimonial-card">
                            <img src="https://www.agendartecultura.com.br/wp-content/uploads/2022/12/meneson.jpg" className="image"></img>
                            <p>"O <strong>IMEIRA </strong>transformou minha rotina! Agora consigo organizar minhas tarefas e ganhar muito mais tempo livre."</p>
                            <h3>Pedro</h3>
                            <hr>
                            </hr>
                        </div>
                        <div className="Testimonial-card">
                            <img src="https://etalent.com.br/wp-content/uploads/2019/09/Harvey-Specter.jpg" className="image"></img>
                            <p>"Com o <strong>IMEIRA</strong> minha produtividade aumentou significativamente. Consigo fazer mais coisas em menos tempo."</p>
                            <h3>João</h3>
                            <hr>
                            </hr>
                        </div>

                        <div className="Testimonial-card">
                            <img src="https://media.gazetadopovo.com.br/2021/12/14122407/elon-musk-steve-jurvetson-wikimedia-commons-960x540.jpg" className="image"></img>
                            <p>"O <strong>IMEIRA </strong>me ajuda a manter o controle das minhas tarefas e me deixa mais tranquilo."</p>
                            <h3>Elon Musk</h3>
                            <hr>
                            </hr>
                        </div>

                    </section>
                </section>
            </div>

        </>
    )
}