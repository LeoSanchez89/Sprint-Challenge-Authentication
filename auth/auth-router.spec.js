const request = require("supertest");

const server = require("../api/server.js");

describe("auth-router.js", function () {
    
    const expected = { "message": "Welcome Test!" }


	describe("POST /register", function() {
		it("should return 201 ok AND return JSON AND have username length of 5", function() {
			return request(server)
				.post("/api/auth/register")
				.send({ username: "Test3", password: "Test3" })
				.then(res => {
					expect(res.status).toBe(201);
                    expect(res.type).toMatch(/json/i);
                    expect(res.body.username).toHaveLength(5)
				});
		});
	});

	describe("POST /login", function() {
		it("should return 200 ok AND return JSON AND return greeting", function() {
			return request(server)
				.post("/api/auth/login")
				.send({ username: "Test", password: "Test" })
				.then(res => {
					expect(res.status).toBe(200);
                    expect(res.type).toMatch(/json/i);
                    expect(res.body).toEqual(expect.objectContaining(expected));
				});
		});
	});
});
