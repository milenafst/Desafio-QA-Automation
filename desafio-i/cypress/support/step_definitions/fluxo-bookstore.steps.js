import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let userId
let token
let livros = []

const username = `user_${Date.now()}`
const password = "Teste@12345"

Given("que crio um novo usuário", () => {
  cy.request("POST", "/Account/v1/User", {
    userName: username,
    password: password,
  }).then((res) => {
    expect(res.status).to.eq(201)
    userId = res.body.userID
  })
})

Given("gero um token de acesso", () => {
  cy.request("POST", "/Account/v1/GenerateToken", {
    userName: username,
    password: password,
  }).then((res) => {
    expect(res.status).to.eq(200)
    token = res.body.token
  })
})

Given("confirmo que o usuário está autorizado", () => {
  cy.request("POST", "/Account/v1/Authorized", {
    userName: username,
    password: password,
  }).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body).to.eq(true)
  })
})

When("consulto os livros disponíveis", () => {
  cy.request("GET", "/BookStore/v1/Books").then((res) => {
    expect(res.status).to.eq(200)
    livros = res.body.books.slice(0, 2)
  })
})

When("reservo dois livros", () => {
  cy.request({
    method: "POST",
    url: "/BookStore/v1/Books",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      userId: userId,
      collectionOfIsbns: livros.map((l) => ({ isbn: l.isbn })),
    },
  }).then((res) => {
    expect(res.status).to.eq(201)
  })
})

Then("devo ver o usuário com os livros reservados", () => {
  cy.request({
    method: "GET",
    url: `/Account/v1/User/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body.books).to.have.length(2)
  })
})
