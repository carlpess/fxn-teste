import styles from './Header.module.css'
import Image from 'next/image'
import Logo from '@/assets/fxn.png'
import BlogIcon from '@/assets/blog-icon.svg'
import ArrowIcon from '@/assets/arrow-icon.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <a href="#">
                    <Image src={Logo} alt='logo' className={styles.logo} />
                </a>
                <nav className={styles.containerNavIN}>
                    <ul>
                        <li>Antecipação</li>
                        <li>Como funciona</li>
                        <li>Conta Digital</li>
                        <li>Sobre nós</li>
                        <li>Contato</li>
                    </ul>
                    <div className={styles.btns}>
                        <a href="#" className={styles.blog}>
                            <Image
                                src={BlogIcon}
                                alt='blog'
                                className={styles.blogImage}
                                width={23}
                                height={23}
                            />
                            Nosso blog
                        </a>
                        <a href="#" className={styles.arrow}>
                            Antecipar agora
                            <Image
                                src={ArrowIcon}
                                alt='arrow'
                                className={styles.arrowImage}
                                width={23}
                                height={23}
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}