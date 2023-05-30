import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from '../header/Header'
import './AddTrainning.css'
import axios from 'axios'
import Config from '../Settings/config'
import { useNavigate } from 'react-router-dom'


const AddTrainning = () => {

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [outlet, setOutlet] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [school, setSchool] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title)

    }
    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
        console.log(duration)
    }
    const handleChangeOutlet = (e) => {
        setOutlet(e.target.value);
        console.log(outlet)
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
        console.log(description)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            title: title,
            description: description,
            duration: duration,
            outlet: outlet,
            city: city,
            price: price,
            school: school
        }

        if (token) {
            axios.post(Config.url_add_training, data)
                .then((res) => {
                    console.log(res.data)
                    navigate('/')
                    setSuccessMessage('Formation ajoutee avec succes')
                })
                .catch((err) => {
                    console.log(err)
                    setErrorMessage('Une erreur est survenu veuller ressayer')
                })
        }

    }
    return (
        <section className="section section-lg">
            <Header /> <br />
            <Container>
                {successMessage && <h2 className="alert alert-success">{successMessage}</h2>}
                {errorMessage && <h2 className="alert alert-success">{errorMessage}</h2>}
                <Row>
                    <Col>
                        <form class="animate__animated animate__fadeIn" onSubmit={handleSubmit}>
                            <h1 className="text-center mb-4">Ajouter une formation</h1>
                            <div class="form-group">
                                <label for="title">Titre de la Formation</label>
                                <input type="text" class="form-control" id="title" placeholder="Entrez un titre  " onChange={handleChangeTitle} />
                            </div>
                            <div class="form-group">
                                <label for="city">Durée</label>
                                <input type="text" class="form-control" id="city" placeholder="Entrez la duree " onChange={handleChangeDuration} />
                            </div>
                            <div class="form-group">
                                <label for="duration">Debouchés</label>
                                <input type="text" class="form-control" id="duration" placeholder="Entrez les debouchés " onChange={handleChangeOutlet} />
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
                            <button class="btn btn-success animate__animated animate__bounceIn" onChange={handleSubmit}>Envoyer</button>
                        </form>

                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default AddTrainning