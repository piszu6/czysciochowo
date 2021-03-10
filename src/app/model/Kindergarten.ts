export interface KindergartenResponse {
  applications: Kindergarten[];
}

export interface Kindergarten {
  applicationId: number;
  facility: {
    facilityCity: string;
    facilityId: number;
    facilityName: string;
  };
  votes: number;
  position?: number;
}
