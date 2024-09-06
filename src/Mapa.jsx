import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

function Mapa() {
    
    const position = [-25.4248519,-49.2724046,15]

  return (
    <>
    <div className={style.wrapBtns}>
      <button><a href='/produtos'>Produtos</a></button>
      <button><a href='/api'>API</a></button>
      <button><a href='/mapa'>Mapa</a></button>
      <button><a href='/graficos'>Gráficos</a></button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
        <>
      <h2>Mapa</h2>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'80%', height: '600px', margin: '20px'}}>
              <TileLayer
                attribution='&copy; <a href="https://maps.app.goo.gl/VN8m4ndLG48Kn5MX9">Google Maps</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <a target='_blank' href="https://maps.app.goo.gl/VN8m4ndLG48Kn5MX9">Google Maps</a>
                </Popup>
              </Marker>
            </MapContainer>,
          </div>
         </>
    </div>
    </>
  )
}

export default Mapa
