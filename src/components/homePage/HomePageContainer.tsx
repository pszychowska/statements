import React, { Component } from "react";
import { StatementModel } from "../../shared/StatementModel";
import StatementList from "../statementList/StatementList";
import { transitions } from "../../routes/transitions";
import { SimpleHistory } from "../../shared/routing/SimpleHistory";

interface HomePageContainerProps {
    history: SimpleHistory;
}

export class HomePageContainer extends Component<HomePageContainerProps> {
    private exampleArray: StatementModel[] = [
        { id: "1", content: "pierwszy komunikat" },
        { id: "2", content: "drugi komunikat" },
        { id: "3", content: "trzeci komunikat" }
    ];

    async componentDidMount() {
        // example request to microservies
        // const statements = await defaultStatementsService.get();
        // console.log(statements.data);
    }

    public render() {
        return (
            <div>
                <button
                    onClick={() => {
                        transitions.adminPanel(this.props.history);
                    }}
                >
                    Go to admin panel
                </button>

                <h1>Home Page</h1>
                <StatementList statements={this.exampleArray} />
            </div>
        );
    }
}
