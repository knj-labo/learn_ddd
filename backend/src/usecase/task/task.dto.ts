export class TaskDTO{
  private readonly assignedMemberName: string;
  private readonly title: string;
  private readonly content: string;
  private readonly progressStatus: string;
  public constructor({ assignedMemberName, title,  content, progressStatus }: { assignedMemberName: string, title: string; content: string; progressStatus: string; }) {
    this.assignedMemberName = assignedMemberName;
    this.title = title;
    this.content = content;
    this.progressStatus = progressStatus;
  }
}