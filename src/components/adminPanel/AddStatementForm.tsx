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

    private changeHandlerTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: e.currentTarget.value
        });
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
                        onChange={e => {
                            this.setState({ startTime: e.target.value });
                        }}
                        value={this.state.startTime}
                    />
                </div>
                <div className={styles.date}>
                    <span> {pl.adminPanel.labels.endDate}</span>
                    <input
                        name="endTime"
                        type="datetime-local"
                        onChange={e => {
                            this.setState({ endTime: e.target.value });
                        }}
                        value={this.state.endTime}
                    />
                </div>
                <button className={styles.submit} type="submit">
                    {pl.adminPanel.labels.submit}
                </button>
                {(this.state.endTime !== "" && this.state.startTime !== "") || (
                    <label>{pl.adminPanel.labels.warning}</label>
                )}
            </form>
        );
    }
}
