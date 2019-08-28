import statementsApi, { StatementsApi } from "../api/StatementsApi";
import { AxiosPromise } from "axios";
import { StatementDto } from "../api/dto/StatementDto";

export interface StatementsService {
    add(data: StatementDto): AxiosPromise<StatementDto>;
    get(): AxiosPromise<StatementDto[]>;
    delete(id: string): AxiosPromise;
}

export class DefaultStatementsService implements StatementsService {
    constructor(private api: StatementsApi) {}

    add(data: StatementDto): AxiosPromise<StatementDto> {
        return this.api.post("/AddStatement", data, { method: "post" });
    }

    get(): AxiosPromise<StatementDto[]> {
        return this.api.get("/Statements");
    }

    delete(id: string): AxiosPromise<any> {
        return this.api.delete(`/RemoveStatement/${id}`, { method: "delete" });
    }
}

export default new DefaultStatementsService(statementsApi);
