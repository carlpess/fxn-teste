import styles from './HeroSection.module.css'
import Image from 'next/image'
import CardOne from '@/assets/card1.svg'
import CardTwo from '@/assets/card2.svg'
import CardTree from '@/assets/card3.svg'
import CardIcon from '@/assets/icon-card4.png'
import creditIcon from '@/assets/credit-icon.svg'
import BannerImage from '@/assets/image-banner-nova.png'


export default function HeroSection() {
    return (
        <section>
            <div>
                <div className={styles.leftText}>
                    <span>
                        BEM-VINDO(A) À FXN CAPITAL!
                    </span>
                    <h1>
                        Use no presente  um dinheiro que só chegaria no futuro
                    </h1>
                    <p>
                        Antecipe o recebimento de vendas a prazo para pagar dívidas, gerar fluxo de caixa ou investir na empresa.
                    </p>
                    <div>
                        <button>
                            <Image src={creditIcon} alt='credit' />
                            Simule seu crédito
                        </button>
                        <span>💰  É rápido e fácil!</span>
                    </div>
                </div>

                <div className={styles.rightImages}>
                    <Image src={BannerImage} alt='banner' />
                    <div>
                        <Image src={CardOne} alt='card' />
                    </div>
                    <Image src={CardTwo} alt='card2' />
                    <Image src={CardTree} alt='card3' />
                    <div>
                        <Image src={CardIcon} alt='card-icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}