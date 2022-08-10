import ICustomer from "../interfaces/ICustomer";
import IProduct from "../interfaces/IProduct";
import { Family, ProductType, DocumentType } from "../enums/enums";

export const customerData: ICustomer = {
  id: "665854e5-e5c6-4389-a321-c64f9d902556",
  docType: DocumentType.NIF,
  docNum: "fed-123",
  email: "test@example.com",
  customerId: "cus-1",
  name: "Example customer",
  familyName: Family.SOFTWARE,
  phone: "68976987655",
};

export const products: IProduct[] = [
  {
    id: "PR-1276",
    productName: "User licence",
    productType: ProductType.LICENCE,
    serialNo: "xrt-123",
    soldAt: new Date(),
    customerId: "1",
  },
  {
    id: "PR-1432",
    productName: "ERP connector",
    productType: ProductType.ERP,
    serialNo: "xrt-432",
    soldAt: new Date(),
    customerId: "1",
  },
  {
    id: "PR-4311",
    productName: "General training",
    productType: ProductType.TRAINING,
    serialNo: "xrt-654",
    soldAt: new Date(),
    customerId: "1",
  },
  {
    id: "PR-4312",
    productName: "Two user training",
    productType: ProductType.TRAINING,
    serialNo: "xrt-655",
    soldAt: new Date(),
    customerId: "1",
  },
];
