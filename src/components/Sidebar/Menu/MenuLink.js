import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`


const Span = styled.span`
    /* color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    color: ${props => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    padding-top: 0.6rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"};
    text-decoration: none;
`

const MenuLink = ({ title, icon, path }) => {
    const location = useLocation();
    const active = path===location.pathname;
    return (
        <Link to={path}>
            <Container active={active}>
                <Span active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Span>
                <Title active={active}>{title}</Title>
            </Container>
        </Link>
    )
}

export default MenuLink
