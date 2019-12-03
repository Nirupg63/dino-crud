import mongoose from 'mongoose'

const DinosaurSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
})

export default mongoose.model('Dinosaur', DinosaurSchema)