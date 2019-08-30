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

    interval: number = 0;

    async componentDidMount() {
        this.downloadStatements();
        this.interval = window.setInterval(async () => {
            await this.downloadStatements();
        }, 1800000);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    public render() {
        return <StatementList statements={this.state.statements} />;
    }

    private async downloadStatements() {
        const statementsResponse = await defaultStatementsService.get();
        const mappedStatements = statementsResponse.data
            .filter(x => x.isActive)
            .sort((a, b) => new Date(a.endTime).getTime() - new Date(b.endTime).getTime())
            .map(x => new StatementFromResponse(x).statement());
        this.setState({
            statements: mappedStatements
        });
    }
}
