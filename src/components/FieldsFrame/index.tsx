import "./FieldsFrame.scss";
import YoutubeIcon from "../../assets/icons/youtube.png"
import TelegramIcon from "../../assets/icons/telegram.png"
import DiscordIcon from "../../assets/icons/discord.png"
const FieldsFrame = () => {
    return (
        <div className="FieldsFrame">
            <div className="input_fields">
                <input required type="text" placeholder="Имя" />
                <input required type="text" placeholder="Фамилия" />
                <div className="input_fields-avatar_upload">
                    <input
                        accept=".png, .img, .jpg"
                        type="file"
                        placeholder=""
                    />
                    <button type="submit">Submit</button>
                </div>
                <div className="input_fields-birthdate">
                    <label htmlFor="">Дата Рождения</label>
                    <input
                        className="birthdate-input"
                        type="date"
                        name=""
                        id=""
                    />
                </div>
                <input
                    required
                    type="tel"
                    name=""
                    id=""
                    placeholder="Номер для связи"
                />
                <input
                    required
                    type="email"
                    name="userEmail"
                    id=""
                    placeholder="Почта"
                />
                <input
                    required
                    type="url"
                    name="github-profile"
                    id=""
                    placeholder="Ссылка на github"
                />
                <div className="input_fields__social-medias">
                    <h1>Ссылка на социальные сети (необязательно)</h1>
                    <div className="links">
                        <div className="links__link">
                            <img src={YoutubeIcon} alt="youtube" />
                            <input placeholder="Youtube" type="url" name="Youtube Channel" id="" />
                        </div>
                        <div className="links__link">
                            <img src={TelegramIcon} alt="" />
                            <input placeholder="Telegram" type="url" name="Telegram" id="" />
                        </div>
                        <div className="links__link">
                            <img src={DiscordIcon} alt="" />
                            <input placeholder="Discord" type="url" name="Discord" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldsFrame;
