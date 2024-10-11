import mongoose  from 'mongoose';

export default async function connectToDb(){
    if(mongoose.connections[0].readyState) return;
    const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@newqualitymarble.jhzfz.mongodb.net/WebsiteData?appName=newqualitymarble`;
    try{
        await mongoose.connect(url);
        console.log('Connection done')
    } catch(e){
        console.log(e)
    }
}