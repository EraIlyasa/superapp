import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any
let token: any
let user: any

When('api user login', async function () {

    // token mas maul
    requestBody = {"idtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmEuamF5YWRpQG51c2FudGFyYS50ZWNobm9sb2d5IiwiaWF0IjoxNjg4NzE2MDA3LCJleHAiOjE2ODkzMjA4MDd9.4bPa_tlSFjqOZ5GBgzuOj80fh2FbnmcaGyI9ZA_ORYo"}

    // requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImM4OGQ4MDlmNGRiOTQzZGY1M2RhN2FjY2ZkNDc3NjRkMDViYTM5MWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDgyNDI4MDE3NDY1NjIwMjkyMyIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6ImVyYS5pbHlhc2FAbnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzI5OTQzODc1LCJuYW1lIjoiRXJhIElseWFzYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMZTV0aGZBTGZsaHJySExFNGFpVkFud1hwWVB3Ti1YX05rWDRteUZSb1pwbUIxX1E9czk2LWMiLCJnaXZlbl9uYW1lIjoiRXJhIiwiZmFtaWx5X25hbWUiOiJJbHlhc2EiLCJpYXQiOjE3Mjk5NDQxNzUsImV4cCI6MTcyOTk0Nzc3NSwianRpIjoiNDY1YTEyMGQwOWNhM2U3YjA2NTI2N2RiYTJiNWZiY2YwNjU4OTIzOCJ9.CdDjLWFA1T3IOZggUHhLPAiW1BLwVKsf4Tabw89FJ31kcbhJrjkPhNt_k9bQRNwuruWITq_8Oh1GmLWl-KIZFOkQHrmaV-KFZ3n_Q5dvcXhvR_6cPgxIcbXFkDz3URRHbmLXl7SgIIWlVgCJoMJyoq-eAcuZMrcfdxl9cVdxSpoHMLyaVYhzhpEbaUgiJSCnbJJ6JYZ0N10GJqq6ZE-8rbxzPqSfkchbzfd2syCry7MeA-MLGaTbkbXJv9leg0u8L9g-3bu6zbRkOiYlYe_q_tJ8vUSjLss7bhK1FwX9txW5lac0pNHjH-G_WvHkG-G5RgSLj-iZneunowc4fw-HpQ"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    // console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)
    expect(response.data).to.have.property('access_token')

    token = response.data.access_token
    console.log('Token:', token)

    user = response.data.user
    // console.log('User:', user)
    // console.log('Warehouse Id:', user.warehouse_id)

    this.token = token
    this.user = user
    this.warehouse_id = user.warehouse_id
})


