import logoImg from '../../assets/logo.png';
import phoneImg from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={'header'}>
      <div className={'header__branding'}>
        <img className={'header__logo'} src={logoImg} alt={'webstore logo'}/>
        <div className={'header__contacts'}>
          <div className={'header__phone-block'}>
            <img className={'header__phone-icon'} src={phoneImg} alt={'phone icon'}/>
            <p className={'header__phone'}>+7(495)926-01-26</p>
          </div>
          <button className={'button'}>Заказать сайт</button>
        </div>
      </div>
      <nav className={'navigation'}>
        <ul className={'header__links'}>
          <li>КОМПАНИЯ</li>
          <li>УСЛУГИ</li>
          <li>РАБОТЫ</li>
          <li>КОНТАКТЫ</li>
        </ul>
      </nav>
    </header>
  )
}
