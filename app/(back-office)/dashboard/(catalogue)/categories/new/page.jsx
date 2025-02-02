"use client";

import React from "react";
import { FormHeader } from "../../../../../../components/backoffice/FormHeader";
import { TextInput } from "../../../../../../components/backoffice/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { TextAreaInput } from "../../../../../../components/backoffice/FormInputs/TextAreaInput";
import { SubmitButton } from "../../../../../../components/backoffice/FormInputs/SubmitButton";
const NewCategory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    // const slug = generatingSlug(data.title);
    console.log(data);
  }
  return (
    <div>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white max-w-5xl p-4 border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-slate-5 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Name"
            name="name"
            register={register} // Pass the register function
            errors={errors}
            isRequired={true}
          />
          <TextAreaInput
            label="Name"
            name="name"
            register={register} // Pass the register function
            errors={errors}
            isRequired={true}
          />
          <SubmitButton
            isLoading={false}
            buttonTitle="Create Category"
            loadingButtonTitle="Creating category please wait..."
          />
        </div>
      </form>
    </div>
  );
};

export default NewCategory;
