import React, { FC } from "react";
import styles from "./app.module.scss";
import StatementList from "./components/statementList/StatementList";
import { StatementModel } from "./shared/StatementModel";

const exampleArray: StatementModel[] = [
    { id: "1", content: "pierwszy komunikat" },
    { id: "2", content: "drugi komunikat" },
    { id: "3", content: "trzeci komunikat" }
];

const App: FC = () => {
    return (
        <div className={styles.app}>
            <StatementList statements={exampleArray} />
        </div>
    );
};

export default App;
