import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = ({ target: { name, value } }) => { setForm({ ...form, [name]: value }) }
    // service_tf3y5te

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            await emailjs.send(
                "service_tf3y5te",
                "template_bclx8uk",
                {
                    from_name:form.name,
                    to_name:"SRIJAN",
                    from_email:form.email,
                    to_email:"srijanpatel911@gmail.com",
                    message:form.message
    
                },
                "C_QYtk5I6w_34ZdQ6"
            )
            setLoading(false)
            alert("Your message has been sent!")
            setForm({
                name: "",
                email: "",
                message: ""
            })

        }
        catch(error){
            setLoading(false)
            console.log(error)
            alert("Something went wrong!")



        }

    }
    return (
        <section className='c-space my-20' id='contact' >
            <div className="relative min-h-screen  flex items-center justify-center flex-col bg-image ">
                {/* <img className='absolute left-auto inset-0 min-h-screen' src="/assets/contact-bg.jpeg" alt="terminal background" /> */}
                {/* <iframe className='absolute top-0 left-0 -z-10 ' src="https://assets.pinterest.com/ext/embed.html?id=2603712275987660" height="714" width="345" frameborder="0" scrolling="no" ></iframe> */}
                <video autoPlay loop muted className='video-bg-container' src="assets/co-bg.mp4" type="video/mp4"></video>
                <div className="contact-container relative ">
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>Whether you are looking to build a new website , improve your existing paltform or have some crazy idea, I'm here to help...  </p>
                    <form className='mt-12 flex flex-col space-y-7 ' ref={formRef} onSubmit={handleSubmit} >
                        <label space-y-3>
                            <span className='field-label'>Full Name</span>
                            <input type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Srijan Patel'
                            />
                        </label>
                        <label space-y-3>
                            <span className='field-label'>Email</span>
                            <input type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='srijanpatel@gmail.com'
                            />
                        </label>
                        <label space-y-3>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi ,I want to work with you on ..."
                            ></textarea>
                        </label>

                        <button className='field-btn' type='submit' disabled={loading} >
                            {loading ? "Sending..." : "Send Message"}
                            <img className='field-btn_arrow' src="/assets/arrow-up.png" alt="arrow-up" />
                        </button>

                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact
