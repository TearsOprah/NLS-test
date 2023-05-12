import './Footer.scss'
import mapImg from '../../assets/map.png'
export default function Footer() {
  return (
    <footer className={'footer'}>
      <img className={'footer__map-image'} src={mapImg} alt={'map'}/>
    </footer>
  )
}
