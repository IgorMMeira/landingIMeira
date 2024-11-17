import "../styles/footer.css"
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

export default function Footer() {
    return (
        <>
            <section>
                <footer className="footer">
                    <div className="footer-links">
                        <div className="footer-logo">
                            <span>LogoMarca</span>
                            <div className="footer-icons">
                                <img src={instagram} alt="Instagram" />
                                <img src={facebook} alt="Facebook" />
                                <img src={youtube} alt="YouTube" />
                            </div>
                        </div>
                        <div className="footer-section">
                            <h4>Empresa</h4>
                            <ul>
                                <li>Sobre nós</li>
                                <li>Faça parte do time</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Funcionalidades</h4>
                            <ul>
                                <li>Marketing</li>
                                <li>Análise de dados</li>
                                <li>Boot discord</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Recursos</h4>
                            <ul>
                                <li>IOS & Android</li>
                                <li>Teste a Demo</li>
                                <li>Clientes</li>
                                <li>API</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
                    <p>
                        Feito com amor na aula de Programação Web 💙 ©2024 AktieTech - Todos os direitos reservados.
                    </p>
                </div>
            </section>

        </>
    )
}