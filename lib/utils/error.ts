import { ErrorResponse } from "../types/api-response";

export function error(e: unknown): ErrorResponse {
    return {
        code: 'RUNTIME_ERROR',
        message: e instanceof Error ? e.message : 'error',
        data: null
    }
}