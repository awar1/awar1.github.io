import React from 'react'
import people from '../assets/bar.png'
function Offer(props) {
  return (
    <main className={props.dark ? "dark": ""}>
    <div className='content--about'>
        <div className='info offer'>
            <h1>Oferujemy</h1>
            <p>Mobilny bar – elegancki, gustowny, ustawny, w pełni wyposażony.
            Zawodowi barmani – wiedza, umiejętności, 
            doświadczenie, prezencja, uśmiech na twarzy.
            </p>
            <p>Alkohole – markowe, wyselekcjonowane. 
                Menu smaków zamiast zamkniętej karty drinków.</p>
            <p>Szkło – eleganckie, efektowne, w różnych wariantach.</p>
            <p>Dojazd – na terenie całego kraju w jednej cenie.</p>
            <p>Lód – kruszony, w kostkach, suchy lód.</p>
            <p>Dodatki – owoce, przyprawy, zioła, syropy, napoje, soki, słomki, dekoracje…</p>
        </div>
        <img src={people} />
        </div>
    </main>
  )
}

export default Offer
