import React, { FC } from "react";

interface StatementProps {
    id: string;
    text: string;

    onDeleteClick: () => void;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={props.onDeleteClick}>Usuń Komunikat</button>
        </div>
    );
};

export default Statement;
