import React from 'react';
import curriculum from './images/cv.PNG'
import image_acceuil from './images/IMG_acceuil.jpg'
import { Container, Col, Row } from 'react-bootstrap'; 

  
function Acceuil (){
    return (
        <Container fluid="md" style={{background:'#E0AEA3'}}>
            <Row style={{}}>
                <Col xs={7} style={{marginTop:'2%', marginRight:'4%'}}>
                <img style={{marginLeft:'2%', paddingBottom:'1.3%'}} src={image_acceuil} alt="Cv" />
                </Col>
                <Col xs={4}>
                    <Row>
                        <Col style={{marginTop:'30%', marginLeft:'-25%'}}>
                                <p style={{fontSize:'110%', fontWeight:'lighter', marginLeft:'15%', marginTop:'7%'}}>Bonjour,</p>
                                <p style={{fontSize:'110%', fontWeight:'lighter', marginLeft:'15%'}}>
                                Je me présente, je m'appelle Florian, j'ai 24 ans, j'habite dans les Ardennes, et depuis le plus jeune âge, je suis passionnée d'informatique
                                et surtout de jeux vidéos. Mes études ont débutées en 2016-2017, par une première année 
                                Sciences Politiques à l'UCL de Louvain-La-Neuve.
                                Ces études ne me convenant pas, je me suis redirigé vers l'Ephec, dans la section Technologie de l'Informatique, dans laquelle je me suis directement senti plus à l'aise.</p>
                                <p style={{fontSize:'110%', fontWeight:'lighter', marginLeft:'15%'}}> Dans l'étendue des domaines appris lors du cursus, je remarque très
                                vite une attirance particulière dans les domaines du réseau et de l'administration système.
                                Au contraire, la programmation est un domaine qui m'a fort éloigné de mon idée utopique de l'informatique, et qui m'a confronté très vite à de grandes difficultés durant tout mon cursus</p>
                        </Col>
                    </Row>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <p style={{marginLeft:'1%',fontSize:'150%', fontWeight:'lighter', marginTop:'4.3%'}}>Projet Professionnel : </p>
                </Col>
            </Row>    
            <Row>
                <Col>
                    <p style={{marginLeft:'1%',fontSize:'110%', fontWeight:'lighter', marginBottom:'5%'}}>
                        J'ai commencé mes études d'informatique dans le but de trouver un domaine précis dans lequel je pourrais me sentir à l'aise. Je n'avais à ce moment aucune connaissance que ça soit en
                        programmation, réseau ou encore administration. J'ai très vite compris que la programmation n'était pas un domaine qui me conviendrait,
                        contrairement au réseau ou à l'administration qui m'interessait beaucoup plus.
                        C'est pourquoi j'ai souhaité faire un stage dans un domaine qui m'attirait. J'ai envoyé une candidature au sein de BBCS, une entreprise comme je l'appelle "polyvalente".
                        Dans cette petite entreprise de quelques personnes, il y a du réseau, de l'administration ainsi que des manipulations hardware. 
                        J'ai énormément appris lors de ce stage, dont le fait de travailler en équipe, suivre des horaires fixes et partager ces horaires avec des employés, qui deviennent au fur et à mesure des amis.
                        Ce stage, m'ayant permis de mettre en pratique de manière concrète les connaissances apprises au cours de mon cursus en Haute Ecole, s'est terminé par une proposition d'emploi.
                        Ce domaine étant celui que je recherchais, et l'ambiance de travail me donnant envie d'y retourner, j'ai
                        accepté cette offre sans aucune hésitation.
                        </p>
                </Col>
            </Row>
        </Container>
    )
}
  
export default Acceuil;