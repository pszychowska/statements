import React, { FC } from "react";
import Statement from "../Statement/Statement";

interface ExampleArrayTypes {
    id: number;
    text: string;
}

const exampleArray: ExampleArrayTypes[] = [
    { id: 1, text: "pierwszy komunikat" },
    { id: 2, text: "drugi komunikat" },
    { id: 3, text: "trzeci komunikat" }
];

const StatementList: FC = () => {
    if (exampleArray.length > 0) {
        const activeStatements = exampleArray.map(statement => <Statement key={statement.id} text={statement.text} />);
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
