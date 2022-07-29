export class TaskDTO{
  private readonly title: string;
  private readonly content: string;
  private readonly progressStatus: 'untouched' | 'waiting' | 'done';
  public constructor({ title,  content, progressStatus }: { title: string; content: string; progressStatus: 'untouched' | 'waiting' | 'done'; }) {
    this.title = title;
    this.content = content;
    this.progressStatus = progressStatus;
  }
}