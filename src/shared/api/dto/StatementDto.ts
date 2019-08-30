export interface StatementDto {
    rowKey?: string;
    content: string;
    startTime: Date;
    endTime: Date;
    isActive?: boolean;
}
