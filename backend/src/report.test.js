const request = require("supertest");
import app from "./server";

describe("POST /upload", () => {
  it("should upload an XML file", async () => {
    const response = await request(app)
      .post("/upload")
      .attach("xmlFile", "upload/sample.xml");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it("should return error when no file is uploaded", async () => {
    const response = await request(app).post("/upload");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("No file uploaded");
  });
});

describe("GET /reports", () => {
  it("should retrieve reports", async () => {
    const response = await request(app).get("/reports");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("DELETE /report/:id", () => {
  it("should delete a report", async () => {
    const response = await request(app).delete("/report/1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Report deleted successfully!");
  });
});
