import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-grotesque', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Contact
            additionalClass={['my-5']}
            formHeaderText="Cuentanos "
            nameInputLabel="Nombre"
            emailInputLabel="E-mail"
            messageInputLabel="Mensaje"
            buttonLabel="Enviar"
            phoneNumber="+502 4562 5974"
            address="Guatemala Ciudad"
            emailAddress="exteriorspazio@gmail.com"
        />
        <Footer />
    </main>
);

export default Layout;
