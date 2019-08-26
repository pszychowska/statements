import React, { FC } from "react";
import Statement from "./Components/Statement/Statement";
import styles from "./app.module.scss";

const App: FC = () => {
    return (
        <div className={styles.app}>
            <Statement text="przykładowy komunikat - ilość znaków maksymalnie 100" id={1} />
        </div>
    );
};

export default App;
