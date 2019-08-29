import {StatementDto} from "./dto/StatementDto";
import {StatementModel} from "../StatementModel";

export class StatementFromResponse {
    statements: StatementModel[];
    statement: StatementModel;
    constructor(private statementResponse:StatementDto){
        this.statements=[];
        this.statement = {
            id: this.statementResponse.rowKey,
            content: this.statementResponse.content
        }
    }
}