import axios from "axios";
/**
 * Digite parametro da comida exemplo "batata"
 * @param nome
 * @returns iformações sobre batata
 */
export async function Food(nome: any): Promise<Food> {
  let food: Food = await axios.get(`https://apifome.online/comida/${nome}`);
  return food;
}
