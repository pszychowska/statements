import React, { FC } from "react";
import styles from "./statement.module.scss";

interface StatementProps {
    text: string;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <div className={styles.statementContainer}>
            <p className={styles.statementText}>{props.text}</p>
        </div>
    );
};

export default Statement;
