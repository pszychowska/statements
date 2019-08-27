import React, { FC } from "react";
import styles from "./app.module.scss";
import StatementList from "./components/StatementList/StatementList";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <StatementList />
        </div>
    );
};

export default App;
