import React, { FC } from "react";
import Statement from "./Components/Statement/Statement";

const App: FC = () => {
    return (
        <div className="App">
            <Statement text="przykladowy komunikat" />
        </div>
    );
};

export default App;
