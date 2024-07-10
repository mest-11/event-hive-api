import { collegeModel } from "../models/college-model.js";


export const getCollege = async (req, res, next) => {
    try {
        const findCollege = await collegeModel.find()
        res.json(findCollege)
    } catch (error) {
        next(error)

    }
}


export const postCollege = async (req, res, next) => {
    try {
        const addCollege = await collegeModel.create(req.body)
        res.json(addCollege)

    } catch (error) {
        next(error)

    }
}

export const patchCollege = async (req, res, next) => {
    try {
        const updatedCollege = await collegeModel.findByIdUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedCollege)
    } catch (error) {
        next(error)

    }
}