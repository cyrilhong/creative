import React from 'react';
import styled from 'styled-components/macro';
import { useWindowSize, isDesktop } from '../../hooks'
import * as colors from 'styles/colors';
import GoogleMapReact from 'google-map-react';
import pin from './assets/pin.png'
import { A } from 'app/components/A';
const demoFancyMapStyles = require("./demoFancyMapStyles.json");

export default function Map() {
  const windowWidth = useWindowSize().width
  return (
    <Wrapper>
      <GoogleMapReact
        // bootstrapURLKeys={'AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec'}
        bootstrapURLKeys={{ key: 'AIzaSyBL9QUt86DVZO7leGNfwGz1yoLKLwQL8HE' }}
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
        defaultZoom={15}
      >
        <div
          lat={25.082023606446363}
          lng={121.55828809838637}
        >
          <a href="https://goo.gl/maps/rrB6W84nUPu3FQ8v9" target={"_blank"}><img style={{ display: 'block', width: '60px', height: '76px', marginTop: '-30px', marginLeft: '-38px' }} className='pin' src={pin} alt="pin" /></a>
          {/* {windowWidth.width > 960 ? <a href="https://goo.gl/maps/rrB6W84nUPu3FQ8v9" target={"_blank"}><img style={{ display: 'block', width: '60px', height: '76px', marginTop: '-30px', marginLeft: '-38px' }} className='pin' src={pin} alt="pin" /></a> :
            <a href="https://goo.gl/maps/rrB6W84nUPu3FQ8v9" target={"_blank"}><img style={{ display: 'block', width: '28px', height: '35px', marginTop: '-14px', marginLeft: '-17px' }} className='pin' src={pin} alt="pin" /></a>} */}
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


