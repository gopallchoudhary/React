import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    //<-..CONSTRUCTOR..->
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    //  <-..CREATE-ACCOUNT..->
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create
                (ID.unique, email, password, name)
            if (userAccount) {
                //call another method
                return this.login({ email, password });
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    //  <-..LOG-IN..->
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession //for login
                (email, password);
        } catch (error) {
            throw error
        }
    }

    // <-..CURRENT-USER..->
    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log("Appwrite servie::getCurrentUser::error", error)
        }
        return null;

    }

    // <-..LOG-0UT..->
    async logout() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.log("Appwrite servie :: logout :: error", error);
        }
    }


}

const authService = new AuthService();

export default authService