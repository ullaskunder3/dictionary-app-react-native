import axios from "axios";

async function getRandomWord() {
    try {
        const response = await axios.get(`https://random-words-api.vercel.app/word`);           
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("ERROR:check axios:", error.message);
            return '404';
        }else{
            console.log("ERROR: something else", error);
            return "404"
        }
    }
}

export default getRandomWord;