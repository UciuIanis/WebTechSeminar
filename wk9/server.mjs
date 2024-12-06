import express from 'express';
import models from './models/index.mjs';

const app = express()
app.use(express.json())

app.get('/universities', async (req, res, next)=>{
    try {
        const universities = await models.University.findAll()
        res.status(200).json(universities)
    } catch (error) {
        next(error)
    }
})
app.post('/universities', async (req, res, next)=>{
    try {
        const university = await models.University.create(req.body)
        res.status(201).json(university)
    } catch (error) {
        next(error)
    }
})

app.get('/universities/export', async (req, res, next)=>{
    try {
        const fullData = await models.University.findAll({
            include: [{
                model: models.Course,
                include: [models.Student]
            }]
        })
        res.status(200).json(fullData)
    } catch (error) {
        next(error)
        
    }
})

app.get('/universities/:uid/students', async (req, res, next)=>{
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: [models.Student]
        })
        if(university){
            res.status(200).json(university.students)
        }else{
            res.status(404).json({message: 'university not found'})
        }
    } catch (error) {
        next(error)
    }
})
app.post('/universities/:uid/students', async (req, res, next)=>{
    try {
        const university = await models.University.findByPk(req.params.uid)
        if(university){
            const student = new models.Student(req.body)
            student.universityId = req.params.uid
            await student.save()
            res.status(200).json(student)
        }else{
            res.status(404).json({message: 'university not found'})
        }
    } catch (error) {
        next(error)        
    }
})

app.get('/universities/:uid/courses', async (req, res, next)=>{
    try {
        const university = await models.University.findByPk(req.params.uid, {
            include: [models.Course]
        })
        if(university){
            res.status(200).json(university.courses)
        }else{
            res.status(404).json({message: 'university not found'})
        }
    } catch (error) {
        next(error)
    }
})
app.post('/universities/:uid/courses', async (req, res, next)=>{
    try {
        const university = await models.University.findByPk(req.params.uid)
        if(university){
            const course = new models.Course(req.body)
            course.universityId = req.params.uid
            await course.save()
            res.status(200).json(course)
        }else{
            res.status(404).json({message: 'university not found'})
        }
    } catch (error) {
        next(error)        
    }
})

app.get('/courses/:cid/students', async (req, res, next)=>{
    try {
        const course = await models.Course.findByPk(req.params.cid)
        if(course){
            const students = await course.getStudents()
            res.status(200).json(students)
        }else{
            res.status(404).json({message: 'course not found'})
        }
    } catch (error) {
        next(error)        
    }
})
app.post('/courses/:cid/students', async (req, res, next)=>{
    try {
        const course = await models.Course.findByPk(req.params.cid)
        const student = await models.Student.findByPk(req.body.sid)

        if(course && student){
            course.addStudent(student)
            res.status(201).json({message: 'student added to course'})
        }else{
            res.status(404).json({message: 'course not found'})
        }
    } catch (error) {
        next(error)        
    }
})
app.get('/students/:sid/courses', async (req, res, next)=>{
    try {
        const student = await models.Student.findByPk(req.params.sid, {
            include: [models.Course]
        })
        if(course){
            res.status(200).json(student.courses)
        }else{
            res.status(404).json({message: 'course not found'})
        }
    } catch (error) {
        next(error)        
    }
})
app.post('/students/:sid/courses', async (req, res, next)=>{
    try {
        const student = await models.Student.findByPk(req.params.sid)
        const course = await models.Course.findByPk(req.body.cid)
        

        if(course && student){
            student.addCourse(course)
            res.status(201).json({message: 'student added to course'})
        }else{
            res.status(404).json({message: 'course not found'})
        }
    } catch (error) {
        next(error)        
    }
})

app.get('/universities/:uid', async (req, res, next)=>{
    try {
        const universities = await models.University.findByPk(req.params.uid, {
            include: [models.Student, models.Course]
        })
        if(universities){
            res.status(200).json(universities)
        } else{
            res.status(404).json({message: 'university not found'})
        }
    } catch (error) {
        next(error)
        
    }
})


app.use((err, req, res, next)=>{
    console.warn(err)
    res.status(500).json({message: 'something went wrong'})
})

app.listen(8080)