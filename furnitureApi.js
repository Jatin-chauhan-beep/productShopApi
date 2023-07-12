let express = require("express");
let app = express();
let fs = require("fs");
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Listening on port ${port}!`));

let products = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: ["Two	seater	Dining	Set", "Built	from	High	quality	wood", "1	year	warranty"],
    img: "https://hometown.gumlet.io/media/product/61/9353/47156/1.jpg?w=768&dpr=1.3",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two	seater Dining Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Made	from	Teak	wood",
    ],
    img: "https://hometown.gumlet.io/media/product/58/8673/91345/1.jpg?w=1536&dpr=1.3",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six	Seater Dining Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
      "Knock-down	construction	for	easy	transportation",
    ],
    img: "https://hometown.gumlet.io/media/product/39/9563/78051/1.jpg?w=768&dpr=1.3",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild	Steel	Dining	Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
      "Beautiful	design	carved	on	dining	chair",
      "Dining	chair	seat	upholstered	in	dark	brown	Fabric",
    ],
    img: "https://hometown.gumlet.io/media/product/54/9453/70090/1.jpg?w=768&dpr=1.3",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining	Chair	Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
      "Comfortable	bench	for	a	relaxed	dinner",
    ],
    img: "https://hometown.gumlet.io/media/product/55/3063/83757/1.jpg?w=768&dpr=1.3",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining	Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic	Rising	Track	Arm	Rest	Design",
      "Premium	High	Gloss	Leatherette	Upholstery",
      "Independent	Headrest	And	Lumber	Support",
    ],
    img: "https://hometown.gumlet.io/media/product/94/8273/83280/1.jpg?w=1100&dpr=1.3",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two	Seater	Sofa	in	Blue	Colour", "Assembly	by	Skilled	Carpenters"],
    img: "https://hometown.gumlet.io/media/product/97/2073/47584/1.jpg?w=576&dpr=1.3",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two	Seater	Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa	Cum	bed	in	Brown	Colour",
      "Ply-wood	construction	with	hand	polished	finish",
      "Removable	fabric	cover	on	best	quality	foam	mattress",
      "Throw	cushions	and	bolsters	come	with	the	product",
    ],
    img: "https://hometown.gumlet.io/media/product/40/0653/84712/1.jpg?w=1536&dpr=1.3",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa cum Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
      "Box	Storage	included	for	Maximum	space	utilization",
      "Mattress	is	included",
    ],
    img: "https://hometown.gumlet.io/media/product/43/8153/54285/1.jpg?w=576&dpr=1.3",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King size Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood	Hydraulic	Storage	Queen	Size	Bed",
      "Half	hydraulic	storage",
      "Superior	E2	grade	MDF	used	with	melamine	finish",
    ],
    img: "https://hometown.gumlet.io/media/product/09/7153/41739/1.jpg?w=1100&dpr=1.3",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen size Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood	Study	Table	in	Walnut	Colour",
      "Assembly	by	Skilled	Carpenters",
      "Built	from	High	Quality	Wood",
    ],
    img: "https://hometown.gumlet.io/media/product/82/1063/77724/1.jpg?w=576&dpr=1.3",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
      "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
      "Superior	quality	MDF	with	stain	resistant	melamine	finish",
    ],
    img: "https://hometown.gumlet.io/media/product/31/9353/34934/1.jpg?w=1100&dpr=1.3",
    ingredients: [{ ingName: "Study	Table", qty: 1 }],
    title: "Study Table",
  },
];
let users = [
  { email: "user@user.com", password: "user123", role: "user" },
  { email: "admin@admin.com", password: "admin123", role: "admin" },
];

app.get("/products/:category?", (req, res) => {
  let { category, prodCode } = req.params;
  let arr = [...products];
  if (category) {
    arr = arr.filter((f) => f.category === category);
    res.send(arr);
  } else res.send(arr);
});

app.get("/product/:categoty/:prodCode", (req, res) => {
  let { category, prodCode } = req.params;
  let prod = products.find((f) => f.prodCode === prodCode);
  if (prod) res.send(prod);
  else res.status(404).send("not found");
});
app.get("/product/code/:prodCode", (req, res) => {
  let { category, prodCode } = req.params;
  let prod = products.find((f) => f.prodCode === prodCode);
  if (prod) res.send(prod);
  else res.status(404).send("not found");
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  let user = users.find((f) => f.email === email && f.password === password);
  if (user) res.send({ role: user.role });
  else res.status(400).send("Error");
});

app.post("/products", (req, res) => {
  let body = req.body;
  products.push(body);
  res.send(body);
});

app.put("/products/:prodCode", (req, res) => {
  let prodCode = req.params.prodCode;
  let body = req.body;
  let index = products.findIndex((f) => f.prodCode === prodCode);
  if (index >= 0) {
    products[index] = body;
    res.send(body);
  } else res.status(404).send("not Found");
});

app.delete("/products/:prodCode", (req, res) => {
  let prodCode = req.params.prodCode;
  let index = products.findIndex((f) => f.prodCode === prodCode);
  if (index >= 0) {
    products.splice(index, 1);
    res.send("Deleted");
  } else res.status(404).send("not found");
});
