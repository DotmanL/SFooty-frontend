import { History, LocationState, createBrowserHistory } from 'history'

export const history = createBrowserHistory();
export type HistoryType = History<LocationState>;
