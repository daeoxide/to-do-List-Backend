const app = require("./app")
require('dotenv').config();

const PORT = process.env.PORt || 3030

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
