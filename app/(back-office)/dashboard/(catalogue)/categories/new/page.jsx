"use client";

import { generateSlug } from "../../../../../../lib/generateSlug";
import React, { useState } from "react";
import { FormHeader } from "../../../../../../components/backoffice/FormHeader";
import { TextInput } from "../../../../../../components/backoffice/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { TextAreaInput } from "../../../../../../components/backoffice/FormInputs/TextAreaInput";
import { SubmitButton } from "../../../../../../components/backoffice/FormInputs/SubmitButton";
import { ImageInput } from "../../../../../../components/backoffice/FormInputs/ImageInput";

const NewCategory = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    try {
      const slug = generateSlug({ title: data.title });
      const categoryData = {
        ...data,
        slug,
        imageUrl,
      };
      console.log(categoryData);
      makePostRequest(setLoading, "api/categories", data, "Category", reset);
    } catch (error) {
      console.error("Error creating category:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white max-w-5xl p-4 border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-slate-50 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
            isRequired={true}
          />
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endPoint="categoryImageUploader"
          />
          <SubmitButton
            isLoading={loading}
            buttonTitle="Create Category"
            loadingButtonTitle="Creating category please wait..."
          />
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
