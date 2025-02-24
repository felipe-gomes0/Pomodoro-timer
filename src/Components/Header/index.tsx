import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react';
import logo from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";

export function Header () {
    return(
        <HeaderContainer> 
            <img src={logo} width={60}  />
            <nav>
                <NavLink to="/" title='Timer'> <Timer size={24}/>  </NavLink>
                <NavLink to="/History" title='Histórico'> <Scroll size={24}/> </NavLink>
            </nav>
        </HeaderContainer>  
    );
}
