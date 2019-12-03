import Dinosaur from '../models/dinosaur.model'
import { Response, Request } from 'express'

const list = async (req: Request, res: Response) => {
    try {
        let dinos = await Dinosaur.find().exec();
        res.json(dinos)
    } catch (err) {
        res.send(err.message)
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const dino = new Dinosaur(req.body);
        let result = await dino.save();
        console.log(result);
        res.send("Dinosaur created")
    } catch (err) {
        res.send(err.message)
    }
}

const read = async (req: Request, res: Response) => {
    try {
       const dino = await Dinosaur.findById(req.params.dinoId).exec()
       console.log(dino);
       res.json(dino);
    } catch (err) {
        res.send(err.message)
    }
}

const remove = async (req: Request, res: Response) => {
    try {
        const result = await Dinosaur.findByIdAndDelete(req.params.dinoId).exec()
        console.log(result);
        res.json(result);
    } catch (err) {
        res.send(err.message)
    }
}   


export default { list, create, read, remove }