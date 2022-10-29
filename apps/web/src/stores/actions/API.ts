import axios from "axios";


const instance = axios.create({
    baseURL: 'https://dev.api.tjsl.apps360.id/',
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMjI1YzcwZS1lM2QxLTQ1ODMtODg5MS04OTJmNzkwMmEwNDEiLCJ1bmlxdWVfbmFtZSI6IjE5NDAiLCJyb2xlIjoiMzk0NjE1MGEtNzU2OC00YWM2LTlhZjktMDY0YzkyYWU0MTFiIiwibmJmIjoxNjY3MDYxNTg1LCJleHAiOjE2NjcxNDc5ODUsImlhdCI6MTY2NzA2MTU4NX0.KjNd_pXmZAZDWomwB3nmJSPvVkvlJNWOPXJJ3pspxUI` || "" },
});

export default instance;
