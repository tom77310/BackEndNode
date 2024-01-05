const  request  = require("supertest")
const app = require('./app')


describe('Express API', ()=>{
    it('GET /allblogs --> array blogs ', ()=>{
        return request(app)
            .get('/allblogs')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) =>{
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            sujet : expect.any(String),
                            description : expect.any(String)
                        })
                    ])
                )
            })
    })

    it('GET /blog/id --> specific blog by ID ', ()=>{
        return request(app)
            .get('/blog/6582aff80eebef1d4b378f69')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) =>{
                expect(response.body).toEqual(
                        expect.objectContaining({
                            sujet : expect.any(String),
                            description : expect.any(String)
                        })
                )
            })
    })

    it('GET /blog/id --> 404 if not found', ()=>{
        return request(app).get('/blog/9999999999999999999').expect(404)
    })

    it('POST /addblog  --> created blog', ()=>{     
        return request(app).post('/addblog').send({
            titre : 'exemple de titre', 
            description : 'description'
        }).expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201)
            .then((response)=>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        result : expect.any(String)
                    })
                )
            })
    });

})