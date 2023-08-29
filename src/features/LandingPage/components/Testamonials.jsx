import { styled } from "styled-components";

const Testamonials = () =>{
    return (
        <Container>
            <div>
                <h1>Reviews From Early Adopters</h1>
                <div>
                    <span>
                        <h2>156k+</h2>
                        <h3>Registered Users</h3>
                    </span>
                    <span>
                        <h2>156k+</h2>
                        <h3>Registered Users</h3>
                    </span>
                </div>
            </div>
            <Grid>
                <img src="/testamonials/testamonial-1.png" />
                <img src="/testamonials/testamonial-2.png" />
                <img src="/testamonials/testamonial-3.png" />
                <img src="/testamonials/testamonial-4.png" />
                <img src="/testamonials/testamonial-1.png" />
            </Grid>
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;

    h1{
        font-weight: 700;
        font-size: 2rem;
    }

    &>div:first-child{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;

        @media (max-width: 500px){
            grid-template-columns: repeat(1, 1fr);
        }

        &>div{
            display: flex;
            align-items: center;
            gap: 20px;

            @media (max-width: 500px){
                margin-top: 20px;
            }

            span{
                display: flex;
                flex-direction: column;
                gap: 5px;
                background-color: var(--grey-light);
                padding: 20px;
                border-radius: 10px;

                h2{
                    font-weight: 700;
                    font-size: 1.5rem;
                }

                h3{
                    font-weight: 500;
                    font-size: 1rem;
                }
            }
        }
    }
`;

const Grid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 500px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 400px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 300px){
        grid-template-columns: repeat(1, 1fr);
    }

    img{
        width: 100%;

        
    }
`;

export default Testamonials;