import classes from './Footer.module.scss';

import { Nav } from '@/components/Nav';
import { Contacts } from '@/components/Contacts';

const about = [
    { id: 1, title: 'Партнёрская программа', link: '#' },
    { id: 2, title: 'Вакансии', link: '#' },
];

const menuLeft = [
    { id: 1, title: 'Расчёт стоимости', link: '#' },
    { id: 2, title: 'Услуги', link: '#' },
    { id: 3, title: 'Виджеты', link: '#' },
    { id: 4, title: 'Интеграции', link: '#' },
    { id: 5, title: 'Наши клиенты', link: '#' },
];

const menuRight = [
    { id: 1, title: 'Кейсы', link: '#' },
    { id: 2, title: 'Благодарственные письма', link: '#' },
    { id: 3, title: 'Сертификаты', link: '#' },
    { id: 4, title: 'Вопрос / Ответ', link: '#' },
];

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper}>
                <section>
                    <h2>О компании</h2>
                    <Nav menu={about} />
                </section>
                <section>
                    <h2>Меню</h2>
                    <div className={classes.footer__menu}>
                        <Nav menu={menuLeft} />
                        <Nav menu={menuRight} />
                    </div>
                </section>
            </div>
            <section className={classes.footer__contacts}>
                <h2>Контакты</h2>
                <Contacts>
                    <br /> Москва, Путевой проезд 3с1, к 902
                </Contacts>

                <div className={classes.footer__copyright}>
                    &copy;WELBEX 2022. Все права защищены.
                    <br />
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </section>
        </footer>
    );
};
