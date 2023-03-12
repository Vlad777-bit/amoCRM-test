import classes from './Header.module.scss';

import LogoIcon from '@/assets/logo_welbex.svg';
import { Nav } from '@/components/Nav';
import { Contacts } from '@/components/Contacts';

const menu = [
    { id: 1, title: 'Услуги', link: '#' },
    { id: 2, title: 'Виджеты', link: '#' },
    { id: 3, title: 'Интеграции', link: '#' },
    { id: 4, title: 'Кейсы', link: '#' },
    { id: 5, title: 'Сертификаты', link: '#' },
];

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <LogoIcon />
                <p>
                    крупный интегратор CRM <br /> в России и ещё 8 странах
                </p>
            </div>

            <Nav menu={menu} className={classes.header__menu} />

            <Contacts className={classes.header__contacts} />
        </header>
    );
};
