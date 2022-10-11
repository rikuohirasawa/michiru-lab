import styled from "styled-components"
import { useState } from "react"

export const Sidebar = ({menuOpen}) => {
    return (
        <Wrapper open={menuOpen}>
            <div>Our Research</div>
            <div>Our Team</div>
            <div>Contact</div>
            <div>About Memorial</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    transform: translateX(${props=>props.open ? 0 : 100}vw);
    color: var(--light-color);
    background: #112240;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    position: fixed;
    height: 100vh;
    width: 60vw;
    top: 0px;
    bottom: 0px;
    right: 0px;
    box-shadow: -10px 0px 30px -15px rgba(2,12,27,0.7);
    z-index: 10;
    transition: all .5s ease-in-out;

    div {
        font-size: 1.1rem;
    }
    `