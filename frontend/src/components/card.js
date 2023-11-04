import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { Food } from '../custom_api/cardData';
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import brown from '../Assets/cards/brown.jpg'

const Cards = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderIndex < Food.length - 1) {
        setSliderIndex(sliderIndex + 1);
      } else {
        setSliderIndex(0);
      }
      sliderRef.current.slickGoTo(sliderIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderIndex]);

  const handleCardClick = (foodItem) => {
    setSelectedCard(foodItem);
    setIsModalOpen(true);
  };
  const cardWidth = '310px'; 
  const cardHeight = '450px'; 

  const sliderSettings = {
    ref: slider => (sliderRef.current = slider),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div>
    <Slider {...sliderSettings} style={{ overflow: 'hidden' }}>
      {Food.map((foodItem, index) => (
        <div key={index} onClick={() => handleCardClick(foodItem)}>
          {/* <Card className='m-4 text-white ' style={{ backgroundImage:`url(${brown})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: cardWidth, height: cardHeight}}> */}
          <Card className='m-4 text-white bg-transparent  border-black text-center ' style={{cursor:'pointer', borderRadius:'50%',  backgroundImage:`url(${brown})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%'}}>
            <CardImg top width='100%' src={foodItem.img} alt={foodItem.Name} className='card-img' style={{borderRadius:'50%'}} />
            <CardBody>
              <CardTitle tag='h5' >{foodItem.Name}</CardTitle>
              {/* <CardText className='fs-7'>{foodItem.desc}</CardText>
            
              <Row>
                <Col>
                <CardText>

                <i className='fa fa-dollar'></i> {foodItem.sales}
                </CardText>
                </Col>
             
                <Col>
                  <CardText>
                    <i className='fa fa-thumbs-up'></i> {foodItem.likes}
                  </CardText>
                </Col>
                <Col>
                  <CardText>
                    <i className='fa fa-star'></i> {foodItem.Ratings}
                  </CardText>
                </Col>
              </Row> */}
            </CardBody>
          </Card>
        </div>
      ))}
    </Slider>
    <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
  <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
    {selectedCard ? selectedCard.Name : 'No Card Selected'}
  </ModalHeader>
  <ModalBody>
    {selectedCard ? (
      <div className="modal-content-container ">
        <div className="modal-image-container">
          <img src={selectedCard.img} alt={selectedCard.Name} />
        </div>
        <div className="modal-description">
          <p>{selectedCard.desc}</p>
          <Row>
                <Col>
                <CardText>

                <i className='fa fa-dollar'></i> {selectedCard.sales}
                </CardText>
                </Col>
             
                <Col>
                  <CardText>
                    <i className='fa fa-thumbs-up'></i> {selectedCard.likes}
                  </CardText>
                </Col>
                <Col>
                  <CardText>
                    <i className='fa fa-star'></i> {selectedCard.Ratings}
                  </CardText>
                </Col>
              </Row> 
          {/* Display other card details as needed */}
        </div>
      </div>
    ) : (
      <p>No card details available.</p>
    )}
  </ModalBody>
</Modal>


  </div>
  );
};

export default Cards;
