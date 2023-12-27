import React, { useEffect } from "react";
import {Provider} from 'react-redux';
import {MainNavigation} from '@src/navigators';
import store, { useAppDispatch } from "@src/store";
import { getUsers } from "@src/services";
import { setUsers } from "@src/store/slices";


const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers().then((res: any) => {
      dispatch(setUsers(res.results));
    });
  }, []);

  return <MainNavigation />;
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
