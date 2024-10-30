#!/usr/bin/env node

//This is using the random verse API from bible-api.com

import axios from 'axios';

interface BibleVerse {
    text: string;
    reference: string;
}

async function fetchRandomVerse() {
    try {
        const response = await axios.get<BibleVerse>('https://bible-api.com/?random=verse');
        const verse = response.data;

        console.log(`"${verse.text}" - ${verse.reference}`);
    }catch(error) {
        console.log("Error fetching verse");
    }
}

fetchRandomVerse();