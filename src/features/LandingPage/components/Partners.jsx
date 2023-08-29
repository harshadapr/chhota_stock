import { styled } from "styled-components";

const Partners = () => {
    return (
        <Container>
            <div>
                <p>Some partners who make InvestPe products possible—</p>
                <Grid>
                    <img src="/icons/image 12.png" />
                    <img src="/icons/image 13.png" />
                    <img src="/icons/image 14.png" />
                    <img src="/icons/image 15.png" />
                    <img src="/icons/image 16.png" />
                    <img src="/icons/image 17.png" />
                </Grid>
            </div>
            <div>
                <p>...and a few of the businesses building some incredible solutions with InvestPe</p>
                <Grid>
                    <span><img src="/icons/image 3.png" /></span>
                    <span><img src="/icons/image 4.png" /></span>
                </Grid>
            </div>
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &>div{
        display: flex;
        gap: 20px;

        @media (max-width: 700px){
            flex-direction: column;
        }

        p{
            flex: 1;
            color: var(--grey-primary);
            padding-top: 20px;

            @media (max-width: 700px){
                color: var(--grey-dark);
                font-size: 2rem;
                padding-top: 30px;
            }
        }
    }

`;

const Grid = styled.div`
    flex: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span{
        width: 120px;
        height: 60px;
        background-color: var(--grey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;

        img{
            width: 80%;
        }
    }

    img{
        max-width: 150px;
        max-height: 100px;
        object-fit: contain;
    }
`;

export default Partners;