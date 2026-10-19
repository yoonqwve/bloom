import s from './Banner.module.css'
import bannerImg from '../../assets/banner.png'

export function Banner() {
    return (
        <main className="container">
            <div className={s.osnovabanner}>
                <div className={s.bannerphoto}>
                    <img
                        src={bannerImg} 
                        alt="Баннер с акцией"
                        loading="lazy"
                    />
                </div>
                <div className={s.bannercontent}>
                    <div className={s.zagl}>
                        <p>Бьюти-сейл: до -50% на всё!</p>
                    </div>
                    <div className={s.niz}>
                        <div className={s.podzagl}>
                            <p>Успей забрать любимые бренды по лучшим ценам. Акция до конца недели.</p>
                        </div>
                        <div className={s.bannerknop}>
                            <a href="#">перейти в каталог</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}