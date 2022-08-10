import { Family, ProductType, DocumentType } from "../enums/enums";

export default interface IProduct {
  id: string;
  productName: string;
  productType: ProductType;
  serialNo: string;
  soldAt: Date;
  customerId: string;
}
