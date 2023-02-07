// Here goes the schema for the formy

import * as yup from "yup";



const formSchema = yup.object().shape({

    username: yup
    .string()
    .trim()
    .required("username required")
    .min(3, "Must be 3 characters long"), 
    email: yup
    .string()
    .email("Must be a valid email adress")
    .required("You need an email"),




    role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "role is required"),
    civil: yup
    .string()
    .oneOf(["married","single"],"civil status required"),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})




export default formSchema;