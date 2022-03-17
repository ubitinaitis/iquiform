import navStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Nav = () => {
    return(
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href = '/'>Home</Link>
                </li>
                <li>
                    <Link href = '/explore'>Explore</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav