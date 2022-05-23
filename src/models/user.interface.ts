export interface UserDetails {
    id?:number;
    name?: string;
    email?: string;
    phone?: string;
    isActive?: boolean;
    accountId?: string;
    createdAt?:Date;
}