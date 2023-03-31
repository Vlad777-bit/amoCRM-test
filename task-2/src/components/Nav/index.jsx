import classes from './Nav.module.scss';
import cn from 'classnames';

export const Nav = ({ menu, ...props }) => {
    return (
        <nav className={cn(classes.nav, props.className)}>
            <ul className={classes.nav__menu}>
                {menu.map((el) => (
                    <li key={el.id}>
                        <a href={el.link}>{el.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
