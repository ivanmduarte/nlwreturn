import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRetository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRetository{
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    };
}