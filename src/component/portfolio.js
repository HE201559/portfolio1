import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
 
class Portfolio extends React.Component {

 

    render() {
      return (
        <Container>
            <h2 style={{marginTop:'8%', marginBottom:'3%',fontWeight:'lighter'}}> Tableau récapitulatif des heures</h2>
            <div>
            <Row style={{marginBottom:'10%'}}>
                <Col xs={12} lg={2} >

                    <h4 style={{marginTop:'10%',width:'130%', height:'17%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'11%'}}> Theme </h4>
               
                    <h4 style={{marginTop:'10%',width:'130%',height:'17%', fontSize:'17px', textAlign:'center',paddingTop:'9%',fontWeight:'lighter'}}> Développement applicatif </h4>

                    <h4 style={{height:'17%',width:'130%', fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Insertion professionnelle </h4>

                    <h4 style={{height:'17%',width:'130%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> Développement mobile </h4>
 
                    <h4 style={{height:'17%', width:'130%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Développement web </h4>
 
                    <h4 style={{height:'17%',width:'130%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> Soft Skills </h4>

                    <h4 style={{height:'17%',width:'130%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Hardware & Electronique </h4>

                    <h4 style={{height:'17%',width:'130%',fontSize:'17px', textAlign:'center',  paddingTop:'12%',fontWeight:'lighter'}}> Développement personnel </h4>

                    <h4 style={{height:'17%',width:'130%',fontSize:'17px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'12%',fontWeight:'lighter'}}>  </h4>

                    <h4 style={{height:'17%',width:'130%',fontSize:'17px', textAlign:'center',  paddingTop:'12%',fontWeight:'lighter'}}>  </h4>

                </Col>
                <Col xs={12} lg={2}>
                <h4 style={{marginTop:'10%',width:'150%',height:'17%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'11%'}}> Activité </h4>
                    <h4 style={{marginTop:'10%',width:'150%',height:'17%', fontSize:'17px', textAlign:'center',paddingTop:'9%',fontWeight:'lighter'}}> Formation Python </h4>
                    <h4 style={{height:'17%', width:'150%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Job étudiant </h4>
                    <h4 style={{height:'17%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> Formation React Native </h4>
                    <h4 style={{height:'17%', width:'150%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Formation React </h4>
                    <h4 style={{height:'17%',width:'150%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> Streaming </h4>
                    <h4 style={{height:'17%',width:'150%', fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Montage d'ordinateurs </h4>
                    <h4 style={{height:'17%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> Football </h4>
                    <h4 style={{height:'17%',width:'150%', fontSize:'17px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'12%',fontWeight:'lighter'}}>  </h4>
                    <h4 style={{height:'17%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}>  </h4>
                </Col>
                <Col xs={12} lg={2}>
                    <h4 style={{marginTop:'10%',marginLeft:'25%',width:'150%',height:'17%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'11%'}}> Heures réelles </h4>
                    <h4 style={{marginTop:'10%',marginLeft:'25%',width:'150%',height:'17%', fontSize:'17px', textAlign:'center',paddingTop:'9%',fontWeight:'lighter'}}> 4 heures </h4>
                    <h4 style={{height:'17%', marginLeft:'25%',width:'150%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> ∞ </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> 30 heures </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> 20 heures </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> ∞ </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> 12 heures </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> ∞ </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'12%'}}> Total </h4>
                    <h4 style={{height:'17%',marginLeft:'25%',width:'150%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}>  ∞  </h4>
                </Col>
                <Col xs={12} lg={2}>
                    <h4 style={{marginTop:'10%',width:'150%',height:'17%', marginLeft:'35%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'11%'}}>  Valorisation </h4>
                    <h4 style={{marginTop:'10%',width:'150%',height:'17%', marginLeft:'35%',fontSize:'17px', textAlign:'center',paddingTop:'9%',fontWeight:'lighter'}}> 4 heures </h4>
                    <h4 style={{height:'17%', width:'150%',fontSize:'17px', marginLeft:'35%', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> 10 heures </h4>
                    <h4 style={{height:'17%', width:'150%',fontSize:'17px', marginLeft:'35%', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> 10 heures </h4>
                    <h4 style={{height:'17%', width:'150%',fontSize:'17px', marginLeft:'35%', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> 10 heures </h4>
                    <h4 style={{height:'17%',width:'150%', marginLeft:'35%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> 10 heures </h4>
                    <h4 style={{height:'17%',width:'150%', marginLeft:'35%', fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> 10 heures </h4>
                    <h4 style={{height:'17%',width:'150%',  marginLeft:'35%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}> 6 heures </h4>
                    <h4 style={{height:'17%',width:'150%',marginLeft:'35%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'12%'}}> Total </h4>
                    <h4 style={{height:'17%',width:'150%', marginLeft:'35%', fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}>60 heures </h4>
                </Col>
                <Col xs={12} lg={2}>

                    <h4 style={{marginTop:'10%',marginLeft:'35%',width:'165%',height:'17%', fontSize:'21px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'11%'}}> Preuve(s) </h4>

                    <h4 style={{marginTop:'10%',marginLeft:'35%',width:'165%',height:'17%', fontSize:'17px', textAlign:'center',paddingTop:'9%',fontWeight:'lighter'}}> <a href="https://i.postimg.cc/Sxg9Cc5r/Python-Tab.png" target="_blank" rel="noreferrer">Formation Python</a> </h4>

                    <h4 style={{height:'17%',marginLeft:'35%', width:'165%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}><a href="https://i.postimg.cc/8kvL9JJp/Colruyt.png" target="_blank" rel="noreferrer">Job Colruyt</a></h4>

                    <h4 style={{height:'17%',marginLeft:'35%', width:'165%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}><a href="https://i.postimg.cc/FR3Q5VXg/React-Nat-Tab.png" target="_blank" rel="noreferrer">Formation React Native</a></h4>

                    <h4 style={{height:'17%',marginLeft:'35%',width:'165%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}><a href="https://i.postimg.cc/T3wQW2wZ/ReactTab.png" target="_blank" rel="noreferrer">Formation React JS</a></h4>

                    <h4 style={{height:'17%',marginLeft:'35%', width:'165%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}><a href="https://i.postimg.cc/6QxkVGv8/twitch.png" target="_blank" rel="noreferrer">Lien Twitch</a></h4>

                    <h4 style={{height:'17%',marginLeft:'35%',width:'165%',fontSize:'17px', textAlign:'center', backgroundColor:'#E0AEA3', paddingTop:'12%',fontWeight:'lighter'}}> Ordinateurs </h4>

                    <h4 style={{height:'17%',marginLeft:'35%', width:'165%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}>Photos</h4>

                    <h4 style={{height:'17%',marginLeft:'35%',width:'165%',fontSize:'17px', textAlign:'center', backgroundColor:'#DA8471', paddingTop:'12%',fontWeight:'lighter'}}>  </h4>

                    <h4 style={{height:'17%',marginLeft:'35%', width:'165%',fontSize:'17px', textAlign:'center', paddingTop:'12%',fontWeight:'lighter'}}>  </h4>

                </Col>
                
            </Row>
            </div>

            <div>
                <Row>
                    <h2 style={{marginTop:'30%', marginBottom:'3%',fontWeight:'lighter'}}> Descriptions </h2>
                </Row>
                <Row style={{backgroundColor:'#E0AEA3'}}>
                    <h4 style={{ fontWeight:'lighter'}}> Formation Python </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Apprentissage sur la plateforme "OpenClassRoom" du language Python, une petite formation de 4 heures m'ayant appris les bases de ce language.  </p>
                </Row>
                <Row>
                    <h4 style={{ fontWeight:'lighter'}}> Job Etudiant </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Travail étudiant au sein de Colruyt Group à partir de l'année 2015-2016 jusqu'à octobre 2021. Ce travail m'a apporté rigueur, autonomie et discipline </p>
                </Row >
                <Row style={{backgroundColor:'#E0AEA3'}}>
                    <h4 style={{ fontWeight:'lighter'}}> Formation React Native </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Apprentissage sur la plateforme "OpenClassRoom" du language React Native, Une formation de 30 heures m'ayant permis d'apprendre ce language en profondeur afin de maîtriser la programmation mobile. </p>
                </Row>
                <Row>
                    <h4 style={{ fontWeight:'lighter'}}> Formation React </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Apprentissage sur la plateforme "OpenClassRoom" du language React JS une formation de 20 heures m'ayant appris à comprendre et maîtriser un framework de développpement frontend. </p>
                </Row>
                <Row style={{backgroundColor:'#E0AEA3'}}>
                    <h4 style={{ fontWeight:'lighter'}}> Streaming </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Une passion depuis quelques années, le streaming, Neshtai, mon pseudo, une image de moi se retrouvant dans les jeux vidéos. Partager ce plaisir avec d'autres personnes m'observant m'a permis d'améliorer ma communication</p>
                </Row>
                <Row>
                    <h4 style={{ fontWeight:'lighter'}}> Montage d'ordinateurs </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Etant passionné de jeux vidéos, j'ai évidemment monté mon propre PC. Ma compréhension hardware m'a permis également de reproduire ceci pour d'autres personnes </p>
                </Row>
                <Row style={{backgroundColor:'#E0AEA3'}}>
                    <h4 style={{ fontWeight:'lighter'}}> Football </h4>
                    <p style={{ marginBottom:'3%',fontWeight:'lighter'}}> Entre mes 6 ans et mes 20 ans, le football était une passion m'occupant la majorité de mon temps. Demandant beaucoup de temps, ceci m'a amené détermination, discipline, esprit d'équipe et bien d'autres valeurs utile dans la vie de tous les jours </p>
                </Row>
            </div>
            
           
       
 
        </Container>


      );
    }
  }

  export default Portfolio;