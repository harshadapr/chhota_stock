import { styled } from "styled-components";

const EssentialFeature = () => {
  return (
    <Container>
      <div>
        <h1>
          Essential Features for the Super Trader in You - All in{" "}
          <span>One Platform</span>
        </h1>
        <p>
          Save hours of research by using our readymade screens to find your
          next investment
        </p>
        <Buttons>
          <button>Get the App</button>
          <a>Learn More</a>
        </Buttons>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: var(--black-dark);
    color: var(--secondary);
    font-size: 15px;
    max-width: 1000px;
    border-radius: 20px;
    padding: 20px;

    h1 {
      color: var(--secondary);
      font-weight: 700;
      span {
        color: var(--yellow-secondary);
      }
    }

    p {
      color: var(--grey-very-light);
    }
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    background-image: linear-gradient(
      var(--yellow-primary),
      var(--yellow-secondary)
    );
    padding: 8px 12px;
    border-radius: 20px;
    border: none;
    color: var(--black-dark);
    font-size: 0.9rem;
  }

  a {
    text-decoration: underline;
    color: var(--grey-light);
    font-size: 0.9rem;
  }
`;

export default EssentialFeature;
