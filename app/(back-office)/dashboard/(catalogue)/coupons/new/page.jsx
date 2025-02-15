"use client";

import { generateSlug } from "../../../../../../lib/generateSlug";
import React, { useState } from "react";
import { FormHeader } from "../../../../../../components/backoffice/FormHeader";
import { TextInput } from "../../../../../../components/backoffice/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { TextAreaInput } from "../../../../../../components/backoffice/FormInputs/TextAreaInput";
import { SubmitButton } from "../../../../../../components/backoffice/FormInputs/SubmitButton";
import { ImageInput } from "../../../../../../components/backoffice/FormInputs/ImageInput";
import { generateCouponCode } from "../../../../../../lib/generateCouponCode"
const NewCoupon = () => {
    const [loading, setLoading] = useState(false);
    const [couponCode, setCouponCode] = useState(generateCouponCode())

    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    async function onSubmit(data) {
        setLoading(true);
        try {
            const slug = generateCouponCode()


            console.log(categoryData);
            // makePostRequest(setLoading, "api/categories", data, "Category", reset);
        } catch (error) {
            console.error("Error creating category:", error);
            // Handle error (e.g., show an error message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <FormHeader title="New Coupon" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-white max-w-5xl p-4 border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-slate-50 mx-auto my-3"
            >
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <TextInput
                        label="Coupon Title"
                        name="title"
                        register={register}
                        errors={errors}
                        isRequired={true}
                    />

                    <TextInput
                        label="Coupon Code"
                        name="couponCode"
                        register={register}
                        errors={errors}
                        isRequired={true}
                        className="w-full"
                    />
                    <TextInput
                        label="Coupon Expiry Date"
                        name="expiryDate"
                        type="date"
                        register={register}
                        errors={errors}
                        isRequired={true}
                        className="w-full"
                    />
                    <SubmitButton
                        isLoading={loading}
                        buttonTitle="Create Coupon"
                        loadingButtonTitle="Creating Coupon please wait..."
                    />
                </div>
            </form>
        </div>
    );
};

export default NewCoupon;
