export interface ChatwootPayload {
    event?: string;
    data?: Data;
}

export interface Data {
    conversation?: DataConversation;
    contact?: Contact;
}

export interface Contact {
    additionalAttributes?: CustomAttributesClass;
    email?: null;
    id?: number;
    name?: string;
    phoneNumber?: null;
    identifier?: null;
    thumbnail?: string;
    customAttributes?: CustomAttributesClass;
    lastActivityAt?: number;
    type?: string;
    availabilityStatus?: string;
}

export interface CustomAttributesClass {
    [key: string]: unknown;
}

export interface DataConversation {
    meta?: Meta;
    id?: number;
    messages?: Message[];
    accountID?: number;
    additionalAttributes?: PurpleAdditionalAttributes;
    agentLastSeenAt?: number;
    assigneeLastSeenAt?: number;
    canReply?: boolean;
    contactLastSeenAt?: number;
    customAttributes?: CustomAttributesClass;
    inboxID?: number;
    labels?: string[];
    muted?: boolean;
    snoozedUntil?: null;
    status?: string;
    timestamp?: number;
    unreadCount?: number;
    allMessagesLoaded?: boolean;
    dataFetched?: boolean;
}

export interface PurpleAdditionalAttributes {
    browser?: Browser;
    referer?: string;
    initiatedAt?: InitiatedAt;
    browserLanguage?: string;
}

export interface Browser {
    deviceName?: string;
    browserName?: string;
    platformName?: string;
    browserVersion?: string;
    platformVersion?: string;
}

export interface InitiatedAt {
    timestamp?: string;
}

export interface Message {
    id?: number;
    content?: null | string;
    inboxID?: number;
    conversationID?: number;
    messageType?: number;
    contentType?: string;
    contentAttributes?: CustomAttributesClass;
    createdAt?: number;
    private?: boolean;
    sourceID?: null;
    sender?: Contact;
    attachments?: Attachment[];
    accountID?: number;
    updatedAt?: Date;
    status?: string;
    senderType?: string;
    senderID?: number;
    externalSourceIDS?: CustomAttributesClass;
    additionalAttributes?: CustomAttributesClass;
    conversation?: MessageConversation;
}

export interface Attachment {
    id?: number;
    messageID?: number;
    fileType?: string;
    accountID?: number;
    extension?: null;
    dataURL?: string;
    thumbURL?: string;
    fileSize?: number;
}

export interface MessageConversation {
    assigneeID?: number;
}

export interface Meta {
    sender?: Contact;
    channel?: string;
    assignee?: Assignee;
    hmacVerified?: boolean;
}

export interface Assignee {
    id?: number;
    accountID?: number;
    availabilityStatus?: string;
    autoOffline?: boolean;
    confirmed?: boolean;
    email?: string;
    availableName?: string;
    name?: string;
    role?: string;
    thumbnail?: string;
}
