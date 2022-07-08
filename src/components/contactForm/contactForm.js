import React from "react"
import {useForm} from "react-hook-form";
import {Form, Check, Submit, CheckText, FormHead, SubmitHold} from './styles'
import {Helmet} from 'react-helmet'
import GlobalStyle from "~/styles/globalStyles"

const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => console.log(data);

 console.log(watch("Agreement")); // watch input value by passing the name of it
// action="https://getform.io/f/aaf92a3c-1ae8-4344-a4f2-56612a467001" method="POST" accept-charset="UTF-8"
  return(
    <div>
    <Helmet>
   <script src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`} async defer>
   </script>
   <GlobalStyle/>
 </Helmet>
    <Form action="https://getform.io/f/3b16df00-7455-4c31-98bd-7ae97a10a451" method="POST" accept-charset="UTF-8">
       <input type="text" name="firstName" placeholder="First name" required="required"/>
       <input type="text" name="lastName" placeholder="Last name" required="required" />
       <input type="text" name="email" placeholder="Email" required="required" />
       <select {...register("I am a")}>
        <option value="" disabled selected>I am a...</option>
         <option value="Contractor">Contractor</option>
         <option value=" Homeowner"> Homeowner</option>
         <option value=" Interior Designer"> Interior Designer</option>
         <option value=" Other"> Other</option>
       </select>
       <p>Message</p>
       <textarea {...register("Message", {})} />

       <Check>
       <input type="checkbox" placeholder="Agreement" required="required" />
       <CheckText>I accept that Wall Flower will contact me using the information in this form. *</CheckText>
       </Check>
       <SubmitHold>
       <div class="g-recaptcha" data-sitekey="6LeT6KQgAAAAAHC-aulByBKft0b-U6jPBIAAhWkz" />
       <Submit type="submit" />
       </SubmitHold>
     </Form>
     </div>
  )
}

export default ContactForm
