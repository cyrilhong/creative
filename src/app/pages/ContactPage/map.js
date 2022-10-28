import React from 'react';
import styled from 'styled-components/macro';
import * as colors from 'styles/colors';
import GoogleMapReact from 'google-map-react';
import pin from './assets/pin.png'
const demoFancyMapStyles = require("./demoFancyMapStyles.json");

export default function Map() {

  return (
    <Wrapper>
      <GoogleMapReact
        // bootstrapURLKeys={'AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec'}
        bootstrapURLKeys={{ key: 'AIzaSyDB_z6YYnPrZe43X_kfjBTjarxqY-kinWk' }}
        defaultCenter={{
          lat: 25.08067881152031,
          lng: 121.55802049834605,
        }}
        options={{
          styles: demoFancyMapStyles,
          fullscreenControl: false,
          zoomControl: false,
          keyboardShortcuts: false,
        }}
        defaultZoom={13}>
        <div
          lat={25.08067881152031}
          lng={121.55802049834605}
        >
          <img style={{ display: 'block', width: '60px', height: '76px', marginTop: '-30px', marginLeft: '-38px' }} className='pin' src={pin} alt="pin" />
        </div>
      </GoogleMapReact>

    </Wrapper>
  );
}




const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  .gm-style-cc{
    display: none;
  }
  .gmnoprint a, .gmnoprint span {
    display:none;
  }
  .gmnoprint div {
      background:none !important;
  }
  #GMapsID div div a div img{
      display:none;
  }
`;


