import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
            <span>9ce <span>bet</span></span>
            <span><i class="fa-solid fa-arrow-up"></i></span>
        </div>
        <div className='info'><span>Responsible Gambling</span> <span>Contact Us</span> <span>Help</span> <span>T&C'S</span></div>
        <div className='payment-icons'>
            <span><i class="fa-brands fa-cc-visa"></i></span>
            <span><i class="fa-brands fa-cc-mastercard"></i></span>
            <span><i class="fa-brands fa-cc-paypal"></i></span>
            <span><i class="fa-brands fa-paypal"></i></span>
            <span><i class="fa-solid fa-piggy-bank"></i></span>
            <span><i class="fa-brands fa-google-pay"></i></span>
            <span><i class="fa-brands fa-apple-pay"></i></span>
            <span><i class="fa-brands fa-amazon-pay"></i></span>
            <span><i class="fa-solid fa-credit-card"></i></span>
            <span><i class="fa-solid fa-money-bill"></i></span>
        </div>
        <div className='copy'>Made by Olamilekan, 2023</div>
    </div>
  )
}

export default Footer