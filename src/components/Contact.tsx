import "../styles/contact.css";
import { useState } from "react";

export default function Contact() {
    const [toMail, setToEmail] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("Enviando...");

        try {
            const response = await fetch("api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MzMzODE3NDMzNzQwOTY2NzExIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJpbW1laXJhQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkdoZE1WU19HV2RpSEc5VWh1dzAybGciLCJuYmYiOjE3MzE4ODI1NTcsImlhdCI6MTczMTg4Mjg1NywiZXhwIjoxNzMxODg2NDU3LCJqdGkiOiJkNTFhYWUwNTNmNGUzYjA2MTgzNjczMDVkYjBmZGJmNmFjMzdiMjAwIn0.DDbtdQMtMVfHQT24NNRv8qmZhf0kvvWC-HBKMSUdpSyUrsa-6yaiF1WjhcOBiuzjhsvx2RZDdkMlb3m6LlK7UObx2EK75FkmddSCvQgoaV8SFT2m6cJotyNty4bZxFk1cXksxENx8v-Y_d3umtYysY2Rtkp-yPr65Kp52bDiRbF1Lmo02tWOLEI-QWdwaN9VUUeKoW-4GA1K5Z6KPbDlhXtTcRIGKi8n0K6vdunnTulFph91ftE3FaI73EGDMPGdLZ95hVunlScp72O7jvPjnfIuk-hFn_19smi2KUZN5JDkGIiYRw3rg6_WGoUnA28sBQOD2aQ0wmheTqWUaFNbbg`,
                },
                body: JSON.stringify({
                    toMail,
                    content,
                    text: "teste envio",
                }),
            });

            if (response.ok) {
                setStatus("E-mail enviado com sucesso!");
                setToEmail("");
                setContent("");
            } else {
                setStatus("Erro ao enviar e-mail. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            setStatus("Erro ao enviar e-mail. Verifique sua conexão.");
        }
    };

    return (
        <section id="contact">
            <div>
                <p className="desktop-only">Envie sua dúvida</p>
                <h2>Entre em Contato</h2>
                <p className="descriçao">
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                        value={toMail}
                        onChange={(e) => setToEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Qual o motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Enviar</button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </div>
        </section>
    );
}
