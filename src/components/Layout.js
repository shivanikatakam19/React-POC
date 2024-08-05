import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import Switch from '@mui/material/Switch';

function Layout() {

    const { theme, toggleTheme } = useTheme();
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    function handleChange() {
        toggleTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <Navbar className={theme}>
                <Container>
                    <img style={{ height: "30px" }} src="https://preview.colorlib.com/theme/alime/img/core-img/logo.png" />
                    <Nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/counter">Counter(lifting state)</NavLink>
                        <NavLink to="/useForm">Use Form</NavLink>
                        <NavLink to="/users">Users(axios)</NavLink>
                        <NavLink to="/todolist">Todo List</NavLink>
                        <Switch {...label} onChange={handleChange} checked={theme == 'dark'} />
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;