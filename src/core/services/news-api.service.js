import {LogoApiService} from "./logo-api.service";
import axios from "axios";

const http=axios.create({ baseURL: 'https://newsapi.org/v2/'});

export class NewsApiService{
    apikey='a39a7407bfc7482baaa2c9f1939fe391';
    logoApi=new LogoApiService();

    getSources(){
        return http.get(`top-headlines/sources?lenguage=en&apiKey=${this.apikey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apikey}`)
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(Source);
    }

}