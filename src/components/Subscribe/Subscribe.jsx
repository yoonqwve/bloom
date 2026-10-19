import s from './Subscribe.module.css'

export function Subscribe() {
    return (
        <div className="container">
            <div className={s.podpiska}>
                <div className={s.podpiskatext}>
                    <div className={s.podpiskazagl}>
                        <p>Твой личный бьюти-гид</p>
                    </div>
                    <div className={s.podpiskapodzagl}>
                        <p>Разборы составов, подборки под твой тип кожи и лайфхаки от визажистов. Подпишись и получи гайд
                            «Идеальная кожа за 5 шагов» + скидку на уход.</p>
                    </div>
                </div>
                <div className={s.podpiskaforma}>
                    <form name="podpiska">
                        <input type="email" placeholder="адрес электронной почты" />
                        <button type="submit" name="podpiska">подписаться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}