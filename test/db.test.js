const { FunkoPop } = require("../server/models");

describe("FunkoPop Model Test", () => {
  test("Can create a new FunkoPop", async () => {
    const newFunko = await FunkoPop.create({
      name: "Michael Myers",
      price: "$" + 15.99,
      description: "Horror",
      category: "Movies",
      image:
        "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw09e66306/images/funko/64908-1.png?sw=800&sh=800",
    });
    expect(newFunko.name).toBe("Michael Myers");
    expect(newFunko.description).toBe("Horror");
  });

  test("Can read a FunkoPop", async () => {
    const foundFunko = await FunkoPop.findOne({
      where: { name: "Michael Myers" },
    });

    expect(foundFunko).not.toBeNull();
    expect(foundFunko.name).toBe("Michael Myers");
  });

  test("Can update a FunkoPop", async () => {
    const updateFunko = await FunkoPop.update(
      { price: "$" + 19.99 },
      { where: { name: "Michael Myers" } }
    );
    const updatedFunko = await FunkoPop.findOne({
      where: { name: "Michael Myers" },
    });
    expect(updatedFunko.price).toBe("$" + 19.99);
  });

  test("Can delete a FunkoPop", async () => {
    await FunkoPop.destroy({ where: { name: "Michael Myers" } });
    const deletedFunko = await FunkoPop.findOne({
      where: { name: "Michael Myers" },
    });
    expect(deletedFunko).toBeNull();
  });
});
