import React, { FunctionComponent } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import classes from './ContactPage.module.scss';
import pinLogo from '../../icons/pin.svg';
import { ContactList } from '../../components/ContactList/ContactList';

export const ContactPage: FunctionComponent = () => {
  const myCoords = [55.752068564993, 37.61748330508703];
  return (
    <div className={classes.main}>
      <div className={classes.mapContainer}>
        <YMaps key={'en_US'} query={{ lang: 'en_US' }}>
          <Map
            className={classes.map}
            defaultState={{
              center: myCoords,
              zoom: 4,
            }}
            options={{ suppressMapOpenBlock: true, suppressObsoleteBrowserNotifier: true }}
          >
            <Placemark
              geometry={myCoords}
              options={{
                iconColor: '#f7c003',
                preset: 'islands#circleDotIcon',
                iconLayout: 'default#image',
                iconImageHref: pinLogo,
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48],
              }}
            />
          </Map>
        </YMaps>
      </div>
      <ContactList />
    </div>
  );
};
