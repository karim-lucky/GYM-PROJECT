"use client";
import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/16/solid";
import { useForm } from "react-hook-form";
// import axios from "axios";

type FormData = {
    email: string;
    name: string;
    password: string;
    height: number;
    weight: number;
    level: string;
};


export default function Login() {
    const [image, setImage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data Submitted:", data);
        // if(data)
        //     axios.post("/api/signup",data).then(function(resp){
        // console.log("connectdb")
        // console.log(resp.data)
        //     })
    }
    

    const [checkboxState, setCheckboxState] = useState({
        email: false,
        name: false,
        password: false,
        height: false,
        weight: false,
        level: false,
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (key: string, value: string | number) => {
        setCheckboxState((prev) => ({
            ...prev,
            [key]: Boolean(value),
        }));
    };

    return (
        <div
            style={{
                backgroundImage: `url("abc.webp")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex w-3/5 w-[500px] h-[550px] bg-white rounded-lg shadow-md">
                    <div className="flex-1 bg-white">
                        <div className="flex mb-2 p-6 items-center justify-center">
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    className="h-20 w-20 border-4 rounded-full shadow-md border-blue-500"
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-md border-4 border-gray-300">
                                    <CameraIcon className="w-10 h-10 text-gray-400" />
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="imageUpload"
                        />
                        <label
                            htmlFor="imageUpload"
                            className="cursor-pointer text-blue-500 hover:underline text-center block"
                        >
                            Upload Image
                        </label>
                        <div className="text-center space-y-2">
                            {[
                                { label: "Email", id: "email" },
                                { label: "Name", id: "name" },
                                { label: "Password", id: "password" },
                                { label: "Height", id: "height" },
                                { label: "Weight", id: "weight" },
                                { label: "Level", id: "level" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm"
                                >
                                    <h2 className="font-medium text-gray-800">{item.label}</h2>
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                                        checked={checkboxState[item.id as keyof typeof checkboxState]}
                                        readOnly
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="flex-1 p-12 flex flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                            Sign Up
                        </h2>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium text-gray-700 px-1 mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                
                                {...register("email",{
                                    required:"email is required",
                                    pattern:{
                                        value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message:"invalid email "
                                    }
                                })
                                }
                                id="email"
                                className="w-3/4 px-4 py-1 border border-gray-300 rounded-full"
                                placeholder="Enter your email"
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                             {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium px-1 text-gray-700 mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                
                                {...register("name",{required:"Name is required"})}
                                id="name"
                                className="w-3/4 px-4 py-1 border border-gray-300 rounded-full"
                                placeholder="Enter your name"
                                onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                            {errors.name &&(
                                <span className="text-red-500 text-sm">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm px-1 font-medium"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                               
                                {...register("password",{
                                    required:"passwor is required",
                                    minLength:{
                                        value:6,
                                        message:"password must be at least 6 characters"
                                    }
                                })}
                                id="password"
                                className="w-3/5 px-4 py-1 mb-2 border border-gray-300 rounded-full"
                                placeholder="Enter your password"
                                onChange={(e) => handleInputChange("password", e.target.value)}
                            />
                            {errors.password &&(
                                <span className="text-red-500 text-sm">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm px-1 font-medium"
                                htmlFor="height"
                            >
                                Height
                            </label>
                            <input
                                type="number"
                                {...register("height",{
                                    required:"height is required"
                                })}
                                id="height"
                                className="w-3/4 px-4 py-1 mb-2 border border-gray-300 rounded-full"
                                placeholder="Enter your height"
                                onChange={(e) => handleInputChange("height", e.target.value)}
                            />
                            {errors.height &&(
                                <span className="text-red-500 text-sm">
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium"
                                htmlFor="weight"
                            >
                                Weight
                            </label>
                            <input
                                type="number"
                                {...register("weight",{
                                    required:"weight is required"
                                })}
                                id="weight"
                                className="w-3/4 px-4 py-1 mb-2 border border-gray-300 rounded-full"
                                placeholder="Enter your weight"
                                onChange={(e) => handleInputChange("weight", e.target.value)}
                            />
                            {errors.weight &&(
                                <span className="text-red-500 text-sm">
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm px-1 font-medium"
                                htmlFor="level"
                            >
                                Level
                            </label>
                            <select
                            {...register("level",{
                                required:"level is required"
                            })}
                                id="level"
                                className="w-3/4 px-4 py-1 mb-2 border border-gray-300 rounded-full"
                                onChange={(e) => handleInputChange("level", e.target.value)}
                            >
                                {errors.level &&(
                                    <span className="text-red-500 text-sm"></span>
                                )}
                                <option value="">Select</option>
                                <option value="beginner">Beginner</option>
                                <option value="medium">Medium</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
