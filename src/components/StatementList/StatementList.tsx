import React, { FC } from "react";
import Statement from "../Statement/Statement";
import { StatementModel} from "../../shared/StatementModel";

interface StatementListProps {
    statements: StatementModel[];
}

const StatementList: FC<StatementListProps> = (props: StatementListProps) => {
    if (props.statements.length > 0) {
        const activeStatements = props.statements.map(statement => (
            <Statement key={statement.id} text={statement.content} />
        ));
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
