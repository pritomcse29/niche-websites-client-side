import React from "react";
import Footer from "../Footer/Footer";
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">CONTACT INFO</h1>


                <h1 className="text-center">For Message US</h1>

                <div className="style-message">
                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon1">Full Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>




                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon3">Email Adress</span>
                        <input type="email" class="form-control" placeholder="User Email" id="basic-url" aria-describedby="basic-addon3" />
                    </div>

                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon3">Contact Number</span>
                        <input type="tel" class="form-control" placeholder="Contact Number" id="basic-url" aria-describedby="basic-addon3" />
                    </div>

                    <div class="input-group container">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button className="message-us">Submit</button>
                </div>

            </div>

        </div>
    );
};

export default Contact;