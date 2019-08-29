import React, { FC } from "react";
import AdminPanel from "./AdminPanel";
import styles from "./adminPanel.module.scss";

export const AdminPanelContainer: FC<any> = (props: any) => {
    return (
        <div className={styles.wraper}>
            <h1 className={styles.header}>Panel administracyjny</h1>
            <AdminPanel />
        </div>
    );
};
