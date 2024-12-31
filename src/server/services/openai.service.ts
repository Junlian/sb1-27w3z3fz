import OpenAI from 'openai';
import { config } from '../config/env';
import { IPaper } from '../models/Paper';

export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({ apiKey: config.openaiApiKey });
  }

  async createEmbeddings(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text
    });
    return response.data[0].embedding;
  }

  async analyzePaper(paper: IPaper): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a research assistant analyzing academic papers."
        },
        {
          role: "user",
          content: `Analyze this paper:\nTitle: ${paper.title}\nAbstract: ${paper.abstract}`
        }
      ]
    });
    return response.choices[0].message.content || '';
  }

  async answerQuestion(question: string, context: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a research assistant helping with academic papers."
        },
        {
          role: "user",
          content: `Context:\n${context}\n\nQuestion: ${question}`
        }
      ]
    });
    return response.choices[0].message.content || '';
  }
}