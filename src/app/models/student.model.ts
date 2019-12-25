export class Student {
  Unique_Id: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Street_Address: string;
  Address_2: string;
  City: string;
  State: string;
  Age: number;
  DOB: Date;
  GradeLevel: number;
}

export class HttpResponse {

  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: string;

}
