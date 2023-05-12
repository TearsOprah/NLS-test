import './Footer.scss'
import mapImg from '../../assets/map.png'

export default function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'footer__content'}>
        <div className={'footer__left-block'}>
          <div className={'footer__item'}>
            <p>Адрес:</p>
            <p className={'footer__address'}>г. Москва,<br /> ул. Дербеневская, дом 1, строение 6, подъезд 4, этаж 2.</p>
          </div>
          <div className={'footer__item'}>
            <p>Телефоны:</p>
            <p>+7 (495) 926-01-26<br />+7 (495) 646-00-94</p>
          </div>
        </div>
        <div className={'footer__right-block'}>
          <div className={'footer__item'}>
            <p>E-mail:</p>
            <p className={'footer__email'}>info@nologostudio.ru</p>
          </div>
          <div className={'footer__item'}>
            <p>Skype:</p>
            <p>alex-trainer</p>
          </div>
          <p className={'footer__item'}>© 1997-2014 WebStore</p>
        </div>
      </div>
      <img className={'footer__map-image'} src={mapImg} alt={'map'}/>
    </footer>
  )
}
