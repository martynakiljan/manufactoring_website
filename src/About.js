import React from 'react'
import { Container, Col, Image} from 'react-bootstrap'
import styled from 'styled-components';
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpeg'

export const About = () => {


      const Styles = styled.div`
        .img {
        background: url(${img2}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 500px;
        position: relative;
        z-index: -2;
        }

        .img2 {
         background: url(${img3}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 500px;
        position: relative;
        z-index: -2;
        }
       
`;
   
        return (
            <Styles>
           
              <Container>
                <Col xs={12} sm={8} smOffset={2}>
                  
                  <h3>Dr Frank</h3>
                  <p>Lindsy was born and raised in San Diego, she grew up in Poway. She is a Navy spouse, and loves getting the chance to see new places. She has been in the dental field for 10 years now, receiving her hygiene education in 2012 from Pensacola State College. When not working, she has two small sons and two large dogs that keep her very busy.</p>
                  

                  <div className="img2"/>
                
                  <h3>Dr Martin</h3>
                  <p>TTracy comes to us with over 12 years in the dental field. She moved to San Diego in 2012 after relocating from Northern California with her husband of 27 years. Tracy has two grown children and enjoys spending time with her family and playing with her grand-dogs Russell Crowe and Diva.</p>
               
                  <div className="img"/>
                </Col>
              </Container>
             </Styles>
          )
    


}
