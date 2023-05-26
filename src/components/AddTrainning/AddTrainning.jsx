import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../header/Header'
import './AddTrainning.css'
import axios from 'axios'
import Config from '../Settings/config'
//import './components/PostFormation/PostFormation.js'

const AddTrainning = () => {

    const [training, setTraining] = useState('');
    const [duree, setDuree] = useState('');
    const [debouches, setDebouches] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [school, setSchool] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');

    const handleChangetraining = (e) => {
        setTraining(e.target.value);
        console.log(training)

    }
    const handleChangeDuree = (e) => {
        setDuree(e.target.value);
        console.log(duree)
    }
    const handleChangeDebouches = (e) => {
        setDebouches(e.target.value);
        console.log(debouches)
    }
    const handleChangePrice = (e) => {
        setPrice(e.target.value);
        console.log(price)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value); console.log(city);

    }
    const handleChangeSchool = (e) => {
        setSchool(e.target.value)
            ; console.log(school);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
        console.Console.log(description)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            training: training,
            duree: duree,
            debouches: debouches,
            price: price,
            city: city,
            school: school,
            description: description,
        }
        /*
                if (token) {
                    axios.post(Config.url_add_training, data)
                        .then((res) => {
        
                        })
                        .catch((err) => {
        
                        })
                }
        */
    }
    return (
        <section className="section section-lg">
            <Header /> <br />
            <Container>
                <Row>
                    <Col>
                        <form class="animate__animated animate__fadeIn">
                            <h1 className="text-center mb-4">Ajouter une formation</h1>
                            <div class="form-group">
                                <label for="title">Titre de la Formation</label>
                                <input type="text" class="form-control" id="title" placeholder="Entrez un titre  " onChange={handleChangetraining} />
                            </div>
                            <div class="form-group">
                                <label for="city">Durée</label>
                                <input type="text" class="form-control" id="city" placeholder="Entrez la duree " onChange={handleChangeDuree} />
                            </div>
                            <div class="form-group">
                                <label for="duration">Debouchés</label>
                                <input type="text" class="form-control" id="duration" placeholder="Entrez les debouchés " onChange={handleChangeDebouches} />
                            </div>
                            <div class="form-group">
                                <label for="outlet">Prix de la formation</label>
                                <input type="text" class="form-control" id="outlet" placeholder="Entrez le cout " onChange={handleChangePrice} />
                            </div>
                            <div class="form-group">
                                <label for="outlet">Ville</label>
                                <input type="text" class="form-control" id="outlet" placeholder="Entrez le lieu " onChange={handleChangeCity} />
                            </div>
                            <div class="form-group">
                                <label for="outlet">Ecole</label>
                                <input type="text" class="form-control" id="outlet" placeholder="Entrez le nom de l'ecole " onChange={handleChangeSchool} />
                            </div>
                            <div class="form-group">
                                <label for="image">Image</label>
                                <input type="file" class="form-control-file" id="image" />
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" rows="3" onChange={handleChangeDescription}></textarea>
                            </div>
                            <button type="submit" class="btn btn-success animate__animated animate__bounceIn" onChange={handleSubmit}>Envoyer</button>
                        </form>

                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default AddTrainning