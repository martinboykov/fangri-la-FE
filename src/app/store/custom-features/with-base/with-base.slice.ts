export interface BaseSlice {
  timestamp: number;
}

export const initialBaseSlice: BaseSlice = {
  timestamp: new Date().getTime(),
};
