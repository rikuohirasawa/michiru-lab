import styled from "styled-components"
import { ResearchSection } from "./ResearchSection"
export const Homepage = () => {
    return (
        <>
        <Wrapper>
            <div>
                <div className='heading-text-large'>Michiru Hirasawa Laboratory</div>
                <div className='heading-text-large light-text'>Department of Neuroscience</div>
                <div className="light-text info-text">
                    Located at the Memorial University of
                    Newfoundland, our research is dedicated to identifying cellular/molecular
                    functions that affect our brains health.
                </div>
            </div>
            <div className="btn-container">
                <Button>Research</Button>
                <Button>Contact Us</Button>
            </div>
        </Wrapper>
        <ResearchSection/>
        </>
    )
}

const Wrapper = styled.div`
    /* background-image: linear-gradient(to right, #77c9d4, #57BC90); */
    min-height: 100vh;
    color: var(--header-text-color);
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    gap: 28px;

    .heading-text-large {
        font-size: 2rem;
        font-weight: 700;
    }

    .light-text {
        color: var(--light-color)
    }

    .info-text {
        margin-top: 12px;
    }

    .btn-container {
        display: flex;
        gap: 4px;
    }
`

const Button = styled.button`
    background: inherit;
    font-family: inherit;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    border-radius: 2px;
    padding: 8px 20px;
    `

