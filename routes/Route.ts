import * as express from "express";

export default class Route {

    readonly path: string;
    readonly fct: (req, res, next) => void;

    constructor(path: string, fct: (req, res, next) => void) {
        this.path = path;
        this.fct = fct;
    }

    public get() {
        return express.Router().get(this.path, this.fct);
    }

}