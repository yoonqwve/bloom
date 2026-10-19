import s from './Footer.module.css'
import logoImg from '../../assets/logo.png'

export function Footer() {
    return (
        <footer className="container2">
            <div className="container">
                <div className={s.footerr}>
                    <div className={s.logo}>
                        <img
                            src={logoImg}
                            alt="Логотип Bloom"
                            loading="lazy"
                        />
                    </div>
                    <nav>
                        <a href="#">Главная</a>
                        <a href="#">Каталог</a>
                        <a href="#">Корзина</a>
                    </nav>
                    <div className={s.line}></div>
                    <div className={s.prava}>
                        <p>© 2026 bloom. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}