import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../header/Header'
import './postFomation.css'
//import './components/PostFormation/PostFormation.js'

const PostFormation = () => {
    return (
        <section className="section section-lg">
            <Header /> <br />
            <Container>
                <Row>
                    <Col>
                        <form class="animate__animated animate__fadeIn">
                            <div class="form-group">
                                <label for="title">Titre de l'événement</label>
                                <input type="text" class="form-control" id="title" placeholder="Entrez le titre de votre événement" />
                            </div>
                            <div class="form-group">
                                <label for="city">Ville</label>
                                <input type="text" class="form-control" id="city" placeholder="Entrez la ville de votre événement" />
                            </div>
                            <div class="form-group">
                                <label for="duration">Durée</label>
                                <input type="text" class="form-control" id="duration" placeholder="Entrez la durée de votre événement" />
                            </div>
                            <div class="form-group">
                                <label for="outlet">Lieu</label>
                                <input type="text" class="form-control" id="outlet" placeholder="Entrez le lieu de votre événement" />
                            </div>
                            <div class="form-group">
                                <label for="image">Image</label>
                                <input type="file" class="form-control-file" id="image" />
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success animate__animated animate__bounceIn" >Envoyer</button>
                        </form>

                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default PostFormation