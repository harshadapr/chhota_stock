import { styled } from "styled-components";

const BenefitsCard = ({img_url}) => {
    return (
        <Container>
            <img src={img_url} />
        </Container>
    );
}

const Container = styled.div`
    img{
        width: 100%;
    }
`;

export default BenefitsCard;