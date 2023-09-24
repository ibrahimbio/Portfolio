import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo1 from '../image/logo1.png'


const NavBarContainer =  styled.ul`
display: flex;
justify-content: center;
`

const NavarLink = styled(Link)`
position: relative;
display: inline-flex;
text-decoration: none;
margin: 1em;
color: black;
border-bottom: 1px;
cursor: pointer;
box-shadow: 6px 6px 0px rgba(82, 82, 82, 0.25);
transition: all 0.3s
font-family: "chill", sans-serif;
background-color: #D8D9DA;
&:hover{
    box-shadow: 1px 3px grey;
    background:#E5E5E5;
}
`

const NavLinkContainer = styled.li`
list-style-type: none;
`

const Image = styled.img`
margin-right: auto;
border-start-start-radius: 20px;
margin-block: auto;
margin-left: 1px;

&:hover{
    background:white;
}


`


const NavBar = () => {
    return ( 
        
        <NavBarContainer>
            <Image src={logo1} width="300" height="150" alt="logo"/> 
            <NavLinkContainer>
                <NavarLink to="/about">ABOUT</NavarLink>

            </NavLinkContainer>

            <NavLinkContainer>
                <NavarLink to="/projects">PORTFOLIO</NavarLink>

            </NavLinkContainer>

            <NavLinkContainer>
                <NavarLink to="/resume">RESUME</NavarLink>

            </NavLinkContainer>

            <NavLinkContainer>
                <NavarLink to="/contact">CONTACT</NavarLink>

            </NavLinkContainer>


        </NavBarContainer>
        
     );
}
 
export default NavBar;