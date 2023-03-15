let { faker } = require(`@faker-js/faker`);

const app = require(`./app`)
const port = process.env.PORT || "3000";

app.listen(port, function() {
    console.log('Express started on http://localhost:' + port)
});