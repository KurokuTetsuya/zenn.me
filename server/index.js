if (process.argv[2] === "dev") process.env.NODE_ENV = "development";
const express = require("express");
const app = express();
const PORT  = process.env.PORT || 8585;
const { instagramUserID, instagramToken, wakatimeSharedLanguage } = require("./config.json")
const { resolve } = require("path");
const { get } = require("superagent");

app.use(express.static(resolve(__dirname, "..", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Origin", process.env.NODE_ENV ? `http://localhost:${PORT}/` : "https://zenn.me/");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get("/", performReactPage);
app.get("/activity", performReactPage);

// API
app.get("/api/wakatime/lang", async (request, response) => {
    const { body } = await get(wakatimeSharedLanguage);
    return response.status(200).send(body.data);
});

app.get("/api/instagram", async (request, response) => {
    const { body } = await get(`https://graph.instagram.com/${instagramUserID}/media`)
        .query({ access_token: instagramToken, fields: "permalink" });
    return response.status(200).send(body);
});
// 404 Routing. Keep this as the last route.
app.get("*", (request, response) => {
    return response.status(200).redirect("/");
});

app.listen(PORT, () => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Listening to http://localhost:${PORT}/`);
});

function performReactPage(request, response, next) {
    return response.status(/404/g.exec(request.route) ? 404 : 200).sendFile(resolve(__dirname, "..", "build", "index.html"));
}