export enum AvailEventStatus {
  Processing = "Processing",
  Pending = "Pending",
  Confirmed = "Confirmed",
  Failed = "Failed",
  Rejected = "Rejected",
  Aborted = "Aborted",
  Cancelled = "Cancelled",
}

export enum EventType {
  Deploy = "Deploy",
  Execute = "Execute",
  Send = "Send",
  Receive = "Receive",
  Join = "Join",
  Split = "Split",
  Shield = "Shield",
  Unshield = "Unshield",
}

export type SuccinctAvailEvent = {
  id: string;
  to?: string;
  from?: string;
  amount?: number;
  fee?: number;
  message?: string;
  type: EventType;
  status: AvailEventStatus;
  created: Date;
  programId?: string;
  functionId?: string;
};
