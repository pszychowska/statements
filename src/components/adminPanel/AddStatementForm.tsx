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
            <form className={styles.adminPanelForm} onSubmit={this.submitHandler}>
                <div className={styles.adminPanelText}>
                    <p>{pl.adminPanel.labels.content}</p>
                    <input name="content" type="text" onChange={this.changeHandler} value={this.state.content} />
                </div>
                <div className={styles.adminPanelDate}>
                    <p>{pl.adminPanel.labels.startDate}</p>
                    <input
                        name="startTime"
                        type="datetime-local"
                        onChange={this.changeHandler}
                        value={this.state.startTime}
                    />
                </div>
                <div className={styles.adminPanelDate}>
                    <p>{pl.adminPanel.labels.endDate}</p>
                    <input
                        name="endTime"
                        type="datetime-local"
                        onChange={this.changeHandler}
                        value={this.state.endTime}
                    />
                </div>
                <button className={styles.adminPanelButton} type="submit">
                    {pl.adminPanel.labels.submit}
                </button>
            </form>
        );
    }
}
