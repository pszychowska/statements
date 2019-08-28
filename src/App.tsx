import React, { FC } from "react";
import styles from "./app.module.scss";
import Routes from "./routes/Routes";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Routes />
        </div>
    );
};

export default App;
