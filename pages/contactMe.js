import styles from '../styles/Contact.module.css'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useRef } from 'react'



const Contact = () => {
    const { reset, register, handleSubmit } = useForm()
    const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_eaw9u1k', 'template_8iqeunp', form.current, 'user_MlkADPe5TE1xFR4A9NUYG')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     reset();

    // }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eaw9u1k', 'template_8iqeunp', form.current, 'user_MlkADPe5TE1xFR4A9NUYG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div className={styles.contactContainer}>
            {/* <form ref={form} onSubmit={handleSubmit(sendEmail)}> */}
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



/**
 c1d3fe
 b6ccfe
 abc4ff
 f4978e
 f08080
 */

/*
{
from_name: "Jatin",
to_name: "khushal ",
message: "congo",
email: "lavishgoyal@gmail.com",
reply_to: "patoni",
}
 */