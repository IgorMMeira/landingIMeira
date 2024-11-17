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
                    "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MzMzODE3NDMzNzQwOTY2NzExIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJpbW1laXJhQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Imd3LS1SRm5NYXRsT2xBRzdWQVVpWHciLCJuYmYiOjE3MzE4MDU2MDQsImlhdCI6MTczMTgwNTkwNCwiZXhwIjoxNzMxODA5NTA0LCJqdGkiOiIwYWE3ZjQ3NzBjZGUzNGZkNDQ2OWY4YmIxZjg4MDYxNGVlOTNiNThiIn0.sDQ6P--2k_FYmTBB_74NixbI9qTFNsf3xFJp8jhHi6m3YknmaTKtE8MpYnZ9EVOzxj4kVm91JD-DtEJPdkm6zRDiA39I1SH1A29RiSanwfAbTKcBIAlkFZl6VX8gvBNCz0m6PyGKZ9gUhDr9VKlzCDoYRHFp_8KWYlj_05KFCFQvV-_cUNc2RaYqiOsc_4qKZ5X0eLweTkcsp6VDiIKUsphZPgJ_Gnol1DvnLaLMqntLE_4y2AGf9oMVdtD4di7iW6fydzl3RKyVOULeJrGWk7-TkA0shqapkvMN8CP3sOD42du69zsqtjZTKiDVyGYTC4OrwfrNZaIcadZBKqdkpw`,
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
