import instance from "../instance";
import { Store } from "../types/store";

export async function createStore(input: Omit<Store, "id">) {
  try {
    const res = await instance.post("/stores", input);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function getAllStores() {
  try {
    const res = await instance.get<{
      data: Store[];
    }>("/stores");
    return res.data;
  } catch (error) {
    return {
      data: [],
    };
  }
}
