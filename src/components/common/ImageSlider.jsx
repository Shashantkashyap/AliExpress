import React from 'react';
import { Carousel } from 'react-bootstrap';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const images = [
    "https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg",
    "https://i.pinimg.com/736x/25/b6/4d/25b64d8b5a9a1a0761d658369c553028.jpg",
    "https://5.imimg.com/data5/UE/AT/BG/SELLER-74935595/pixel-80cm-32-inch-full-hd-led-tv-pxl32he-.png",
    "https://img.freepik.com/premium-photo/hd-image-microwave-oven-kitchen-generative-ai_849906-8716.jpg",
    "https://totalpng.com//public/uploads/preview/ring-light-dual-tone-hd-backgroung-4-11650697830mcavhigo3b.jpg",
    "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-wdnet-212372.jpg&fm=jpg",
    "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?cs=srgb&dl=pexels-pixabay-276566.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"
];

function ImageSlider() {
  return (
    <Carousel
      nextIcon={<IoIosArrowDropright color='black' fontSize={30} fontWeight={700}/>}
      prevIcon={<IoIosArrowDropleft color='black' fontSize={30}/>}
    >
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={src}
            alt={`Slide ${index}`}
            style={{ maxHeight: '270px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;