import React, { FC, useEffect, useState } from "react";
import TableComponent from "../../components/Table/Table";
import Button from "../../components/shared/UI-elements/Button/Button";
import { FormikProps, useFormik } from "formik";
// @ts-ignore
import CloseIcon from "../../assets/icons/close-icon.svg";
import { FileWithPreview, ProductsType } from "../../types/types";
import { useDropzone } from "react-dropzone";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Actions } from "../../utils/constants";
import FormCreateItem from "../../components/FormCreateItem/FormCreateItem";

interface ViewItemsProps<F extends Record<string, unknown>> {
  isProductView: boolean;
  type: string;
  items: any;
  activeItem: any;
  setActiveItem: any;
  deleteItem: any;
  formik: FormikProps<F>;
}

const ViewItems = <F extends Record<string, unknown> = Record<string, never>>({
  type,
  items,
  formik,
  activeItem,
  setActiveItem,
  deleteItem,
  isProductView,
}: ViewItemsProps<F>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [photo, setPhoto] = useState<FileWithPreview>();

  useEffect(() => {
    if (activeItem.activeID) {
      const activeProduct = items?.find((p) => p.id === activeItem.activeID);
      const activeProductIndex = items?.findIndex(
        (p) => p.id === activeItem.activeID
      );
      console.log(activeItem);
      activeProduct && activeItem.action === Actions.EDIT
        ? (() => {
            Object.keys(activeProduct as ProductsType).forEach((i) => {
              formik.setFieldValue(i, activeProduct[i]);
              handleOpenModal();
            });
          })()
        : dispatch(deleteItem(activeProductIndex));
      //setActiveItem({ activeID: "", action: null });
    }
  }, [activeItem.activeID]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/png, image/jpg, image/jpeg",
    maxSize: 6000000,
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPhoto(
        Object.assign(file, {
          id: 1, //data.fid[0].value,
          preview: URL.createObjectURL(file),
        })
      );
    },
  });

  const handleOpenModal = (): void => {
    setIsOpen(true);
  };
  const handleCloseModal = (): void => {
    setIsOpen(false);
    formik.resetForm();
  };

  const visibleDataForTable = isProductView
    ? items.map((el) => ({
        id: el.id,
        name: el.name,
        price: el.price,
        category: el.category.name,
        brands: el.brands.name,
      }))
    : items;

  return (
    <div>
      <Button title="Додати" onClick={handleOpenModal} />
      <h2>{type}</h2>
      <TableComponent
        items={visibleDataForTable}
        setActiveItem={setActiveItem}
      />
      <FormCreateItem
        isOpen={isOpen}
        photo={photo}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        formik={formik}
        onClose={handleCloseModal}
        isProduct={isProductView}
      />
    </div>
  );
};

export default ViewItems;
