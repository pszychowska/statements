import React, { FC } from "react";
import styles from "./app.module.scss";
import StatementList from "./Components/StatementList/StatementList";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <StatementList />
        </div>
    );
};

export default App;
