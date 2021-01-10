import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(17, 103, 177, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(3, 37, 76, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid
     ${(props) => (props.current ? "#03254c" : "#3498db")};
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SLogo = styled(Link)`
    font-size: 35px;
    margin: 10px;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <SLogo to="/">
            <span role="img" aria-label="Loading">
            📚
            </span>
        </SLogo>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">General Book</SLink>
            </Item>
            <Item current={pathname === "/it"}>
                <SLink to="/it">IT Book</SLink>
            </Item> 
            <Item current={pathname === "/novel"}>
                <SLink to="/novel">Novel Book</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>     
        </List>   
    </Header>
));


