"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Digite parametro da comida exemplo "batata"
 * @param nome
 * @returns iformações sobre batata
 */
async function Food(nome) {
    let food = await axios_1.default.get(`https://apifome.online/comida/${nome}`);
    return food;
}
exports.Food = Food;
