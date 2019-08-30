import React, { FC } from "react";
import styles from "./statement.module.scss";

interface StatementProps {
    id: string;
    text: string;
    isActive?: boolean;

    onDeleteClick: () => void;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <li>
            {props.isActive ? <label>Aktywne: </label> : <label>Nie Aktywne: </label>}
            {props.text}
            <button className={styles.delete} onClick={props.onDeleteClick}>
                X
            </button>
        </li>
    );
};

export default Statement;
