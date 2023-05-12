import './About.scss'
import macImg from '../../assets/iMac.png'
export default function About() {
  return (
    <div className={'about'}>
      <div className={'intro'}>
        <div className={'intro__info'}>
          <h1 className={'intro__title'}>Корпоративный<br />сайт</h1>
          <p className={'intro__message'}>от<label><br />50 000</label><br />рублей</p>
          <button className={'button intro__button'}>Заказать сайт</button>
        </div>
        <img className={'intro__image'} src={macImg} alt={'iMac'}/>
      </div>
      <div className={''}>

      </div>
    </div>
  )
}
