import React, { FC } from "react";
import styles from "./statement.module.scss";
import classNames from "classnames";

interface StatementProps {
    id: string;
    text: string;
    isActive?: boolean;

    onDeleteClick: () => void;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <li>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div
                        className={classNames(styles.indicator, props.isActive ? styles.active : styles.inactive)}
                    ></div>
                    <div className={styles.contentBody}>
                        <span className={styles.contentBody}>{props.text}</span>
                    </div>
                </div>
                <button className={styles.delete} onClick={props.onDeleteClick}>
                    X
                </button>
            </div>
        </li>
    );
};

export default Statement;
