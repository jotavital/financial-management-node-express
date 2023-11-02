import mongoose from 'mongoose';
import app from './app';
import 'dotenv/config';

mongoose.connect(
    `mongodb+srv://joaopedrovitaldoctum:${process.env.MONGO_DB_PASSWORD}@financial-management-cl.6zbi9e2.mongodb.net/financial-management?retryWrites=true&w=majority`
);

app.listen(process.env.APP_PORT, () =>
    console.log(`Server is running at port ${process.env.APP_PORT}.`)
);
