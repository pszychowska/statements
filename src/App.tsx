import React, { FC } from "react";
import Statement from "./Components/Statement/Statement";
import styles from "./app.module.scss";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Statement text="przykladowy komunikat" />
        </div>
    );
};

export default App;
