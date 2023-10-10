import React from 'react';
import { Carousel } from 'react-bootstrap';


const MiddleNav = () => {
    return (
        <div className='my-4 lg:w-75 mx-auto'>
            <h2 className='text-center my-4'>Glory OF Esports</h2>
            <Carousel>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block w-100"
                        src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/08/17/Every-Call-of-Duty-game-in-release-order.jpg" style={{ height: '600px' }} 
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Call OF Duty </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={150}>
                    <img
                        className="d-block w-100"
                        src="https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1a114025b7f5e5fc7911367db0dedb22.jpg" style={{ height: '600px' }}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>hall of Warriors</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://staticg.sportskeeda.com/editor/2023/05/c461e-16850544088905-1920.jpg?w=840" style={{ height: '600px' }}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Band of Brothers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MiddleNav;