import React, { FC } from "react";
import Statement from "../Statement/Statement";

interface RecordTypes {
    id: number;
    text: string;
}
const exampleArray: RecordTypes[] = [
    { id: 1, text: "pierwszy komunikat" },
    { id: 2, text: "drugi komunikat" },
    { id: 3, text: "trzeci komunikat" }
];

const StatementList: FC<{}> = () => {
    return <Statement id={exampleArray[0].id} text={exampleArray[0].text} />;
};

export default StatementList;
