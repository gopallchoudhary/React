import express from "express";
const app = express();
const port = 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table metal",
      price: 300,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxgEFncoNV-HCBcPqueudGqc0obsz_yP1gw&s",
    },
    {
      id: 2,
      name: "table polyester",
      price: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGJfOKwhMyiEdfY9FxLaRv0F4WiWHJmucLA&s",
    },
    {
      id: 3,
      name: "table plastic",
      price: 150,
      iamge:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXkC5KMNpGqUsXeVxWFRA0hZIrLsr3cHY9w&s",
    },
    {
      id: 4,
      name: "table glass",
      price: 250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfi3RW4eGs1QETqVnddXyD8wZixuqlXi43g&s",
    },
    {
      id: 5,
      name: "table wooden",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVZYler46lV2RP6CXzPw6NmKo0UwYC5FfYg&s",
    },
  ];

  //http://localhost:3000/api/products?search=metal (? => query
  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
