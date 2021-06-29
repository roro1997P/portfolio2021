import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52490.97064321531!2d-58.59891535925518!3d-34.68788201508551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc622f9709805%3A0xb5f373c7721a50a5!2sSan%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1621522720078!5m2!1ses-419!2sar" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" title="map" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+011 26676029'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'PachecoRodrigo97@hotmail.com'} text2={'ropacheco@uade.edu.ar'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Buenos Aires, San Justo'} text2={'Argentina'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
