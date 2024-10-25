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

    // requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjI4YTQyMWNhZmJlM2RkODg5MjcxZGY5MDBmNGJiZjE2ZGI1YzI0ZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDgyNDI4MDE3NDY1NjIwMjkyMyIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6ImVyYS5pbHlhc2FAbnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzI4MDUyMTA4LCJuYW1lIjoiRXJhIElseWFzYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMZTV0aGZBTGZsaHJySExFNGFpVkFud1hwWVB3Ti1YX05rWDRteUZSb1pwbUIxX1E9czk2LWMiLCJnaXZlbl9uYW1lIjoiRXJhIiwiZmFtaWx5X25hbWUiOiJJbHlhc2EiLCJpYXQiOjE3MjgwNTI0MDgsImV4cCI6MTcyODA1NjAwOCwianRpIjoiNjE3NWQ0OGQ2MGU3ZWRmNTAxOGY3OTljMzY5MDdkMWU4NzU3OTY1NCJ9.Ls3ueWlqO9jsAzn026bPRsyeHxohHrT-OGy6CZOrhox3sxPP5NN2JheN6Lbk4zjVqcD1xm48rVOIZ0V9NVmVcdhFSUSbclLD_M2rScM1mjJxeKFauEVyb7VFoQ_czzWU-VkyM4mpugFZP3UuWFXdFIRJlky1pAoAlDDQUfIj1evApuDNT8itqDSVGibdNbpDgsXuVyVnaHckYMSXo4aQv6cUUJ9KCZ1uQy5twdJEruVRaGBVpWfgbStn7h6bAFQ6uCVQaV4EaaBbSR9Btw_cEDEvZe-sKvgQgngUlqJXEod_LDqOtAoGsrfkiHnfV0pNCLJyaiQHBK3P2J7iVQPhIg"}

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


