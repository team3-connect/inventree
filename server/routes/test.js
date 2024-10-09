const request = require("supertest");
const express = require("express");
const { FunkoPop } = require("../models");
const app = express();

app.use(express.json());

const funkoRoutes = require("../routes/funkopop.route");
app.use("/funkopops", funkoRoutes);

describe("./funkopops routes", () => {
  test("Testing funkopops endpoints", async () => {
    const res = await request(app).get("/funkopops");
    const resData = JSON.parse(res.text);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(resData)).toBe(true);
    expect(resData.length).toBeGreaterThan(0);
  });

  test("Testing finding funkopop by id", async () => {
    const res = await request(app).get("/funkopops/1");
    const funkoPop = JSON.parse(res.text);

    expect(res.statusCode).toBe(200);
    expect(funkoPop).toHaveProperty("name");
  });

  test("Testing creating a new funkopop", async () => {
    const newPop = {
      name: "Notorious B.I.G",
      description: "American rapper",
      price: "12.99",
      category: "Music",
      image:
        "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw298b41c2/images/funko/31550-1.png?sw=800&sh=800",
    };

    const res = await request(app).post("/funkopops").send(newPop);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe(newPop.name);
    expect(res.body.category).toBe("Music");
  });

  test("Testing updating a funkopop", async () => {
    const updatedPop = {
      name: "CeeDee Lamb",
      description: "Nfl",
      category: "Sports",
      image:
        "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb128eab8/images/funko/upload/81920_POP-NFL_Cowboys_CeeDee-Lamb_POP_GLAM-WEB.png?sw=800&sh=800",
    };

    const res = await request(app).put("/funkopops/1").send(updatedPop);

    expect(res.statusCode).toBe(200);

    const updatedFunko = res.body.find((funkoPop) => funkoPop.id === 1);

    expect(updatedFunko.name).toBe(updatedPop.name);
    expect(updatedFunko.description).toBe(updatedPop.description);
    expect(updatedFunko.category).toBe(updatedPop.category);
    expect(updatedFunko.image).toBe(updatedPop.image);
  });

  test("Testing deleting a funkopop", async () => {
    const res = await request(app).delete("/funkopops/1");

    expect(res.statusCode).toBe(200);
  });
});
