import React, { Component } from "react";
import pl from "../shared/messages/pl";

interface AddStatementFormState {
    content: string;
    startTime: string;
    endTime: string;
}
export default class AddStatementForm extends Component<{}, AddStatementFormState> {
    state = {
        content: "",
        startTime: "",
        endTime: ""
    };

    private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key: string = e.currentTarget.name;

        if (Object.keys(this.state).includes(key)) {
            this.setState({ [key]: e.currentTarget.value } as Pick<AddStatementFormState, keyof AddStatementFormState>);
        }
    };

    private submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {pl.adminPanel.labels.content}
                <input name="content" type="text" onChange={this.changeHandler} value={this.state.content} />
                {pl.adminPanel.labels.startDate}
                <input
                    name="startTime"
                    type="datetime-local"
                    onChange={this.changeHandler}
                    value={this.state.startTime}
                />
                {pl.adminPanel.labels.endDate}
                <input name="endTime" type="datetime-local" onChange={this.changeHandler} value={this.state.endTime} />
                <button type="submit">Zatwierdz</button>
            </form>
        );
    }
}
