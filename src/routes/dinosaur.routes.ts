import express from 'express'
import dinoCtrl from '../controllers/dinosaur.controller'

const router = express.Router()

router.route('/api/dinosaur')
    .get(dinoCtrl.list)
    .post(dinoCtrl.create)

router.route('/api/dinosaur/:dinoId')
    .get(dinoCtrl.read)
    .delete(dinoCtrl.remove)

export default router