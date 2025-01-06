import TextInput from "@/components/Atoms/TextInput";
import styles from "./FastPost.module.scss"
import React, { useState } from "react";
import Form from "@/components/Atoms/Form";
import ButtonWidget from "../ButtonWidget";
import { CiImageOn, CiCalendar } from "react-icons/ci";
import { BsCameraVideo, BsEmojiSmile } from "react-icons/bs";
import { TfiTarget } from "react-icons/tfi";
import TextInputMask from "@/components/Atoms/TextInputMask";


type props = {

};

const FastPostComponent = () => {
    const [search, setSearch] = useState("");


    const handleSearch = () => {

    }

    const handleImage = () => {

    }

    const handleVideo = () => {

    }

    const handleEmoji = () => {

    }

    const handleCalendar = () => {

    }

    const handleLocation = () => {

    }

    return(
        <div className={`${styles.fastPost}`}>
            <Form
                onSubmit={handleSearch}
            >
                <div className="flex gap-2">
                    <div className="flex-1">
                        <TextInput
                            className="w-full"
                            name="search"
                            value={search}
                            setValue={setSearch}
                            placeholder="O que você está pensando hoje?"
                            type="text"
                        />
                    </div>
                </div>
            </Form>

            <div className={`${styles.footer}`}>
                <ButtonWidget
                    type="ghost"
                    onClick={handleImage}
                >
                    <CiImageOn className="h-7 w-auto" />
                </ButtonWidget>

                <ButtonWidget
                    type="ghost"
                    onClick={handleVideo}
                >
                    <BsCameraVideo className="h-7 w-auto" />
                </ButtonWidget>

                <ButtonWidget
                    type="ghost"
                    onClick={handleEmoji}
                >
                    <BsEmojiSmile className="h-7 w-auto" />
                </ButtonWidget>

                <ButtonWidget
                    type="ghost"
                    onClick={handleCalendar}
                >
                    <CiCalendar className="h-7 w-auto" />
                </ButtonWidget>

                <ButtonWidget
                    type="ghost"
                    onClick={handleLocation}
                >
                    <TfiTarget className="h-7 w-auto" />
                </ButtonWidget>
            </div>
            
        </div>
    );
}

const FastPost = React.memo(FastPostComponent);


export default FastPost;