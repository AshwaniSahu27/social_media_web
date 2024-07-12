import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  
  async createAccount({ email, password, username,occupation,city,state }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username,
        occupation,
        city,
        state
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("This is createAccount error", error);
      return error.message;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("This is login error", error);
      return error.message;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("THis is getCurrentUser Error :", error);
      return error.message;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.log("This is logout error", error);
      return error.message;
    }
  }
  
}

const authServices = new AuthServices();
export default authServices;
