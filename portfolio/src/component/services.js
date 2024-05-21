// ServicesPage.jsx
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Ritik from './web.jpg'
import Ritik1 from './web2.jpg'
import Ritik2 from './web3.jpg'

ReactModal.setAppElement('#root'); // Necessary for accessibility

const ServicesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      images: [
        Ritik,
        Ritik1,
        Ritik2
      ],
      shortDescription: 'We build responsive and modern websites tailored to your needs.',
      detailedDescription: 'Our web development services include creating responsive and modern websites that are tailored to meet your specific needs. We utilize the latest technologies and best practices to ensure your website is fast, secure, and scalable. Whether you need an e-commerce platform, a corporate website, or a personal blog, our team of experienced developers will work with you to create a website that not only looks great but also delivers exceptional performance.',
    },{
      id: 1,
      title: 'Web desiner',
      images: [
        Ritik,
        Ritik1,
        Ritik2
      ],
      shortDescription: 'We build responsive and modern websites tailored to your needs.',
      detailedDescription: 'Our web development services include creating responsive and modern websites that are tailored to meet your specific needs. We utilize the latest technologies and best practices to ensure your website is fast, secure, and scalable. Whether you need an e-commerce platform, a corporate website, or a personal blog, our team of experienced developers will work with you to create a website that not only looks great but also delivers exceptional performance.',
    },
    {
      id: 1,
      title: 'Web desiner',
      images: [
        Ritik,
        Ritik1,
        Ritik2
      ],
      shortDescription: 'We build responsive and modern websites tailored to your needs.',
      detailedDescription: 'Our web development services include creating responsive and modern websites that are tailored to meet your specific needs. We utilize the latest technologies and best practices to ensure your website is fast, secure, and scalable. Whether you need an e-commerce platform, a corporate website, or a personal blog, our team of experienced developers will work with you to create a website that not only looks great but also delivers exceptional performance.',
    }
    // Repeat for other services
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div className="service-item" key={service.id} onClick={() => openModal(service)}>
            <img src={service.images[0]} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.shortDescription}</p>
          </div>
        ))}
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedService && (
          <>
            <h2 className="modal-title">{selectedService.title}</h2>
            <p className="modal-description">{selectedService.detailedDescription}</p>
            <Carousel className="carousel" showThumbs={false}>
              {selectedService.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${selectedService.title} ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <button onClick={closeModal} className="close-button">Close</button>
          </>
        )}
      </ReactModal>
    </div>
  );
};

export default ServicesPage;
