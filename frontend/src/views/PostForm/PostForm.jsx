import React from 'react';
import {useState} from "react";
import axios from 'axios';


function PostForm() {
    const [userID, setUserID] = useState('');
    const [teamID, setTeamID] = useState('');
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    const [file, setFile] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        const gameData = {
            userID,
            teamID,
            desc,
            genre,
            image,
            file
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/games)', gameData);
            console.log('Игра отправлена успешно: ', response.data);
        } catch (error) {
            console.error('Ошибка: ', error.response ? error.response.data : error.message);
        }
    }

    return (  
        <main className="post-form__wrapper">
            
        </main>
    );
}

export default PostForm;