import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Poster = styled.img`
margin-right: 50px;
width: 300px;
`
export const MovieCard = styled.div`
display: flex;
`

export const MoreInfo = styled.div`
text-align: center;
`

export const Link = styled(NavLink)`
color: black;
text-decoration: none;
&:not(:last-child) {
  margin-right: 10px;
}
&:hover,
&:focus {
  color: blue;
}
`