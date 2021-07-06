var express = require('express');
var request = require('request');
var router = express.Router();

const options = {
    method: 'GET',
    url: 'http://hp-api.herokuapp.com/api/characters'
}

router.get('/students', (req, res, next) => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body));
    });
});

router.get('/randomstudent', (req, res, next) => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let [studentsPerHouse, championPerHouse] = [{}, []];
        const students = JSON.parse(body).filter(s => s.house != '');
        const houses = Array.from(new Set(students.map(s => s.house)));
        houses.map(h => studentsPerHouse[h] = []);
        students.map(s => studentsPerHouse[s.house].push(s));
        Object.values(studentsPerHouse).forEach(students => {
            const randomChampion = students[Math.floor(Math.random() * students.length)];
            championPerHouse.push(randomChampion);
        });
        res.json(championPerHouse);
    });
});

module.exports = router;
