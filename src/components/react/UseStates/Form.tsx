'use client';
import {useState} from "react";
import {Button, Checkbox, Label, TextInput} from 'flowbite-react';


export default function ShadowInputs() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        Repeat_Password: ""

    })

    const handleInput = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prev: any) => {
            return {...prev, [name]: value};


        })


    }
    return (
        <div>
            <form className="md:ml-20 ml-0 flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        className="text-white"
                        id="email2"
                        placeholder="codexam.com"
                        required
                        name="email"
                        shadow
                        type="email"
                        value={formData.email}
                        onChange={handleInput}

                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className="text-white"
                            htmlFor="repeat-password"
                            value="Repeat password"

                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        required
                        shadow
                        type="password"
                        name="Repeat_Password"
                        value={formData.Repeat_Password}
                        onChange={handleInput}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree"/>

                </div>
                <Button type="submit">
                    Register new account
                </Button>
            </form>
            <p className="font-bold text-xl mt-2">{`my email is  ${formData.email}`}</p>
            <p className="font-bold text-xl mt-2">{`and my password is  ${formData.password}`}</p>
        </div>
    )
}


