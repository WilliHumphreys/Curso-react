import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './NavBar.module.css'
import logo from '../../img/LOGO_DV.png'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to="/">
                    <img className={styles.imgLogo} src={logo} alt="Devline projects logo"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/Projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/Company">Company</Link></li>
                    <li className={styles.item}><Link to="/Contact">Contact</Link></li>                
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar