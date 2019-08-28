import React, { FC } from "react";
import { StatementModel } from "../../shared/StatementModel";
import StatementList from "../statementList/StatementList";
import { transitions } from "../../routes/transitions";
import { SimpleHistory } from "../../shared/routing/SimpleHistory";

interface HomePageContainerProps {
    history: SimpleHistory;
}

export const HomePageContainer: FC<HomePageContainerProps> = (props: HomePageContainerProps) => {
    const exampleArray: StatementModel[] = [
        { id: "1", content: "pierwszy komunikat" },
        { id: "2", content: "drugi komunikat" },
        { id: "3", content: "trzeci komunikat" }
    ];

    return (
        <div>
            <button
                onClick={() => {
                    transitions.adminPanel(props.history);
                }}
            >
                Go to admin panel
            </button>

            <h1>Home Page</h1>
            <StatementList statements={exampleArray} />
        </div>
    );
};
