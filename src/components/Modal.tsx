import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";
import { Family, DocumentType } from "../Library/enums/enums";
import ICustomer from "../Library/interfaces/ICustomer";

const EditModal = ({ handleOk, isModalVisible, customer, onCancel }: any) => {
  const [name, setName] = useState<string>(customer.name);
  const [docNum, setDocNum] = useState<string>(customer.docNum);
  const [docType, setDocType] = useState<DocumentType>(customer.docType);
  const [family, setFamily] = useState<Family>(customer.familyName);
  const [phone, setPhone] = useState<string>(customer.phone);
  const [email, setEmail] = useState<string>(customer.email);

  const { Option } = Select;

  const onChangeName = (e: string) => {
    setName(e);
  };
  const onChangeDocNum = (e: string) => {
    setDocNum(e);
  };

  const onChangeFamily = (e: Family) => {
    setFamily(e);
  };

  const onChangeDocType = (e: DocumentType) => {
    setDocType(e);
  };

  const onChangePhone = (e: string) => {
    setPhone(e);
  };

  const onChangeEmail = (e: string) => {
    setEmail(e);
  };

  const handleSave = () => {
    console.log(customer.customerId);
    const editedCustomer: ICustomer = {
      id: customer.id,
      docType: docType,
      docNum: docNum,
      email: email,
      customerId: customer.customerId,
      name: name,
      familyName: family,
      phone: phone,
    };
    handleOk(editedCustomer);
  };

  return (
    <Modal
      title="Edit Customer"
      visible={isModalVisible}
      onOk={handleSave}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button onClick={handleSave} key="submit" type="primary">
          Save
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Name" name="name" initialValue={name}>
          <Input onChange={(e) => onChangeName(e.target.value)} type="text" />
        </Form.Item>
        <Form.Item label="Document Number" name="docNum" initialValue={docNum}>
          <Input onChange={(e) => onChangeDocNum(e.target.value)} type="text" />
        </Form.Item>
        <Form.Item label="Family" name="family">
          <Input.Group compact>
            <Select
              defaultValue={
                Object.keys(Family)[Object.keys(Family).indexOf(family)]
              }
              onChange={(e: any) => onChangeFamily(e)}
            >
              {Object.values(Family).map((e: string, key) => {
                return (
                  <Option key={key} value={e}>
                    {e}
                  </Option>
                );
              })}
            </Select>
          </Input.Group>
        </Form.Item>
        <Form.Item label="DocumentType" name="documentType">
          <Input.Group compact>
            <Select
              defaultValue={
                Object.keys(DocumentType)[
                  Object.keys(DocumentType).indexOf(docType)
                ]
              }
              onChange={(e: any) => onChangeDocType(e)}
            >
              {Object.values(DocumentType).map((e: string, key) => {
                return (
                  <Option key={key} value={e}>
                    {e}
                  </Option>
                );
              })}
            </Select>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Email" name="email" initialValue={email}>
          <Input onChange={(e) => onChangeEmail(e.target.value)} type="text" />
        </Form.Item>
        <Form.Item label="Phone" name="phone" initialValue={phone}>
          <Input onChange={(e) => onChangePhone(e.target.value)} type="text" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
