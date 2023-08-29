import { styled } from "styled-components";
import BenefitsCard from "./BenefitsCard";

const Benefits = () => {
  return (
    <Container>
      <h1>STOCK INVESTING, SIMPLIFIED</h1>
      <p>
        Online trading and investing in the market does not have to be boring.
        While we adopt a technology-led approach in building our product, we are
        keeping our users-investors and traders even before that
      </p>
      <BenefitsGrid>
        <BenefitsCard img_url="/value-deals.png" />
        <BenefitsCard img_url="/ev-revolution.png" />
        <BenefitsCard img_url="/hidden-gems.png" />
        <BenefitsCard img_url="/hidden-gems2.png" />
      </BenefitsGrid>
    </Container>
  );
};

const Container = styled.div`
    padding: 20px;
    color: var(--black-dark);

    h1{
        font-weight: 700;
        font-size: 32px;
    }

    p{
        font-weight: 400;
        font-size: 20px;
        color: var(--grey-primary);
    }
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default Benefits;
