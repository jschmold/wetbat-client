import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDestination } from 'types/destination';

export interface IDestinationState {
  ids: string[];
  entities: { [key: string]: IDestination };
}

type LoadAction = PayloadAction<IDestination[]>;

const slice = createSlice({
  name: 'destinations',
  initialState: { ids: [], entities: {} } as IDestinationState,
  reducers: {
    loadDestinations: (state: IDestinationState, action: LoadAction) => {
      for (const item of action.payload) {
        if (!state.ids.includes(item.id)) {
          state.ids.push(item.id);
        }

        state.entities[item.id] = item;
      }

      return state;
    },
  },
});

export const { actions, reducer } = slice;
