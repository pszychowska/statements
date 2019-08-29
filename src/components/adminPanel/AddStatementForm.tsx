import React, { Component } from "react";
import pl from "../../shared/messages/pl";
import styles from "./adminPanel.module.scss";

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

    private changeHandlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key: string = e.currentTarget.name;

        if (Object.keys(this.state).includes(key)) {
            this.setState({ [key]: e.currentTarget.value } as Pick<AddStatementFormState, keyof AddStatementFormState>);
        }
    };

    private changeHandlerTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <form className={styles.form} onSubmit={this.submitHandler}>
                <div className={styles.text}>
                    <span> {pl.adminPanel.labels.content}</span>

                    <textarea name="content" onChange={this.changeHandlerTextarea} value={this.state.content} />
                </div>
                <div className={styles.date}>
                    <span>{pl.adminPanel.labels.startDate}</span>

                    <input
                        name="startTime"
                        type="datetime-local"
                        onChange={this.changeHandlerInput}
                        value={this.state.startTime}
                    />
                </div>
                <div className={styles.date}>
                    <span> {pl.adminPanel.labels.endDate}</span>

                    <input
                        name="endTime"
                        type="datetime-local"
                        onChange={this.changeHandlerInput}
                        value={this.state.endTime}
                    />
                </div>
                <button className={styles.submit} type="submit">
                    {pl.adminPanel.labels.submit}
                </button>
            </form>
        );
    }
}
