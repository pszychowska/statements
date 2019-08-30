import React, { FC } from "react";
import styles from "./statement.module.scss";

interface StatementProps {
    id: string;
    text: string;

    onDeleteClick: () => void;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <li>
            {props.text}
            <button className={styles.delete} onClick={props.onDeleteClick}>
                X
            </button>
        </li>
    );
};

export default Statement;
