import React, { FC } from "react";
import AdminPanel from "./AdminPanel";
import styles from "./adminPanel.module.scss";

export const AdminPanelContainer: FC<any> = (props: any) => {
    return (
        <div>
            <h1 className={styles.adminPanelHeader}>Panel administracyjny</h1>
            <AdminPanel />
        </div>
    );
};
