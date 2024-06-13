import React from 'react'
import '../../../styles/fontdetail/footer.css'
const Fotter = () => {
    return (
        <div className="container-footer">
            <div className="footer">
                <div className="first">
                    <span className='bold'>Connect</span>
                    <form action="">
                        <input type="text" />
                        <span>Subscribe</span>
                    </form>
                    <ul>
                        <li>Follow us on Instagram</li>
                        <li>Follow us on Facebook</li>
                        <li>Follow us on Twitter</li>
                    </ul>
                </div>
                <div className="second">
                    <span className='bold'>We accept</span>
                    <ul>
                        <li>visa</li>
                        <li>mastercard</li>
                        <li>payPal</li>
                    </ul>
                </div>
                <div className="third">
                    <span className='bold'>Sell</span>
                    <ul>
                        <span>Become a Foundry partner</span>
                        <span>Become an Affiliate</span>
                    </ul>
                </div>
                <div className="fourth">
                    <span className='bold'>About</span>
                    <ul>
                        <span>Terms and Conditions</span>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Return Policy</span>
                        <span>Legal</span>
                        <span>About</span>
                    </ul>
                </div>

                <div className="fifth">
                    <span className='bold'>Help</span>
                    <ul>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fotter