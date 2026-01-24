const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Express!"));

// Only start server if NOT in test mode
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
