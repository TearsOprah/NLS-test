import logoImg from '../../assets/logo.png';
import phoneImg from '../../assets/phone_icon.png';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <header className={'header'}>
      <div className={'header__branding'}>
        <a href={'/'}><img className={'header__logo'} src={logoImg} alt={'webstore logo'}/></a>
        <div className={'header__contacts'}>
          <div className={'header__phone-block'}>
            <img className={'header__phone-icon'} src={phoneImg} alt={'phone icon'}/>
            <p className={'header__phone'}>+7 (495) 926-01-26</p>
          </div>
          <button className={'button'}>Заказать сайт</button>
        </div>
      </div>
      <nav className={'navigation'}>
        <ul className={'header__links'}>
          <li><NavLink className={'header__link'} exact={''} to="/" activeclassname="active">КОМПАНИЯ</NavLink></li>
          <li><NavLink className={'header__link'} to="/services" activeclassname="active">УСЛУГИ</NavLink></li>
          <li><NavLink className={'header__link'} to="/works" activeclassname="active">РАБОТЫ</NavLink></li>
          <li><NavLink className={'header__link'} to="/contacts" activeclassname="active">КОНТАКТЫ</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
