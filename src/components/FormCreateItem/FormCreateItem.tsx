import React from "react";
import Input from "components/shared/UI-elements/Input/Input";
import CustomSelect from "components/shared/UI-elements/Select/Select";
import Button from "components/shared/UI-elements/Button/Button";
import ModalCustom from "components/shared/UI-elements/Modal/Modal";
import HtmlEditor from "components/HtmlEditor/HtmlEditor";
import { DropzoneInputProps } from "react-dropzone";
import { FileWithPreview } from "types/types";
import { FormikProps } from "formik";
import { Photo, FrameModal } from "./FormCreateItem.styled";

const category = [
  { name: "Computers", label: "Computers" },
  { name: "telephones", label: "telephones" },
  { name: "tools", label: "tools" },
];
const Brands = [
  { name: "Lenovo", label: "Lenovo" },
  { name: "apple", label: "apple" },
  { name: "LG", label: "LG" },
];

interface CreateProductsProps<F extends Record<string, unknown>> {
  isDragActive?: boolean;
  formik: FormikProps<F>;
  onClose: any;
  isOpen: boolean;
  isProduct?: boolean;
  photo?: FileWithPreview;
  getRootProps?(props?: DropzoneInputProps): DropzoneInputProps;
  getInputProps?(props?: DropzoneInputProps): DropzoneInputProps;
}

const FormCreateItem = <
  F extends Record<string, unknown> = Record<string, never>
>(
  props: CreateProductsProps<F>
) => {
  const {
    formik,
    getRootProps,
    getInputProps,
    photo,
    isProduct = true,
  } = props;
  return (
    <ModalCustom {...props}>
      <FrameModal>
        <h2>Create new Product</h2>
        <form onSubmit={formik.handleSubmit}>
          {isProduct && (
            <Photo {...(getRootProps ? getRootProps() : null)}>
              {/*{pictureUrl && !photo && <img src={pictureUrl} alt="avatar" />}*/}
              {photo && <img src={photo.preview} alt="avatar" />}
              <input {...(getInputProps ? getInputProps() : null)} />
              <button type="button">{"Hochladen"}</button>
            </Photo>
          )}
          <span>Назва</span>
          <Input name="name" type="text" formik={formik} />
          {isProduct && (
            <>
              <span>Price</span>
              <Input name="price" type="text" formik={formik} />
              <span>Description</span>
              <Input name="descriptionName" type="text" formik={formik} />
              <span>Category</span>
              <CustomSelect name="category" formik={formik} items={category} />
              <span>Brands</span>
              <CustomSelect name="brands" formik={formik} items={Brands} />
              <span>Description Info</span>
              <HtmlEditor
                name={`descriptionInfo`}
                label="descriptionInfo"
                formik={formik}
                onChange={(val) => {
                  formik?.setFieldValue(`descriptionInfo`, val);
                }}
              />
            </>
          )}
          <Button title={"Add Product"} size={"Small"} />
        </form>
      </FrameModal>
    </ModalCustom>
  );
};

export default FormCreateItem;
