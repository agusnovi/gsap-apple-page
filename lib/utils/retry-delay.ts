// exponential backoff with jitter for retry delay
export const retryDelay = (attemptIndex: number) => Math.min(1000 * (2 ** attemptIndex + (Math.random() * 1000)), 20);