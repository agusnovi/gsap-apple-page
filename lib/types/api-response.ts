export type ErrorResponse = {
  code: 'ERROR' | 'RUNTIME_ERROR' | 'MISSING_ACCESS_TOKEN' | 'UNAUTHORIZED';
  data: null;
  message: string;
  serverTime?: string;
  status?: number;
};