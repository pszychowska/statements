import React, { Component } from "react";
import { StatementModel } from "../../shared/StatementModel";
import StatementList from "../statementList/StatementList";
import { transitions } from "../../routes/transitions";
import { SimpleHistory } from "../../shared/routing/SimpleHistory";
import defaultStatementsService from "../../shared/service/StatementsService";
import { StatementFromResponse } from "../../shared/api/StatementFromResponse";

interface HomePageContainerProps {
    history: SimpleHistory;
}

interface HomePageContainerState {
    statements: StatementModel[];
}

export class HomePageContainer extends Component<HomePageContainerProps, HomePageContainerState> {
    state = {
        statements: []
    };

    async componentDidMount() {
        const statementsResponse = await defaultStatementsService.get();
        const mappedStatements = statementsResponse.data.map(x => new StatementFromResponse(x).statement());

        this.setState({
            statements: mappedStatements
        });
    }

    public render() {
        return (
            <div>
                {/* docelowo przycisk do usunięcia  */}

                <button
                    onClick={() => {
                        transitions.adminPanel(this.props.history);
                    }}
                >
                    Przejdź do panelu administracyjnego
                </button>

                <h1>Home Page</h1>
                <StatementList statements={this.state.statements} />
            </div>
        );
    }
}
