import React, { FC } from "react";
import Statement from "../statement/Statement";
import { StatementModel } from "../../../shared/StatementModel";
import defaultStatementsService from "../../../shared/service/StatementsService";
import styles from "./statementList.module.scss";
import pl from "../../../shared/messages/pl";

interface StatementListProps {
    statements: StatementModel[];

    deleteHandler: () => void;
}

const StatementList: FC<StatementListProps> = (props: StatementListProps) => {
    if (props.statements.length > 0) {
        const activeStatements = props.statements.map(statement => (
            <Statement
                isActive={statement.isActive}
                id={statement.id}
                text={statement.content}
                onDeleteClick={async () => {
                    await defaultStatementsService.delete(statement.id);
                    props.deleteHandler();
                }}
            />
        ));
        return (
            <div className={styles.wraper}>
                <ul className={styles.list}>
                    <h2>{pl.adminPanel.headers.statementList}</h2>
                    {activeStatements}
                </ul>
            </div>
        );
    }
    return (
        <div className={styles.wraper}>
            <h2 className={styles.noStatements}>{pl.adminPanel.headers.noStatements}</h2>
        </div>
    );
};

export default StatementList;
