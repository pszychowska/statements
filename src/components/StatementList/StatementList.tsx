import React, { FC } from "react";
import Statement from "../Statement/Statement";
import { StatementModelArray } from "../../shared/StatementModelArray";

const StatementList: FC<StatementModelArray> = (props: StatementModelArray) => {
    if (props.array.length > 0) {
        const activeStatements = props.array.map(statement => <Statement key={statement.id} text={statement.text} />);
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
