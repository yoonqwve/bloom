import s from './Header.module.css'
import logoImg from '../../assets/logo.png'

export function Header() {
    return (
        <header className="container2">
            <div className="container">
                <div className={s.head}>
                    <div className={s.logo}>
                        <img
                            src={logoImg}
                            alt="Логотип Bloom"
                            loading="lazy"
                        />
                    </div>
                    <div className={s.right}>
                        <nav>
                            <a href="#">Главная</a>
                            <a href="#">Каталог</a>
                            <a href="#">Корзина</a>
                        </nav>
                        <div className={s.icon}>
                            <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="stroke0_2014_254" fill="white">
                                    <path
                                        d="M27.3437 10C27.3437 15.5228 22.6917 20 16.9531 20C11.2145 20 6.5625 15.5228 6.5625 10C6.5625 4.47715 11.2145 0 16.9531 0C22.6917 0 27.3437 4.47715 27.3437 10Z"
                                    />
                                </mask>
                                <path
                                    d="M27.3437 10C27.3437 15.5228 22.6917 20 16.9531 20C11.2145 20 6.5625 15.5228 6.5625 10C6.5625 4.47715 11.2145 0 16.9531 0C22.6917 0 27.3437 4.47715 27.3437 10Z"
                                    strokeWidth="4"
                                    stroke="black"
                                    mask="url(#stroke0_2014_254)"
                                />
                                <mask id="stroke1_2014_254" fill="white">
                                    <path
                                        d="M0 33.2106C0 26.496 5.44327 21.0527 12.1579 21.0527H22.8421C29.5567 21.0527 35 26.496 35 33.2106V36.8421H0V33.2106Z"
                                    />
                                </mask>
                                <path
                                    d="M35 36.8421V33.2106C35 26.496 29.5567 21.0527 22.8421 21.0527H12.1579C5.44327 21.0527 0 26.496 0 33.2106V36.8421H35Z"
                                    strokeWidth="4"
                                    stroke="black"
                                    mask="url(#stroke1_2014_254)"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}