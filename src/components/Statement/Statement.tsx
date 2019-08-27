import React, { FC } from "react";

interface StatementProps {
    text: string;
}

const Statement: FC<StatementProps> = (props: StatementProps) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    );
};

export default Statement;
