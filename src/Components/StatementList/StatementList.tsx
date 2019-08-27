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
    const activeStatements = exampleArray.map(statement => <Statement key={statement.id} text={statement.text} />);
    return <div>{activeStatements}</div>;
};

export default StatementList;
