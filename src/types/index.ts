export interface Paper {
  _id: string;
  title: string;
  authors: string[];
  abstract: string;
  fullText: string;
  publishDate: Date;
  citations: number;
  pdfUrl: string;
  keywords: string[];
  doi?: string;
}

export interface SearchFilters {
  dateRange?: [Date, Date];
  authors?: string[];
  keywords?: string[];
  citations?: number;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  citations?: Paper[];
}

export interface FileWithPreview extends File {
  preview: string;
}