import instance from "../instance";
import { ProductGRN, Store, StoreWithProduct } from "../types/store";

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

export async function getStoreWithProducts(id: string) {
  try {
    const res = await instance.get<{
      data: StoreWithProduct;
    }>(`/stores/${id}`);
    return res.data;
  } catch (error) {
    return {
      data: null,
    };
  }
}

export async function getProductGrns(storeId: string, productId: string) {
  try {
    const res = await instance.get<{
      data: ProductGRN;
    }>(`/stores/${storeId}/${productId}`);
    return res.data;
  } catch (error) {
    return {
      data: null,
    };
  }
}

export async function storeDetails(id: string) {
  try {
    const res = await instance.get<{
      data: {
        grns: number;
        fromTRs: number;
        toTRs: number;
      };
    }>(`/stores/${id}/details`);
    return res.data;
  } catch (error) {
    return { data: null };
  }
}
