export const AddressSection=()=>{
    return(
      <>
        <h1
          style={{
            fontFamily: '"Factor IO", Arial, sans-serif',
            textAlign: 'center'
          }}
        >
          Наш адрес:
        </h1>
  
        <div id="map"></div>
  
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '1200px',
            margin: 'auto',
            marginTop: '3%'
          }}
        >
          <a
            href="https://yandex.ru/maps/1107/anapa/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: 0,
            }}
          >
            Анапа
          </a>
          <a
            href="https://yandex.ru/maps/1107/anapa/house/ulitsa_magnolii_21s2/Z04YdQVlSUUOQFpufXR3eH1gYw==/?ll=37.325009%2C44.869138&utm_medium=mapframe&utm_source=maps&z=16.7"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
          >
            Улица Магнолии, 21с2 — Яндекс Карты
          </a>
  
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.325009%2C44.869138&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MzU0MjczNTg2EmHQoNC-0YHRgdC40Y8sINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQkNC90LDQv9CwLCDRg9C70LjRhtCwINCc0LDQs9C90L7Qu9C40LgsIDIx0YEyIgoNz0wVQhUAejNC&z=16.7"
            width="100%"
            height="550"
            frameBorder="1"
            allowFullScreen
            style={{
              position: 'relative',
              display: 'block',
              border: 'none',
              borderRadius: '10px'
            }}
            title="Карта Яндекс"
          ></iframe>
        </div>
      </>
    )
}
  