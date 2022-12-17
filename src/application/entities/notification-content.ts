export class NotificationContent {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;

    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Invalid content length.');
    }
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }
}
