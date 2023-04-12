import styles from './HeroSection.module.css'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import CardOne from '@/assets/card1.svg'
import CardTwo from '@/assets/card2.svg'
import CardTree from '@/assets/card3.svg'
import CardIcon from '@/assets/icon-card4.png'
import creditIcon from '@/assets/credit-icon.svg'
import BannerImage from '@/assets/image-banner-nova.png'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function HeroSection() {
    return (
        <section>
            <div className={styles.containerHero}>
                <div className={styles.leftText}>
                    <span className={styles.welcomeText}>BEM-VINDO(A) À FXN CAPITAL!</span>
                    <h1 className={montserrat.className}>
                        Use no presente  um dinheiro que só chegaria no futuro
                    </h1>
                    <p>
                        Antecipe o recebimento de vendas a prazo para pagar dívidas, gerar fluxo de caixa ou investir na empresa.
                    </p>
                    <div className={styles.info}>
                        <button>
                            <Image src={creditIcon} alt='credit' />
                            Simule seu crédito
                        </button>
                        <span>💰  É rápido e fácil!</span>
                    </div>
                </div>

                <div className={styles.rightImages}>
                    <Image src={BannerImage} alt='banner' className={styles.bannerImage} />
                    <div className={styles.card}>
                        <Image src={CardOne} alt='card' />
                    </div>
                    <Image src={CardTwo} alt='card2' className={styles.card2} />
                    <Image src={CardTree} alt='card3' className={styles.card3} />
                    <div className={styles.cardIcon}>
                        <Image src={CardIcon} alt='card-icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}