import { CardContainer, IconContainer, ButtonContainer, ResultContainer } from "./Home.styles";
import iconStarimg from "../assets/icon-star.svg";
import thankYouImg from "../assets/illustration-thank-you.svg";
import { useState } from "react";

export function Home() {
    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [feedbackNote, setfeedBackNote] = useState(0)

    function handleFeedbackButtonClick(event) {
        const feedback = Number(event.target.innerText)

        setfeedBackNote(feedback)
    }

    function handleSubmit() {
        if (feedbackNote === 0) return 

        setMostrarResultado(true)
    }

    return (
        mostrarResultado === false ? (
            <CardContainer>
                <IconContainer>
                    <img src={iconStarimg} alt="icone de estrela" />
                </IconContainer>

                <h1>Como foi o atendimento?</h1>
                <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!
                </p>

                <ButtonContainer>
                    <button onClick={handleFeedbackButtonClick}>1</button>
                    <button onClick={handleFeedbackButtonClick}>2</button>
                    <button onClick={handleFeedbackButtonClick}>3</button>
                    <button onClick={handleFeedbackButtonClick}>4</button>
                    <button onClick={handleFeedbackButtonClick}>5</button>
                </ButtonContainer>

                <button onClick={handleSubmit}>Enviar</button>
            </CardContainer>
        ) : 
        (
            <CardContainer>
                <img src={thankYouImg} alt="imagem de agradecimento" />

                <ResultContainer>
                    <p>Você selecionou {feedbackNote} de 5</p>
                </ResultContainer>

                <h1>Obrigado!</h1>
                <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato! </p>
            </CardContainer>
        )
    )
}
