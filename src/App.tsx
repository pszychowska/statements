import React, { FC } from "react";
import styles from "./app.module.scss";
import StatementList from "./components/StatementList/StatementList";
import { StatementProps } from "./shared/StatementProps";

const exampleArray: StatementProps[] = [
    { id: "1", content: "pierwszy komunikat" },
    { id: "2", content: "drugi komunikat" },
    { id: "3", content: "trzeci komunikat" }
];

const App: FC = () => {
    return (
        <div className={styles.app}>
            <StatementList array={exampleArray} />
        </div>
    );
};

export default App;
