import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Poster = styled.img`
padding-bottom: 10px;
`

export const MovieCard = styled.li`
width: 200px;
padding: 10px;
text-align: center;
list-style: none;
`

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
`

export const Link = styled(NavLink)`
display: flex;
height: 350px;
color: black;
border: 1px solid black;
text-decoration: none;
flex-direction: column;
`