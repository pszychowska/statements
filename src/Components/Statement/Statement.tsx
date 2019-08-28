import React, { FC } from "react";
import styles from "./statement.module.scss";

interface StatementProps {
    text: string;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <div className={styles.statement}>
            <p>Lorem, ipsum dolore sit amet consectetur adipisicing elit. Quia autem deserunt ducimus, minima sit!</p>
            {/* <p> {props.text} </p> */}
        </div>
    );
};

export default Statement;
