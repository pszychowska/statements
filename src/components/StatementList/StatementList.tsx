import React, { FC } from "react";
import Statement from "../Statement/Statement";
import { StatementProps } from "../../shared/StatementProps";

interface Statements {
    array: StatementProps[];
}

const StatementList: FC<Statements> = (props: Statements) => {
    if (props.array.length > 0) {
        const activeStatements = props.array.map(statement => (
            <Statement key={statement.id} text={statement.content} />
        ));
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
