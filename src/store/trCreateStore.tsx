import { create } from "zustand";

export type GrnSelect = {
  accepted_quantity: number;
  grn_detail_id: number | null;
  returned_quantity: number;
};

type ReturnUpdate = {
  key: number;
  grn_detail_id: number;
};

interface State {
  grnDetails: Map<number, GrnSelect[]>;
  updatedKeys: ReturnUpdate[];
}
type InitType = {
  key: number;
  details: GrnSelect[];
};

type Action = {
  addNew: (input: InitType[]) => void;
  pushOne: (key: number) => void;
  updateOne: (key: number, index: number, detail: Partial<GrnSelect>) => void;
  removeOne: (key: number, index: number) => void;
  clearTransferDetail: (key: number) => void;
  clearAll: () => void;
  getOne: (key: number, index: number) => GrnSelect | undefined;

  addToUpdated: (key: ReturnUpdate) => void;
  removeUpdated: (key: ReturnUpdate) => void;
};

export const usegrnSelectStore = create<State & Action>((set) => ({
  grnDetails: new Map(),
  updatedKeys: [],
  addNew: (input) =>
    set(({ grnDetails }) => {
      input.forEach((inp) => grnDetails.set(inp.key, inp.details));
      return { grnDetails };
    }),

  pushOne: (key) =>
    set(({ grnDetails }) => {
      const details = grnDetails.get(key);
      if (details) {
        details.push({
          accepted_quantity: 0,
          returned_quantity: 0,
          grn_detail_id: null,
        });
      }
      return { grnDetails };
    }),

  removeOne: (id, index) =>
    set(({ grnDetails }) => {
      const old = grnDetails.get(id);
      if (old) {
        grnDetails.set(
          id,
          old.filter((_, i) => i !== index)
        );
      }

      return { grnDetails };
    }),

  updateOne: (key, index, details) =>
    set(({ grnDetails }) => {
      const data = grnDetails.get(key);
      if (data) {
        data[index] = { ...data[index], ...details };
        grnDetails.set(key, data);
      }
      return {
        grnDetails,
      };
    }),

  clearTransferDetail: (id) =>
    set(({ grnDetails }) => {
      grnDetails.set(id, []);
      return { grnDetails };
    }),
  clearAll: () => set(() => ({ grnDetails: new Map(), updatedKeys: [] })),

  getOne(key, index) {
    const stored = this.grnDetails.get(key);
    if (stored) return stored[index];
  },

  addToUpdated: (key) =>
    set(({ updatedKeys }) => {
      if (updatedKeys.some((k) => k.grn_detail_id === key.grn_detail_id)) {
        return { updatedKeys };
      }
      updatedKeys.push(key);
      return { updatedKeys };
    }),
  removeUpdated: (key) =>
    set(({ updatedKeys }) => ({
      updatedKeys: updatedKeys.filter(
        (k) => k.grn_detail_id !== key.grn_detail_id
      ),
    })),
}));
