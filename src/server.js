import { join } from "path";
import * as sapper from '@sapper/server';
import express from "express";

const { PORT } = process.env;
const app = express();

app.use(express.static(join(process.cwd(), "static")));
app.use(express.static(join(process.cwd(), "node_modules", "mdb-ui-kit", "css")));
app.use(express.static(join(process.cwd(), "node_modules", "mdb-ui-kit", "js")));
app.use(sapper.middleware());
app.listen(PORT);