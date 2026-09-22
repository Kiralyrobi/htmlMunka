export default function OraCard({oraSzam, cim, children, onKartyaTorles, onKartyaSzerkeszt}) {
    return( <article className="ora">
          <header>
            <h3>{oraSzam}. óra</h3>
            <button className="icon-button" onClick={()=>onKartyaSzerkeszt(oraSzam)}>📝</button>
            <button className="icon-button" onClick={()=>onKartyaTorles(oraSzam)}>🗑️</button>
          </header>
          <h4>{cim}</h4>
          <p>{children}</p>
        </article>
    )
}            