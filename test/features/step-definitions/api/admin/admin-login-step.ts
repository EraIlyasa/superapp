import { When } from '@cucumber/cucumber'
import axios from 'axios'
import { expect } from 'chai'

let response: any
let requestBody: any

When('I login as admin', async function () {
    
    requestBody = {"idtoken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyNjIwZDVlN2YxMzJiNTJhZmU4ODc1Y2RmMzc3NmMwNjQyNDlkMDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDAyMDMwODE3MjAxLTIwNWs3OXNjZWFlNTF0c2ZpcGJndjl1ZXNmZWdkYTRuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAwMjAzMDgxNzIwMS0yMDVrNzlzY2VhZTUxdHNmaXBiZ3Y5dWVzZmVnZGE0bi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNjAyNDU1NDQxMzk4Njk3MTk5NiIsImhkIjoibnVzYW50YXJhLnRlY2hub2xvZ3kiLCJlbWFpbCI6Im1hcmlhbnN5YWgucml3ZW5kaUBudXNhbnRhcmEudGVjaG5vbG9neSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MjY3MzkwMDAsIm5hbWUiOiJNdWhhbW1hZCBBcmlhbnN5YWggUml3ZW5kaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKNjd0OThNU2VNUl9QaHM0RFpKSG0wT05SMUVxcXk4MmlFR1NFS01vNko0bmVFOFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTXVoYW1tYWQgQXJpYW5zeWFoIiwiZmFtaWx5X25hbWUiOiJSaXdlbmRpIiwiaWF0IjoxNzI2NzM5MzAwLCJleHAiOjE3MjY3NDI5MDAsImp0aSI6IjRkNTlkNjA0OWM0NDc4ZjhmMTdkZjFjODRiZDZhYTY0Njk1MDVmMzIifQ.TB9dynAAzRyBXqU8NGxo36RoeR3A8DCPK802wSce1wPpBgoXb-iXI7PR_NUv8MXFmabjJWf3n-nhycPxS8Kbr9AMasz0OFG1TpoZ-vNWD36mfPCgpBlbUliaG9R5dNKq7CckDjwdsZAWkODAosBmI5-5r1Ru4EsGqx--6de6PYU0kbZQzTUQclLiA81x_Z_MWhh1jqHCXkLEi3FLzET7DAF4T8Qs48EfAKE296b09b8sfLhPMXShlRCy54cnBZ1SppieKetEp2A-GJMeN0Ofh0y2tvUYWqxGWtjmVefpE_URwBjJvLVZeD8O9ReCwLvYQYzwbyKhpONSub0qkAacwA"}

    response = await axios.post('https://staging-api-dashboard.superapp.co.id/api/v3/auth/super-sso', requestBody)

    console.log('Response Data:', JSON.stringify(response.data, null, 2));

    expect(response.status).to.equal(201)

    expect(response.data).to.have.property('access_token')

    const token = response.data.access_token;
    console.log('Token:', token);

    this.token = token
})