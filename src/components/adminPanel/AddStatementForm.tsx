import React, { Component, useState } from "react";
import pl from "../../shared/messages/pl";
import styles from "./adminPanel.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultStatementsService from "../../shared/service/StatementsService";
import { Formik, Form, FormikActions, FormikProps, Field, ErrorMessage } from "formik";
import { format } from "date-fns";

interface EditableAddStatement {
    content: string;
    startTime: Date;
    endTime: Date;
}

interface AddStatementFormProps {
    onSubmit: () => void;
}

interface AddStatementFormState {
    content: string;
    startTime: Date;
    endTime: Date;
}

export default class AddStatementForm extends Component<AddStatementFormProps, AddStatementFormState> {
    state = {
        content: "",
        startTime: new Date(),
        endTime: new Date()
    };

    private changeHandlerTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: e.currentTarget.value
        });
    };

    render() {
        return (
            <Formik
                initialValues={{ ...this.state }}
                onSubmit={async (values: EditableAddStatement, actions: FormikActions<EditableAddStatement>) => {
                    if (!this.state.content || this.state.endTime <= this.state.startTime) {
                        return;
                    }
                    await defaultStatementsService.add({
                        content: this.state.content,
                        endTime: this.state.endTime,
                        startTime: this.state.startTime,
                        rowKey: ""
                    });

                    this.props.onSubmit();

                    this.setState({ content: "" });

                    actions.setSubmitting(false);
                }}
                onReset={(values: EditableAddStatement, actions: FormikActions<EditableAddStatement>) => {
                    actions.resetForm();
                }}
                render={({ errors, isSubmitting, resetForm, submitForm, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.text}>
                            <span> {pl.adminPanel.labels.content}</span>
                            <textarea
                                name="content"
                                id="content"
                                onChange={this.changeHandlerTextarea}
                                value={this.state.content}
                            />
                            {!this.state.content && <span>*</span>}
                        </div>
                        <div className={styles.date}>
                            <span>{pl.adminPanel.labels.startDate}</span>
                            <DatePicker
                                name="startTime"
                                selected={this.state.startTime!}
                                onChange={(date: Date) => {
                                    this.setState({ startTime: date });
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="yyyy-MM-dd HH:mm"
                            />
                        </div>
                        <div className={styles.date}>
                            <span> {pl.adminPanel.labels.endDate}</span>
                            <DatePicker
                                name="endTime"
                                selected={this.state.endTime!}
                                onChange={(date: Date) => {
                                    this.setState({ endTime: date! });
                                }}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="yyyy-MM-dd HH:mm"
                            />
                            {touched.endTime && this.state.endTime <= this.state.startTime && (
                                <span>{`Data końca musi być późniejsza niż ${format(
                                    this.state.startTime,
                                    "yyyy-MM-dd HH:mm"
                                )}`}</span>
                            )}
                        </div>
                        <button className={styles.submit} type="submit">
                            {pl.adminPanel.labels.submit}
                        </button>
                    </Form>
                )}
            />
        );
    }
}
