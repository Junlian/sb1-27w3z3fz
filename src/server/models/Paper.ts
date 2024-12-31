import mongoose, { Document, Schema } from 'mongoose';

export interface IPaper extends Document {
  title: string;
  authors: string[];
  abstract: string;
  fullText: string;
  publishDate: Date;
  citations: number;
  pdfUrl: string;
  keywords: string[];
  doi?: string;
  vector?: number[];
}

const paperSchema = new Schema<IPaper>({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  abstract: { type: String, required: true },
  fullText: { type: String, required: true },
  publishDate: { type: Date, required: true },
  citations: { type: Number, default: 0 },
  pdfUrl: { type: String, required: true },
  keywords: [{ type: String }],
  doi: { type: String },
  vector: [{ type: Number }]
}, {
  timestamps: true
});

// Create text index for basic search
paperSchema.index({ title: 'text', abstract: 'text', fullText: 'text' });

export const Paper = mongoose.model<IPaper>('Paper', paperSchema);