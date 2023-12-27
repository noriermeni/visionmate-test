import {setAutoFreeze} from 'immer';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {usersSlice} from './slices';

/**
 * Used to let states update directly on reducer.
 */
setAutoFreeze(false);

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: {name: 'VisionmateTest'},
});

/**
 *  @store - export of redux store.
 */
export default store;
/**
 * @RootState - is Redux State Type.
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * @AppDispatch - is type of dispatch store.
 */
export type AppDispatch = typeof store.dispatch;
/**
 * @useAppDispatch - this custom hook is created because of using dispatch with Type of Root State.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/**
 * @useAppSelector - using data example with this custom hook below.
 * The `state` arg is correctly typed as `RootState` already;
 * `const count = useAppSelector(state => state.counter.value)`
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
