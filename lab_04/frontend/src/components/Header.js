import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'

export default function Header(props){
    return(
        <nav className={props.dark?"dark":""}>
            <img src={props.dark?logoDark:logo} 
            className='nav--logo'/>
            <ul className='nav--items'>
                <a href='#' onClick={()=>props.setContent('info')}><li>O nas</li></a>
                <a href='#' onClick={()=>props.setContent('offer')}><li>Oferta</li></a>
                <a href='#' onClick={()=>props.setContent('coctails')}><li>Koktajle</li></a>
                <div className="switch">
                <label className="theme-switch" htmlFor="checkbox">
                    <input onClick={props.setDarkMode} 
                    type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
                </div>
            </ul>
        </nav>
    )
}