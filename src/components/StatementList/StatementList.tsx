import React, { FC } from "react";
import Statement from "../Statement/Statement";
import { StatementModel } from "../../shared/StatementModel";

interface Statements {
    array: StatementModel[];
}

const StatementList: FC<Statements> = (props: Statements) => {
    if (props.array.length > 0) {
        const activeStatements = props.array.map(statement => <Statement key={statement.id} text={statement.content} />);
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
