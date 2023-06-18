import React from 'react'
import people from '../assets/bar.png'
function About(props) {
  return (
    <main className={props.dark ? "dark": ""}>
      <div className='content--about'>
      <div className='info'>
            <h1>Jak się zaczęło</h1>
            <p>Pomysł na powstanie drinkbarów zrodził się 
                już prawie 20 lat temu, w 2004 roku. 
                Jego genezą była potrzeba stworzenia
                    efektownej oprawy dla wszystkiego, co 
                    dzieje się przy barze podczas różnego 
                    rodzaju imprez i eventów.</p>
            <p>Wkrótce zaczęliśmy więc projektować i 
                budować nasze mobilne bary, dobierać i 
                szkolić wyselekcjonowany personel oraz 
                pracować nad formułami drinków i sposobem 
                ich ekspozycji.</p>
            <p>„Pomyśleliśmy: hej, dlaczego nie spróbować 
                zamienić zwykłego drinka z sokiem na małe 
                arcydzieło sztuki barmańskiej? Dlaczego nie 
                sprawić, żeby nawet tak prozaiczna czynność, 
                jak zamawianie drinka na imprezie stała się 
                ekscytująca?”</p>
                <p>„Jeżeli chcemy, by organizowana przez nas impreza została na długo zapamiętana jako ekscytujące wydarzenie, to trzeba pamiętać, że powinniśmy dopracować każdy szczegół, w tym też sposób, w jaki podamy napoje naszym Gościom.”</p>
        </div>
        <img src={people} />
      </div>
    </main>
  )
}

export default About
