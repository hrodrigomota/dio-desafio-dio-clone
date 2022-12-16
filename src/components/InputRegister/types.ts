import React from "react";

export interface IInputRegister extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name: string;
}