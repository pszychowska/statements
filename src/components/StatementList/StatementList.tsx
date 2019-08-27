import React, { FC } from "react";
import Statement from "../Statement/Statement";
import { StatementModel } from "../../shared/StatementModel";

interface StatementListProps {
    array: StatementModel[];
}

const StatementList: FC<StatementListProps> = (props: StatementListProps) => {
    if (props.array.length > 0) {
        const activeStatements = props.array.map(statement => <Statement key={statement.id} text={statement.text} />);
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
