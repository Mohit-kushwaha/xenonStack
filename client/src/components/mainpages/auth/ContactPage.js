import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'

function ContactPage()
{
    const [user, setUser] = useState({
        name: '', email: '', suggesstion: ''
    })

    const onChangeInput = e =>
    {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const SubmitHandler = async e =>
    {
        e.preventDefault()
        try
        {
            console.log("working");
            await axios.post('/api/contact', { ...user })
            alert('Your suggestion Has been submitted')


            window.location.href = "/";
        } catch (err)
        {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={SubmitHandler}>
                <h2>FeedBack Form</h2>
                <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />

                <textarea type="text" name="suggesstion" required autoComplete="off" rows="4" cols="50"
                    placeholder="Type your Sugestion" value={user.suggesstion} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Submit</button>
                    {/* <Link to="/login">Login</Link> */}
                </div>
            </form>
        </div>
    )
}

export default ContactPage