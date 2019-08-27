import React, { FC } from "react";
import styles from "./app.module.scss";
import StatementList from "./components/StatementList/StatementList";
import { StatementModel } from "./shared/StatementModel";

const exampleArray: StatementModel[] = [
    { id: "1", text: "pierwszy komunikat" },
    { id: "2", text: "drugi komunikat" },
    { id: "3", text: "trzeci komunikat" }
];

const App: FC = () => {
    return (
        <div className={styles.app}>
            <StatementList array={exampleArray} />
        </div>
    );
};

export default App;
