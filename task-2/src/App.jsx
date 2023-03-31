import classes from './App.module.scss';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <div className={classes.container}>
            <div className={classes.container__redLight}></div>
            <div className={classes.container__redBall_small}></div>
            <div className={classes.container__purpleLight}></div>
            <div className={classes.container__purpleBall}></div>
            <div className={classes.container__redBall}></div>

            <Header />
            <Main />
            <Footer />
        </div>
    );
};
