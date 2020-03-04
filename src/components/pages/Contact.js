import React from 'react'
import HeroAreaPage from '../parts/HeroAreaPage'

export default function Contact() {
    return (
        <div>
            <HeroAreaPage pageTitle={localStorage.getItem("lang") == 'en' ? `Contact Us` : `Контакты`} />
    
    
    {/* <section id="google-map-area">
    <div className="container">
    <div className="row">
    <div className="col-12">
    <div id="conatiner-map"></div>
    </div>
    </div>
    </div>
    </section> */}
    
    
    <section id="content" className="section-padding">
    <div className="container">
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
    <h2 className="contact-title">
    {localStorage.getItem("lang") == 'en' ? `Send Us a Message` : `Напишите нам`}
    </h2>
    
    <form id="contactForm" className="contact-form" data-toggle="validator">
    <div className="row">
    <div className="col-md-12">
    <div className="row">
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
    <input type="text" className="form-control" id="name" name="name" placeholder={localStorage.getItem("lang") == 'en' ? `Enter Your name` : `Введите Ваше имя`} required />
    <div className="help-block with-errors"></div>
    </div>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
    <input type="email" className="form-control" id="email" placeholder={localStorage.getItem("lang") == 'en' ? `Enter your email` : `Введите Ваш email`} required  />
    <div className="help-block with-errors"></div>
    </div>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
    <input type="text" className="form-control" id="msg_subject" name="subject" placeholder={localStorage.getItem("lang") == 'en' ? `Subject` : `Тема`} required />
    <div className="help-block with-errors"></div>
    </div>
     </div>
    </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-12">
    <div className="row">
    <div className="col-md-12">
    <div className="form-group">
    <textarea className="form-control" placeholder={localStorage.getItem("lang") == 'en' ? `Enter Your message` : `Введите Ваше сообщение`} rows="10" data-error="Write your message" required></textarea>
    <div className="help-block with-errors"></div>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-12">
    <button type="submit" id="submit" className="btn btn-common">{localStorage.getItem("lang") == 'en' ? `Submit Now` : `Отправить`}</button>
    <div id="msgSubmit" className="h3 text-center hidden"></div>
    <div className="clearfix"></div>
    </div>
    </div>
    </form>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
    <h2 className="contact-title">
    {localStorage.getItem("lang") == 'en' ? `Get in touch` : `Контакты`}
    </h2>
    <div className="information">
    <p>Lorem Ipsum Is simply dummy text of the printing and typesetting Industry.
    Lorem Ipsum has been the Industry's</p>
    <div className="contact-datails">
    <div className="icon">
    <i className="lni-map-marker icon-radius"></i>
    </div>
    <div className="info">
    <h3>{localStorage.getItem("lang") == 'en' ? `Address` : `Адрес`}</h3>
    <span className="detail">Level 13, 2 Ellzabeth St, <br /> Lorem Ipsum Is simply dummy text</span>
    </div>
    </div>
    <div className="contact-datails">
    <div className="icon">
    <i className="lni-pointer icon-radius"></i>
    </div>
    <div className="info">
    <h3>{localStorage.getItem("lang") == 'en' ? `Have any questions?` : `Задайте вопрос`}</h3>
    <span className="detail">Support@mail.com</span>
    </div>
    </div>
    <div className="contact-datails">
    <div className="icon">
    <i className="lni-phone-handset icon-radius"></i>
    </div>
    <div className="info">
    <h3>{localStorage.getItem("lang") == 'en' ? `Call Us` : `Позвоните нам`}</h3>
    <span className="detail">+880 123 456 789</span>
    </div>
    </div>
    <div className="contact-datails">
    <div className="icon">
    <i className="lni-phone icon-radius"></i>
    </div>
    <div className="info">
    <h3>{localStorage.getItem("lang") == 'en' ? `Telephone` : `Телефон`}</h3>
    <span className="detail">(+88) 112345678 912</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
        </div>
    )
}
