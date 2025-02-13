import express from 'express';
import axios from 'axios';
import cors from "cors";

const app = express();
const PORT = 5000;


app.use(cors());
const JOOBLE_API_KEY = "3fbdb4b9-b008-4b5b-99d4-f7ca5c72775d";

app.use(express.json());

app.get("/api/jobs", async (req,res) => {   

    const {location } = req.query;
    const {keywords} = req.query;

    console.log(req.query)

    const response = await axios.post(`https://jooble.org/api/${JOOBLE_API_KEY}`,{
        keywords:  keywords,
        location: location
    })

    res.json(response.data);

})


app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})