import mongoose from "mongoose";
class DataBase {
    URL: string;
    constructor() {
        this.URL = 'mongodb+srv://usuario:contraseña@general-9amma.mongodb.net/test?retryWrites=true'
        this.config()
    }
    async start() {
        try {
            await mongoose.connect(this.URL, { useNewUrlParser: true, useCreateIndex: true })
            console.log('done');
        } catch (error) {
            console.log(error)
        }
    }
    config() {
        mongoose.set('useNewUrlParser', true)
        mongoose.set('useCreateIndex', true)
    }
}

const base = new DataBase()
base.start()