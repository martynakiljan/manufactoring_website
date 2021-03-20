import React from 'react'
import {  Nav, Navbar, Container, Col } from 'react-bootstrap'
import styled from 'styled-components';

export const Home = () => {


    const Styles = styled.h2`
    .title {
    color: lightblue;
    font-size: 20px;
    }

    .description {
        font-size: 15px;
        
    }

    
   
`;


    return (
        <Container>
         <Styles>
           
           <Container>
             <Col xs={12} sm={8} smOffset={2}>
               
               <h3 className="title">WHERE YOU CAN FIND US...</h3>
               <p className="description">Our practice can be found in the lovely Gessnerhof at Usteristrasse 14, between Löwenplatz and the main station. It is centrally located and very easy to get to, either by car or using public transport. There are plenty of shops here in the local area, so you can combine your appointment with a shopping trip or use the opportunity to pick up a few things for your everyday needs.</p>
               

             
             
               <h3  className="title">WHAT WE CAN OFFER YOU....</h3>
               <p className="description">Whether it’s the facilities and equipment in the practice or the actual treatment methods used, we are committed to ensuring that we always stay absolutely up-to-date when it comes to advances in dental technology and research. We can therefore guarantee that, in all areas of dentistry, our patients will receive treatment of the very highest standard in terms of quality, aesthetics and durability, while at the same time using up as little of their time as possible. For example, in the field of tooth restoration, we work with Cerec 3D technology, a method that allows us to produce and insert perfectly fitting crowns, inlays or veneers made from tooth-coloured, all-ceramic material within the course of a single appointment. Further benefits that our practice can offer include a dental implant technique using keyhole surgery, light-activated tooth whitening and transparent aligners for the correction of misaligned teeth in adults. Simply click on “Services” to find out more about all the different types of treatment that we offer.</p>


                <h3  className="title">WHO WE ARE...</h3>
                <p className="description">Whether it’s the facilities and equipment in the practice or the actual Many years of practical experience combined with the very latest in dental treatment methods – this is what you can expect from the dentists in our team. It doesn’t matter what kind of dental problem or request you come to us with – we will deal with it in a friendly, professional, gentle and effective way. It is important to us that every one of our patients goes home happy, with a radiant and healthy smile.
                </p>
            
          
             </Col>
           </Container>
          </Styles>
       

       </Container>
    )


}
