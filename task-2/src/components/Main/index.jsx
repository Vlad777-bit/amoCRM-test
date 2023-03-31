import classes from './Main.module.scss';

const offers = [
    { id: 1, title: 'Виджеты', desc: '30 готовых решений' },
    { id: 2, title: 'Dashboard', desc: 'с показателями вашего бизнеса' },
    { id: 3, title: 'Skype Аудит', desc: 'отдела продаж и CRM системы' },
    { id: 4, title: '35 дней', desc: 'использования CRM' },
];

const offersAdaptive = [
    { id: 1, title: 'Skype аудит' },
    { id: 2, title: '30 виджетов' },
    { id: 3, title: 'Dashboard' },
    { id: 4, title: 'Месяц аmoCRM' },
];

export const Main = () => {
    return (
        <main className={classes.content}>
            <hgroup className={classes.content__title}>
                <h1>
                    Зарабатывайте <br /> больше
                </h1>
                <h2>с WELBEX</h2>
                <p>
                    Развиваем и контролируем <br /> продажи за вас
                </p>
            </hgroup>

            <section className={classes.content__offers}>
                <h2>
                    Вместе с <span>бесплатной</span> <br />{' '}
                    <span>консультацией</span> мы дарим:
                </h2>
                <div className={classes.content__offers_wrapper}>
                    {offers.map((el) => (
                        <div key={el.id}>
                            <h3>{el.title}</h3>
                            <p>{el.desc}</p>
                        </div>
                    ))}
                </div>

                <div className={classes.content__offers_adaptive}>
                    {offersAdaptive.map((el) => (
                        <h3 key={el.id}>{el.title}</h3>
                    ))}
                </div>
                <button className={classes.content__button}>
                    Получить консультацию
                </button>
            </section>
        </main>
    );
};
