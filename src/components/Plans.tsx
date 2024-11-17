import "../styles/plans.css";
import Check from "../assets/Check.svg";
import Button from "./Button";

export default function Plans() {
    return (
        <>
            <section id="pricing">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <div className="pricing-cards-wrapper">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a um mês grátis em nosso App.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Baixar agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Baixe nosso APP e aproveite</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 mês</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <div className="bonus"><p>1º MÊS COM DESCONTO</p></div>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa otimizar tempo e precisa de uma ajudinha.</p>
                        </span>
                        <div className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </div>
                        <Button text="Baixe agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acesso ao chat da comunidade</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acesso a criação de projetos e tarefas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acesso a relatórios detalhados</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Empresarial</h3>
                            <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
                        </span>
                        <h2>R$ 29,90 /mês</h2>
                        <Button text="Baixe agora" secondary key="business" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Para até 4 usuários</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
