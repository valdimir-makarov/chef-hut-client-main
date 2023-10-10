import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import meal2 from '../../assets/meal2.jpg';
import meal3 from '../../assets/meal3.jpg';

const LowerNav = () => {
    return (
        <div className='my-2 w-75 mx-auto'>
            <h2 className='text-center my-4'>Special  Games for You</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col data-aos="fade-left">
                        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/220px-CoD_Black_Ops_cover.png" style={{ height: '300px' }} roundedCircle />
                    </Col>
                    <Col data-aos="fade-up">
                        <Image src="https://www.digitaltrends.com/wp-content/uploads/2022/03/co1wkp.jpg" style={{ height: '300px' }} roundedCircle />
                    </Col>
                    <Col data-aos="fade-right">
                        <Image src="https://www.digitaltrends.com/wp-content/uploads/2022/03/co1wkp.jpg" style={{ height: '300px' }} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LowerNav;