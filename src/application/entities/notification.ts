import { Replace } from 'src/helpers/replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  category: string;
  createdAt: Date;
  content: NotificationContent;
  readAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get category() {
    return this.props.category;
  }

  public set category(category: string) {
    this.category = category;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set content(content: NotificationContent) {
    this.content = content;
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
}
