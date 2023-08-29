import { styled } from "styled-components";

const CTA = () => {
  return (
    <Container>
      <Head>
        <h1>Knowledge Based Investing & Trading</h1>
        <h3>
          Ready-made solutions + Deep Research + Disciplined Investing +
          Advanced Trading tools
        </h3>
      </Head>
      <img src="/cta-img1.png" />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: var(--primary);
  color: var(--secondary);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  img {
    max-width: 60%;

    @media (max-width: 800px) {
      max-width: 90%;
    }
  }
`;

const Head = styled.div`
  text-align: center;
  font-size: 1rem;

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 550px;
    margin: auto;
    margin-bottom: 1rem;
  }
`;

export default CTA;
