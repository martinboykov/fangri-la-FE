import { User } from 'src/app/models/auth.model';

export interface AuthStoreSlice {
  user: User | null;
}

export const initialAuthSlice: AuthStoreSlice = {
  user: null,
};
