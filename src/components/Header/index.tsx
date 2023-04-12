import styles from './Header.module.css'
import Image from 'next/image'
import Logo from '@/assets/fxn.png'
import BlogIcon from '@/assets/blog-icon.svg'
import ArrowIcon from '@/assets/arrow-icon.svg'

export default function Header() {
    return (
        <header>
            <a href='#'>
                <Image src={Logo} alt='logo' className={styles.logo} />
            </a>
            <nav>
                <ul>
                    <li>Antecipação</li>
                    <li>Como funciona</li>
                    <li>Conta Digital</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>
                <div>
                    <a href='#'>
                        <Image
                            src={BlogIcon}
                            alt='blog'
                        />
                        Nosso blog
                    </a>
                    <a href="#" className={styles.arrow}>
                        Antecipar agora
                        <Image
                            src={ArrowIcon}
                            alt='arrow'
                        />
                    </a>
                </div>
            </nav>
        </header>
    )
}