import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 10.56%;
    padding: 0 55px;
`

const SearchBar = styled.div`
    position: relative;
    padding-left: 12px;
    margin-right: 138px;
    display: flex;
    align-items: center;
    width: 37.94%;
    height: 61px;
    border-color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-radius: 38px;
    & .search-icon {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: red;
    }
`

const Logo = styled.div`
    width: 212px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-img {
        width: 50px;
        height: 50px;
        background: #ffffff;
        border-radius: 50%;
    }
    .label-fullname {
        font-size: 18px;
        line-height: 18px;
        text-align: left;
        color: #ffffff;
        margin-top: 16px
    }
`

const NavLists = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    font-size: 20px;
    line-height: 20px;
    color: #e3dede;
    list-style: none;
    text-align: left;
    letter-spacing: 3px;
    margin-left: 46px;
  }

  li:hover {
    color: #e9003f;
  }

  .active {
    color: #e9003f;
  }
`

const links = [
    {name: "Home", path: "/", status: "active"},
    {name: "Browse", path: "/browse", status: "active"},
    {name: "Radio", path: "/radio", status: "active"},
]

export default function Navbar() {
    return <Container>
        <SearchBar>
            <span className="search-icon">
                        
            </span>
        </SearchBar>
        <NavLists>
            {links.map((link,index) => (
                <NavLink
                    key={index}
                    to={link.path}
                    className={
                        ({ isActive}) => isActive ? link.status : undefined
                    }>
                    <li>{link.name}</li>
                </NavLink>
            ))}
        </NavLists>
        <Logo>
            <div className="logo-img"></div>
            <p className="label-fullname">Admin</p>
        </Logo>
        
    </Container>
}