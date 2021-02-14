const supertest = require("supertest");

const host = "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";
const request = supertest(host);

// This is a sample test to help you get started. You can remove it if you would like.
describe('Test the root path', () => {
  it('It should return 302 for the GET method', async () => {
    const response = await request.get('/')
    expect(response.statusCode).toBe(302)
  })
});

describe("POST /challenge-register", () => {
  it("can create an account", async () => {
    const newUser = await request
      .post("/challenge-register")
      .send({
        name: "Jane Doe",
        email: "jane@doe.com"
      });
    });
});

describe("POST /challenge-conversation", () => {
  it("can inititalize the conversation", async () => {
    const newUser = await request
      .post("/challenge-conversation")
      .send({
        user_id: "<YOUR USER ID>"
      });
    });
});

describe("GET /challenge-behaviour/<YOUR CONVERSATION ID>", () => {
  it("retrieves new messages", async () => {
    //const newUser = await request
    //  .patch(`/challenge-behaviour/${newUser.user_id}`)
    });
});

describe("POST /challenge-behaviour/<YOUR CONVERSATION ID>", () => {
  it("replies to the chatbot", async () => {
    });
});
