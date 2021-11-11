import styles from '../styles/Contact.module.css'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useRef } from 'react'



const Contact = () => {
    const { reset, register, handleSubmit } = useForm()
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eaw9u1k', 'template_8iqeunp', form.current, 'user_MlkADPe5TE1xFR4A9NUYG')
            .then((result) => {
                console.log(result.text);
                alert('Submitted')
            }, (error) => {
                console.log(error.text);
            });


    }

    return (
        <div className={styles.contactContainer}>
            {/* <form ref={form} onSubmit={handleSubmit(sendEmail)}> */}
            <h1 className={styles.title}>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputText}>
                    <input type="text" placeholder='Name' id='name' name='user_name' />
                </div>
                <div className={styles.inputText}>
                    <input type="email" id='email' placeholder="Email" name='user_email' />
                </div>
                <div className={styles.messageInput}>
                    <textarea type="text" id='message' placeholder='Message for Me' name='message' />
                </div>
                <input type="submit" className={styles.button} />
            </form>
        </div>
    )
}

export default Contact



