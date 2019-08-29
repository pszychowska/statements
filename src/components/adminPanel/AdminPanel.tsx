import React, { Component } from "react";
import AddStatementForm from "./AddStatementForm";
import StatementList from "./statementList/StatementList";
import { StatementModel } from "../../shared/StatementModel";
import defaultStatementsService from "../../shared/service/StatementsService";
import { StatementFromResponse } from "../../shared/api/StatementFromResponse";

interface AdminPanelState {
    statements: StatementModel[];
}
class AdminPanel extends Component<{}, AdminPanelState> {
    state = {
        statements: []
    };

    async componentDidMount() {
        await this.downloadStatements();
    }

    public render() {
        return (
            <div>
                <AddStatementForm
                    onSubmit={async () => {
                        await this.downloadStatements();
                    }}
                />
                <StatementList
                    statements={this.state.statements}
                    deleteHandler={() => {
                        this.downloadStatements();
                    }}
                />
            </div>
        );
    }

    private async downloadStatements() {
        const statementsResponse = await defaultStatementsService.get();
        const mappedStatements = statementsResponse.data.map(x => new StatementFromResponse(x).statement());

        this.setState({
            statements: mappedStatements
        });
    }
}

export default AdminPanel;
