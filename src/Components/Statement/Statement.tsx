import React, { FC } from "react";
import styles from "./statement.module.scss";

interface StatementProps {
    id: number;
    text: string;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <div className={styles.statement}>
            <p> {props.text} </p>
        </div>
    );
};

export default Statement;
