import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(params) {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>&copy; Devline projects 2024</span></p>
        </footer>
    )
}

export default Footer