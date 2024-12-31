import { Request, Response } from 'express';
import { Paper } from '../models/Paper';
import { OpenAIService } from '../services/openai.service';

const openAIService = new OpenAIService();

export const paperController = {
  async search(req: Request, res: Response) {
    try {
      const { query, filters } = req.body;
      const papers = await Paper.find(
        { $text: { $search: query } },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } });
      
      res.json(papers);
    } catch (error) {
      res.status(500).json({ message: 'Error searching papers' });
    }
  },

  async analyze(req: Request, res: Response) {
    try {
      const { paperId } = req.params;
      const paper = await Paper.findById(paperId);
      
      if (!paper) {
        return res.status(404).json({ message: 'Paper not found' });
      }

      const analysis = await openAIService.analyzePaper(paper);
      res.json({ analysis });
    } catch (error) {
      res.status(500).json({ message: 'Error analyzing paper' });
    }
  },

  async askQuestion(req: Request, res: Response) {
    try {
      const { question, paperIds } = req.body;
      const papers = await Paper.find({ _id: { $in: paperIds } });
      const context = papers.map(p => `${p.title}\n${p.abstract}`).join('\n\n');
      
      const answer = await openAIService.answerQuestion(question, context);
      res.json({ answer });
    } catch (error) {
      res.status(500).json({ message: 'Error processing question' });
    }
  }
};