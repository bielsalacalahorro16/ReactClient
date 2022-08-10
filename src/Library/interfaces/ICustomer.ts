import { Family, DocumentType } from "../enums/enums";

export default interface ICustomer {
  id: string;
  docType: DocumentType;
  docNum: string;
  email: string;
  customerId: string;
  name: string;
  familyName: Family;
  phone: string;
}
