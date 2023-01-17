import player1  from  '../../assests/images/Kairat.d.png'
import player2 from  '../../assests/images/Kairat.k.png'
import player3 from  '../../assests/images/Kairat.n.png'
import player4 from  '../../assests/images/Kairat.sh.png'
import player5 from  '../../assests/images/Kairat.t.png'
import classes  from './Players.module.css'
const Player = () => {
    return(
        <main className={classes.playersCont}>
            <div>
                <img src={player1} alt="kairat.d" />
                <p>Кайрат.Д</p>
                <span className={classes.round}>.</span>
                <li>appass1nato</li>
            </div>
            <div>
                <img src={player2} alt="kairat.k" />
                <p>Кайрат.K</p>
                <span className={classes.round}>.</span>
                <li>TRon</li>
            </div>
            <div>
                <img src={player3} alt="kairat.n" />
                <p>Кайрат.Н</p>
                <span className={classes.round}>.</span>
                <li>Foxy</li>
            </div>
            <div>
                <img src={player4} alt="kairat.Ш" />
                <p>Кайрат.Ш</p>
                <span className={classes.round}>.</span>
                <li>ОпАSныйВоЗраSт</li>
            </div>
            <div>
                <img src={player5} alt="kairat.т" />
                <p>Кайрат.Т</p>
                <span className={classes.round}>.</span>
                <li>Cr1stal</li>
            </div>
            <div>
                <img src={player1} alt="kairat.d" />
                <p>Кайрат.Д</p>
                <span className={classes.round}>.</span>
                <li>appass1nato</li>
            </div>
            <div>
                <img src={player2} alt="kairat.k" />
                <p>Кайрат.K</p>
                <span className={classes.round}>.</span>
                <li>TRon</li>
            </div>
            <div>
                <img src={player3} alt="kairat.n" />
                <p>Кайрат.Н</p>
                <span className={classes.round}>.</span>
                <li>Foxy</li>
            </div>
            <div>
                <img src={player4} alt="kairat.Ш" />
                <p>Кайрат.Ш</p>
                <span className={classes.round}>.</span>
                <li>ОпАSныйВоЗраSт</li>
            </div>
            <div>
                <img src={player5} alt="kairat.т" />
                <p>Кайрат.Т</p>
                <span className={classes.round}>.</span>
                <li>Cr1stal</li>
            </div>
            <hr  className={classes.line}/>


        </main>
    )
}

export default Player