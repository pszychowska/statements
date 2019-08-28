import React, { FC } from "react";
import AdminPanel from "./AdminPanel";

export const AdminPanelContainer: FC<any> = (props: any) => {
    return (
        <div>
            <p>Admin panel</p>
            <AdminPanel />
        </div>
    );
};
