import { StatementDto } from "./dto/StatementDto";
import { StatementModel } from "../StatementModel";

export class StatementFromResponse {
    constructor(private statementResponse: StatementDto) {}

    statement(): StatementModel {
        return {
            id: this.statementResponse.rowKey || "",
            content: this.statementResponse.content
        };
    }
}
