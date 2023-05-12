import './About.scss'
import macImg from '../../assets/iMac.png'
import noteImg from '../../assets/Notebook.png'
import cameraImg from '../../assets/Camera.png'

export default function About() {
  return (
    <div className={'about'}>
      <div className={'intro'}>
        <div className={'intro__content'}>
          <div className={'intro__info'}>
            <h1 className={'intro__title'}>Корпоративный<br />сайт</h1>
            <p className={'intro__message'}>от<label><br />50 000</label><br />рублей</p>
            <button className={'button intro__button'}>Заказать сайт</button>
          </div>
          <img className={'intro__image'} src={macImg} alt={'iMac'}/>
        </div>
      </div>
      <div className={'company'}>
        <div className={'company__content'}>
          <div className={'company__info'}>
            <h2 className={'company__title'}>О компании</h2>
            <p className={'company__description'}><label>Web<label>Store</label></label> — многопрофильная студия дизайна, основанная в 2006 году. За эти годы мы успели поработать
              в разных направлениях, реализовали множество проектов, достигли профессиональных высот и собрали внушительное портфолио.
              <br />Сегодня мы сосредоточились на том, что нам по-настоящему нравится: дизайн и разработка веб-сайтов
              и мобильных приложений.
              <br /><br />
              Мы гордимся своей замечательной командой по-настоящему талантливых людей: дизайнеров, программистов, менеджеров, тестировщиков, проектировщиков. Все сотрудники <label>Web<label>Store</label></label> работают в штате, поэтому мы гарантируем, что весь комплекс работ по разработке, созданию, поддержке и продвижению сайтов выполняется строго профессионально
              и качественно.
              <br /><br />
              Мы уверены, что хорошая, чёткая и последовательная разработка имеет большое значение для эффективного маркетинга. Поэтому предлагаем высококачественный дизайн, удобство и функциональность, адаптированные под каждого клиента в зависимости от его потребностей
              и поставленных бизнес-задач.</p>
          </div>
          <div className={'company__images'}>
            <img src={cameraImg} className={'company__image'} alt={'camera'} />
            <img src={noteImg} className={'company__image'} alt={'notebook'} />
          </div>
        </div>
      </div>
    </div>
  )
}
