const getTheTitles = require("./getTheTitles");

describe("getTheTitles", () => {
  const books = [
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ];

  test("gets titles", () => {
    expect(getTheTitles(books)).toEqual(["Book", "Book2"]);
  });

  const books2 = [...books];
  books2.push({ title: "Book3", author: "Name3" });

  test("gets more titles", () => {
    expect(getTheTitles(books2)).toEqual(["Book", "Book2", "Book3"]);
  });
});
