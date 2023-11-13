import React, { useState,useEffect,useRef } from 'react';
import Slider from 'react-slick';
import { Card, CardImg,CardTitle, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videos = [
    {
      id: 'video1',
      title: 'Biryani',
      thumbnail: 'https://img.youtube.com/vi/zcE9giB5gSQ/hqdefault.jpg',
      videoId: 'zcE9giB5gSQ', // Corrected video ID
    },
    {
        id: 'video2',
        title: 'Fried Rice',
        thumbnail: 'https://img.youtube.com/vi/ZTgVFe4_H-s/hqdefault.jpg', // Corrected thumbnail URL
        videoId: 'ZTgVFe4_H-s', // Corrected video ID
      },
      {
        id: 'video3',
        title: 'Pulav',
        thumbnail: 'https://img.youtube.com/vi/fv3RgqkaKbM/hqdefault.jpg', // Corrected thumbnail URL
        videoId: 'fv3RgqkaKbM', // Corrected video ID
      },
      {
        id: 'video4',
        title: 'Pizza',
        thumbnail: 'https://img.youtube.com/vi/Eim2GpHNQDg/hqdefault.jpg', // Corrected thumbnail URL
        videoId: 'Eim2GpHNQDg', // Corrected video ID
      },
     {
      id:'video5',
      title:'Burger',
      thumbnail:'https://img.youtube.com/vi/rIUhs7nHbl4/hqdefault.jpg',
      videoId:'rIUhs7nHbl4',

     }
];

const VideoCards = () => {
const [sliderIndex, setSliderIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex(prevIndex => {
        const newIndex = prevIndex < videos.length - 1 ? prevIndex + 1 : 0;
        // Now call slickGoTo after state has been updated
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(newIndex);
        }
        return newIndex;
      });
    }, 3000);
  
    return () => clearInterval(interval);
    // Removed the sliderIndex dependency to prevent re-creating the interval on index change
  }, []);
  

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true); // Opens the modal
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-next"
        onClick={onClick}
        style={{ position: 'absolute', top: '50%', right: 0, zIndex: 1, transform: 'translate(0, -50%)' }}
      >
        <FaArrowRight size={30} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev"
        onClick={onClick}
        style={{ position: 'absolute', top: '50%', left: 0, zIndex: 1, transform: 'translate(0, -50%)' }}
      >
        <FaArrowLeft size={30} />
      </div>
    );
  }


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Set custom next arrow
    prevArrow: <PrevArrow />, // Set custom prev arrow
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
    <div style={{overflow:'hidden'}}>
      <Slider {...sliderSettings}>
        {videos.map((video) => (
          <div key={video.id} onClick={() => handleVideoClick(video)}>
            <Card className='m-4 bg-dark text-white border-0 text-center' style={{cursor:'pointer'}}>
              <CardImg top src={video.thumbnail} alt={video.title} className='card-img' />
              <CardTitle tag='h5'>{video.title}</CardTitle>
            </Card>
          </div>
        ))}
      </Slider>

      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          {selectedVideo ? selectedVideo.title : 'No Video Selected'}
        </ModalHeader>
        <ModalBody>
          {selectedVideo && (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
         
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VideoCards;
