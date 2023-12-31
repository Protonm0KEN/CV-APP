/* eslint no-use-before-define: 0 */
import "./FieldsFrame.scss";
import YoutubeIcon from "../../assets/icons/youtube.png";
import TelegramIcon from "../../assets/icons/telegram.png";
import DiscordIcon from "../../assets/icons/discord.png";
import { useEffect, useState } from "react";

const FieldsFrame = ({
    state,
    func,
    isPdfState,
}: {
    state: any;
    func: any;
    isPdfState: any;
}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<number>();
    const [email, setEmail] = useState<string>("");
    const [githubLink, setGithubLink] = useState<string>("");
    const [youtubeLink, setYoutubeLink] = useState<string>("");
    const [telegramLink, setTelegramLink] = useState<string>("");
    const [discordLink, setDiscordLink] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    useEffect(() => {
        func({
            ...state,
            firstName,
            lastName,
            image,
            dateOfBirth,
            phoneNumber,
            email,
            githubLink,
            youtubeLink,
            telegramLink,
            discordLink,
            description,
        });
    }, [
        firstName,
        lastName,
        image,
        dateOfBirth,
        phoneNumber,
        email,
        githubLink,
        telegramLink,
        youtubeLink,
        description
    ]);
    return (
        <div className={isPdfState ? "display_none" : "FieldsFrame"}>
            <div className="input_fields">
                <input
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    required
                    type="text"
                    placeholder="Имя"
                />
                <input
                    onChange={e => setLastName(e.target.value)}
                    required
                    type="text"
                    placeholder="Фамилия"
                />
                <div className="input_fields-avatar_upload">
                    <input
                        onChange={e => setImage(e.target.value)}
                        accept=".png, .img, .jpg"
                        type="file"
                        placeholder=""
                    />
                    <button type="submit">Submit</button>
                </div>
                <div className="input_fields-birthdate">
                    <label htmlFor="">Дата Рождения</label>
                    <input
                        onChange={e => setDateOfBirth(e.target.value)}
                        className="birthdate-input"
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <input
                    onChange={e => {
                        const value: number = Number(e.target.value);
                        setPhoneNumber(value);
                    }}
                    value={phoneNumber}
                    required
                    type="tel"
                    name=""
                    id=""
                    placeholder="Номер для связи"
                />
                <input
                    onChange={e => setEmail(e.target.value)}
                    required
                    type="email"
                    name="userEmail"
                    id=""
                    placeholder="Почта"
                />
                <input
                    onChange={e => setGithubLink(e.target.value)}
                    required
                    type="url"
                    name="github-profile"
                    id=""
                    placeholder="Ссылка на github"
                />
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="О себе..."
                ></textarea>
                <div className="input_fields__social-medias">
                    <h1>Ссылка на социальные сети (необязательно)</h1>
                    <div className="links">
                        <div className="links__link">
                            <img src={YoutubeIcon} alt="youtube" />
                            <input
                                onChange={e => setYoutubeLink(e.target.value)}
                                placeholder="Youtube"
                                type="url"
                                name="Youtube Channel"
                                id=""
                            />
                        </div>
                        <div className="links__link">
                            <img src={TelegramIcon} alt="" />
                            <input
                                onChange={e => setTelegramLink(e.target.value)}
                                placeholder="Telegram"
                                type="url"
                                name="Telegram"
                                id=""
                            />
                        </div>
                        <div className="links__link">
                            <img src={DiscordIcon} alt="" />
                            <input
                                onChange={e => setDiscordLink(e.target.value)}
                                placeholder="Discord"
                                type="url"
                                name="Discord"
                                id=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldsFrame;
