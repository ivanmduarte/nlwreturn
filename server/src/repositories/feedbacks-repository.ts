export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRetository {
    create: (data: FeedbackCreateData) => Promise<void>;
}