import styled from "styled-components"
import { useState } from "react"
import { Sidebar } from "./Sidebar";
export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Wrapper>
        <DisplayContainer>
            <div className="accent-text">MH Lab</div>
            <MenuBtn onClick={()=>{setMenuOpen(!menuOpen)}} open={menuOpen}>
                <MenuIcon open={menuOpen}></MenuIcon>
            </MenuBtn>
        </DisplayContainer>
        <Sidebar menuOpen={menuOpen}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const DisplayContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    
`

const MenuBtn = styled.div`
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    transition: all .5s ease-in-out;
    cursor: pointer;
    z-index: 99;
`

const MenuIcon = styled.div`

    width: 30px;
    height: 2px;
    background: ${props=>props.open === true ? 'transparent': 'var(--accent-color)'};
    transform: ${props=>props.open === true && 'transform: translateX(-50px)'};
    transition: all .5s ease-in-out;   
    &:before,
    &:after {
        width: 30px;
        content: '';
        position: absolute;
        height: 2px;
        background: var(--accent-color);
        transition: all .5s ease-in-out;
    }  
    &:before {
        transform: ${props=>props.open === true ? 'rotate(45deg) translate(0px, 0px)' : 'translateY(-10px)'}
    }    
    &:after {
        transform: ${props=>props.open === true ? 'rotate(-45deg) translate(0px, 0px)' : 'translateY(10px)'}
    }`