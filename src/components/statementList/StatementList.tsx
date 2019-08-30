import React, { FC } from "react";
import Statement from "../statement/Statement";
import { StatementModel } from "../../shared/StatementModel";
import styles from "./statementList.module.scss";
import Carousel from "nuka-carousel";

interface StatementListProps {
    statements: StatementModel[];
}

const StatementList: FC<StatementListProps> = (props: StatementListProps) => {
    if (props.statements.length > 0) {
        const activeStatements = props.statements.map(statement => (
            <Statement key={statement.id} text={statement.content} />
        ));
        return (
            <Carousel
                className={styles.carouselItems}
                autoplay={activeStatements.length > 1}
                autoplayInterval={10000} //ile wyswietla sie komunikat w ms
                wrapAround={true}
                withoutControls={true}
                pauseOnHover={false}
            >
                {activeStatements}
            </Carousel>
        );
    }
    return <div className={styles.noStatement}>Brak komunikatów</div>;
};

export default StatementList;
