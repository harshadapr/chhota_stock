import { styled } from "styled-components";

const Features = () => {
    return (
        <Container>
            <Left>
                <h4>FEATURES</h4>
                <h2>SAVE NOW. BUY LATER. SIMPLE & REALISTIC </h2>
                <h3>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</h3>
                <Buttons>
                    <button>Get the App</button>
                    <a>Learn More</a>
                </Buttons>
            </Left>
            <Right>
                <img src="/features.png" />
            </Right>
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4{
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--green-primary);
    }
    h2{
        font-weight: 700;
        font-size: 2rem;
        line-height: 2rem;
        margin: 20px 0;
    }
    h3{
        color: var(--grey-primary);
        font-weight: 500;
    }
`;

const Buttons = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    button{
        background-image: linear-gradient(var(--yellow-primary), var(--yellow-secondary));
        padding: 8px 12px;
        border-radius: 20px;
        border: none;
        color: var(--black-dark);
        font-size: 0.9rem;
    }

    a{
        text-decoration: underline;
        color: var(--black-dark);
        font-size: 0.9rem;
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 80%;

        @media (max-width: 700px){
            width: 50%;
        }

        @media (max-width: 350px){
            display: none;
        }
    }
`;

export default Features;