import React from 'react';
import './contactIcons.scss';
import IconBtn from '../iconBtn/IconBtn';
import { contacts } from '../../constants/contacts';

function ContactIcons() {

   return (
      <div className="contacts">
         {contacts.map((item, index) => (
            <IconBtn item={item} key={index} />
         ))
         }
      </div>
   )
}

export default ContactIcons