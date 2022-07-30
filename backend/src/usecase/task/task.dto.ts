export class TaskDTO{
  private readonly assignedMemberName: string;
  private readonly title: string;
  private readonly content: string;
  private readonly progressStatus: 'untouched' | 'waiting' | 'done';
  public constructor({ assignedMemberName, title,  content, progressStatus }: { assignedMemberName: string, title: string; content: string; progressStatus: 'untouched' | 'waiting' | 'done'; }) {
    this.assignedMemberName = assignedMemberName;
    this.title = title;
    this.content = content;
    this.progressStatus = progressStatus;
  }
}