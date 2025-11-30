import { Provider} from "react-redux";
import AppLayout from "../components/AppLayout";
import React from 'react';

export default function appReduxProvider({}) {
  return (
    <Provider store={appReduxStore}>
      {<AppLayout/>}
    </Provider>
  )
};
