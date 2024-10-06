import mongoose  from 'mongoose';
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;


const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
export default async function connectToDb(dataBase){
    const url = `mongodb+srv://${dbUsername}:${dbPassword}@newqualitymarble.jhzfz.mongodb.net/WebsiteData?appName=newqualitymarble`
    try{
        await mongoose.connect(url,);
        console.log('Connection done')
    } catch(e){
        console.log(e)
        return {res: 'Connection fail'}
    }
}