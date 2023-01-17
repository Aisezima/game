import classes from './Main.module.css'
import close from '../../assests/icons/close-fill.png'
import Player from './Players'

const Main = () => {
    return(
        <main className={classes.texts}>
            <hr className={classes.blueLine} />
            <div>
                <h3>Создание сражения</h3>
                <p>Поиск игроков</p>
            </div>
            <div className={classes.input}>
                <p>Кайрат Кылычев</p>
                <img src={close}alt="closeIcon"/>
            </div>
            <Player/>
        </main>
    )
}
export default Main
