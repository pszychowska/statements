import React, { FC, useState } from "react";
import Statement from "../statement/Statement";
import { StatementModel } from "../../../shared/StatementModel";
import defaultStatementsService from "../../../shared/service/StatementsService";
// import styles from "./statementList.module.scss";

interface StatementListProps {
    statements: StatementModel[];

    deleteHandler: () => void;
}

const StatementList: FC<StatementListProps> = (props: StatementListProps) => {
    if (props.statements.length > 0) {
        const activeStatements = props.statements.map(statement => (
            <Statement
                id={statement.id}
                text={statement.content}
                onDeleteClick={async () => {
                    await defaultStatementsService.delete(statement.id);
                    props.deleteHandler();
                }}
            />
        ));
        return <div>{activeStatements}</div>;
    }
    return <div>Brak komunikatów</div>;
};

export default StatementList;
