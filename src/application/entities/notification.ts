import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  category: string;
  createdAt: Date;
  content: NotificationContent;
  readAt?: Date | null;
  canceledAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
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

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.recipientId = recipientId;
  }

  public get id() {
    return this._id;
  }
}
