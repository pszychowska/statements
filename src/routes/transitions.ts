import { paths } from "./paths";
import { SimpleHistory } from "../shared/routing/SimpleHistory";

export const transitions = {
    adminPanel: (history: SimpleHistory) => history.push(paths.admin)
};
