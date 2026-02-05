import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    contactInfo: string;
    studentName: string;
    message: string;
    timestamp: bigint;
    classGrade: string;
    parentName: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteEnquiry(id: bigint): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getEnquiriesPaginated(page: bigint, pageSize: bigint): Promise<Array<Enquiry>>;
    getEnquiryCount(): Promise<bigint>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitEnquiry(studentName: string, parentName: string, classGrade: string, contactInfo: string, message: string): Promise<bigint>;
}
