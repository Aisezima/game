
import gamePride from '../../assests/icons/GrayGamePride.png'
import classes from './Footer.module.css'
import expandLess  from '../../assests/icons/expandLess.png'
const Footer  = () => {
    return(
        <footer className={classes.footer}>
            
            <div className={classes.game}>
                <img src={gamePride} alt="gamePride" />
                <h4>GAME  PRIDE</h4>
            </div>
        <h5>ВСЕ ПРАВА ЗАЩИЩЕНЫ  2021</h5>
            <a href="INFO@GMAIL.COM">INFO@GMAIL.COM</a>
            <div className={classes.container} >
                <hr />
                <p>ГЛАВНАЯ</p>
                <hr />
                <p>СРАЖЕНИЯ</p>
                <hr />
                <p>ЧАВО </p>
                <hr />
                <p>НОВОСТИ</p>
                
            </div>
            <div className={classes.enter}>
                    <img src={expandLess} alt="ExpendLess" />
                    <button>GO TO TOP</button>
                </div>
        </footer>
    )
}

export default Footer