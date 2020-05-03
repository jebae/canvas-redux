import { Store, createStore } from "redux";

import reducer from "./reducers";

const store: Store = createStore(reducer);

export default store;