import React, { FC } from "react";
import { StatementModel } from "../../shared/StatementModel";
import StatementList from "../statementList/StatementList";

export const HomePageContainer: FC<any> = (props: any) => {
    const exampleArray: StatementModel[] = [
        { id: "1", content: "pierwszy komunikat" },
        { id: "2", content: "drugi komunikat" },
        { id: "3", content: "trzeci komunikat" }
    ];

    return (
        <div>
            <h1>Home Page</h1>
            <StatementList statements={exampleArray} />
        </div>
    );
};
