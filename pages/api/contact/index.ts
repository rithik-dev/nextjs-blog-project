// noinspection JSUnusedGlobalSymbols

import {NextApiHandler} from "next";
import {MongoClient} from "mongodb";

const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'POST') {
        const {email, name, message} = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            return res.status(422).json({message: 'Invalid input'});
        }

        const newMessage: any = {
            email, name, message,
        }

        let client: MongoClient;
        try {
            const mongoBaseUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.szwvn.mongodb.net`;
            client = await MongoClient.connect(`${mongoBaseUrl}/my-blog-site`);
        } catch (e) {
            return res.status(500).json({message: 'Could not connect to the database.'});
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (e) {
            await client.close();
            return res.status(500).json({message: 'Storing message failed.'});
        }

        await client.close();
        return res.status(201).json({message: 'Successfully stored message', msg: newMessage});
    }
}

export default handler;
