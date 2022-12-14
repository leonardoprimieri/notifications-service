export interface NotificationProps {
  category: string;
  createdAt: Date;
  content: string;
  readAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public get category() {
    return this.props.category;
  }

  public set category(category: string) {
    this.category = category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.readAt = readAt;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.recipientId = recipientId;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.content = content;
  }
}
