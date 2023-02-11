import styled from "styled-components"
import { Link } from "react-router-dom"
const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const Sidebar = styled.div`
    width: 16.46%;
    background: #161616;
    height: 100vh;
`

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 76px;
    .logo-img {
        width: 134px;
        height: 134px;
        background: #ffffff;
        border-radius: 50%;
    }
`

const RightSide = styled.div`
    width: calc(100% - 16.46%);
`

const Navbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 10.56%;
    padding: 0 55px;
`

const SearchBar = styled.div`
    position: relative;
    padding-left: 12px;
    display: flex;
    align-items: center;
    width: 37.94%;
    height: 45px;
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

const Player = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 10%;
    min-height: 80px;
    background: #797979;
`

interface iLayoutProps {
    children: React.ReactElement
}

export default function Layout({ children }: iLayoutProps) {
    return <Main>
        <Sidebar>
            <Logo>
                <div className="logo-img"></div>
            </Logo>
        </Sidebar>
        <RightSide>
            <Navbar>
                <SearchBar>
                    <span className="search-icon">
                        
                    </span>
                </SearchBar>

                <Link to={"/test"}>Hello</Link>

            </Navbar>
            {children}
        </RightSide>
        <Player />
    </Main>
}