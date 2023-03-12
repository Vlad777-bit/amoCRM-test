import classes from './Contacts.module.scss';
import cn from 'classnames';

import TelegramIcon from '@/assets/telegram.svg';
import ViberIcon from '@/assets/viber.svg';
import WhatsappIcon from '@/assets/whatsapp.svg';

export const Contacts = ({ children, ...props }) => {
    return (
        <address className={cn(classes.contacts, props.className)}>
            <a href="tel:85555555555">+7 555 555-55-55</a>

            <div>
                <a href="#">
                    <TelegramIcon />
                </a>
                <a href="#">
                    <ViberIcon />
                </a>
                <a href="#">
                    <WhatsappIcon />
                </a>
            </div>

            {children}
        </address>
    );
};
