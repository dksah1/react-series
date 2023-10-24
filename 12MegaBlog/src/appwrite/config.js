import conf from "../conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.API_ENDPOINT)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,
        status,userId}) {
            try {
                
            } catch (error) {
                console.log("Appwrite service :: createPost :: error", error);
            }
        }
     
}


const service = new Service()
export default service

