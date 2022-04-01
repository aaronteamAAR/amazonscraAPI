
const express = require('express');
const request = require ('request-promise');


const app = express();
const PORT = process.env.PORT || 5000;

//const apiKey = '20bb4341ee7f1628783d54e24d7c9021'

const generateScraperurl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());

app.get ('/', (req, res) =>{
    res.send('welcome to Opensea Scraper API');

});


//GET SINGLE ASSSET
                  
app.get('/products/:productID/', async (req, res) =>{
    const {productID} = req.params;
    const {apiKey} = req.query
 


    try{
        const response = await request(`${generateScraperurl(apiKey)}&url=https://www.amazon.com/dp/${productID}/`);
         res.json(JSON.parse(response));
    } catch (error){
       res.json(error);
    }

});

//GET PRODUCT REVIEW

app.get('/products/:productID/reviews', async (req, res) =>{
    const {productID} = req.params;
    const {apiKey} = req.query
 
 


    try{
        const response = await request(`${generateScraperurl(apiKey)}&url=https://www.amazon.com/product-reviews/${productID}/`);
         res.json(JSON.parse(response));
    } catch (error){
       res.json(error);
    }

});
//GET PRODUCT OFFERS



app.get('/products/:productID/offers', async (req, res) =>{
    const {productID} = req.params;
    const {apiKey} = req.query
 
 


    try{
        const response = await request(`${generateScraperurl(apiKey)}&url=https://www.amazon.com/gp/offer-listing/${productID}/`);
         res.json(JSON.parse(response));
    } catch (error){
       res.json(error);
    }

});

//GET SEARCH RESULTS


app.get('/search/:searchQuery', async (req, res) =>{
    const {searchQuery} = req.params;
    const {apiKey} = req.query
 
 


    try{
        const response = await request(`${generateScraperurl(apiKey)}&url=https://www.amazon.com/s?k=${searchQuery}`);
         res.json(JSON.parse(response));
    } catch (error){
       res.json(error);
    }

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
