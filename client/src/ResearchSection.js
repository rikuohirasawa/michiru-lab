import styled from "styled-components"
export const ResearchSection = () => {
    return (
        <Wrapper>
            <h2>Our Research</h2>
            <p>
                We aim understand the brain, specifically what it requires to lead a happy and healthy lifes. 
                In doing this, we research neurological processes of the brain itself, as well as the influence of external factors that affect our functionality.        
            </p>
            <p>Our research employs an approach focused on the interrogation of neuronal mechanisms, including (but not limited to): </p>
            <ul> 
                <li>Synaptic physiology</li>
                <li>Ion channel functions</li>
                <li>Transporters</li>
                <li>Astrocyte-neuron communication</li>
                <li>Gene and protein expression</li>
            </ul>
            <p> We currently have two primary research interests:</p>
            <h3><span className="accent-text">1. </span>Homeostasis and the Brain</h3>
            <p>
                Healthy eating and a good night’s sleep are important facets of a happy and healthy life. 
                In modern society however, many struggle against temptations of palatable food loaded with fat, sugar and salt. 
                Couple this with the normalization of poor sleep behaviors, obesity rates and other related diseases have continued to rise in Canada.
            </p>
            <p>
                The brain is responsible for detecting homeostatic challenges and countering them with autonomic and behavioral responses. 
                In particular, the hypothalamus plays a key role in regulating homeostasis. 
                Therefore, we investigate how neurons and glial cells (non-neuronal cells) in hypothalamus operate under unbalanced conditions, compared to their baseline operation. 
            </p>
            <h3><span className='accent-text'>2. </span>Chemobrain</h3>
            <p>
                Up to 70% of patients that undergo chemotherapy show significant cognitive impairment, these adverse neurological effects termed “chemobrain”, can last for months or even years. 
                This condition has a significant impact on treatment compliance and overall physical/mental health status of cancer patients. 
            </p>
            <p>
                Our work aims to determine the underlying neuronal mechanisms behind this phenomenon, and identify potential treatments for those affected.
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    p {
        margin: 8px 0;
    }
    ul {
        padding: 8px 24px;
    }`