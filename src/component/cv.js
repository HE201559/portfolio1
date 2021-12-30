import React from 'react';
import curriculum from './images/cv.PNG'
import { Container, Col, Row } from 'react-bootstrap'; 

  
function Cv (){
    return (
        <Container fluid="md" style={{background:'#E0AEA3'}}>
            <Row style={{}}>
                <Col xs={7} style={{marginTop:'2%', marginRight:'4%'}}>
                <img style={{marginLeft:'2%', paddingBottom:'1.3%'}} src={curriculum} alt="Cv" />
                </Col>
                <Col xs={4}>
                    <Row>
                        <Col style={{marginTop:'28%'}}>
                            <p style={{fontSize:'150%', fontWeight:'lighter'}}>Télécharger en pdf :</p>
                            <ul>
                                <li><a href="https://ephec-my.sharepoint.com/:b:/g/personal/he201559_students_ephec_be/EcaFE0RoFqRCnCOzZH4RtsUBNZD62O3AiyzjePlE9pYRVw?e=KfXAl4" target="_blank" download="newfilename.pdf"> Cliquez ici </a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop:'10%'}}>
                            <p style={{fontSize:'150%', fontWeight:'lighter'}}>Etudes</p>
                            <ul>
                                
                                <li style={{marginTop:'8%',fontSize:'110%', fontWeight:'lighter'}}> Ephec </li>
                                    <ul>
                                        <li style={{marginTop:'5%'}}><a href="https://www.ephec.be/formations/haute-ecole/bachelier-en-technologie-de-linformatique" target="_blank">Ephec Technologie de l'informatique</a></li>
                                    </ul>
                            </ul>

                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop:'10%'}}>
                            <p style={{fontSize:'150%', fontWeight:'lighter'}}>Jobs étudiants</p>
                            <ul>
                                
                                <li style={{marginTop:'8%',fontSize:'110%', fontWeight:'lighter'}}> Friterie des Baudets </li>
                                    <ul>
                                        <li style={{marginTop:'5%'}}><a href="https://www.facebook.com/Friterie-Acad%C3%A9mie-des-Baudets-581256555266710/" target="_blank">Friterie Académie des Baudets</a></li>
                                    </ul>
                            </ul>
                            <ul>
                                
                                <li style={{marginTop:'8%',fontSize:'110%', fontWeight:'lighter'}}> Colruyt </li>
                                    <ul>
                                        <li style={{marginTop:'5%'}}><a href="https://www.colruyt.be/fr/recherche-de-magasin/colruyt-recogne" target="_blank">Colruyt Libramont</a></li>
                                        <li style={{marginTop:'5%'}}><a href="https://www.colruyt.be/fr/recherche-de-magasin/colruyt-florenville" target="_blank">Colruyt Florenville</a></li>
                                        
                                    </ul>
                            </ul>

                        </Col>
                    </Row>

                </Col>
                    
            </Row>

            
            
           
        </Container>
    )
}
  
export default Cv;