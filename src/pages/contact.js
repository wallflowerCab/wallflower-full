import * as React from 'react'
import {Holder, Text, FormHold} from '~/styles/contactStyles.js'
import ContactForm from '~/components/contactForm/contactForm'

const ContactPage = () => {
  return(
    <Holder>
      <Text>
      <h2>Get in Touch!</h2>
      <h4>We create beautiful cabinetry that is designed, crafted, and installed to the specific needs of each space. If you have a space in need of custom cabinet solutions, we’d love to help.</h4>
      </Text>
      <FormHold><ContactForm/></FormHold>
    </Holder>
  )
}

export default ContactPage
