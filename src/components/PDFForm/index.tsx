import { StackChoiceType } from "../../types/StackStype";
import "./PDFForm.scss";
import profileIcon from "../../assets/icons/profile.png";
import YoutubeIcon from "../../assets/icons/youtube.png";
import DiscordLink from "../../assets/icons/discord.png";
import TelegramLink from "../../assets/icons/telegram.png";
const PDFForm = ({
    userFirstName,
    userLastName,
    position,
    technologies,
    description,
    image,
    email,
    number,
    dateOfBirth,
    githubLink,
    youtubeLink,
    discordLink,
    telegramLink,
}: {
    userFirstName: string;
    userLastName: string;
    position: StackChoiceType;
    technologies: string[];
    description: string;
    image: string;
    email: string;
    number: number;
    dateOfBirth: string;
    githubLink: string;
    youtubeLink: string;
    discordLink: string;
    telegramLink: string;
}) => {
    return (
        <div className="PDFForm">
            <div className="PDFForm__top">
                <h1 className="PDFForm__username">Имя: {userFirstName}</h1>
                <h2 className="PDFForm__lastname">Фамилия: {userLastName}</h2>
                <h3 className="PDFForm__position">
                    Позиция: {position.frontend && "Frontend"}{" "}
                    {position.backend && "Backend"}{" "}
                    {position.fullStack && "FullStack"}{" "}
                    {position.mobileDev && "MobileDev"}
                </h3>
                <h4 className="PDFForm__technologies"></h4>
            </div>
            <div className="PDFForm__bottom">
                <div className="bottom__left">
                    Технологии:
                    {technologies.map((lang: any) => {
                        return <div key={lang}>{lang}</div>;
                    })}
                </div>
                <div className="bottom__right">
                    <div className="info-top">
                        <p>О себе: {description}</p>
                        <img src={image ? image : profileIcon} alt="" />
                    </div>
                    <div className="info-middle">
                        <div className="info-middle__left">
                            <p>Почта: {email}</p>
                            <p>Номер телефона: +{number}</p>
                            <p>Год рождения: {dateOfBirth}</p>
                            <button>
                                <a href={githubLink}>Ссылка на портфолио</a>
                            </button>
                        </div>
                        {youtubeLink || discordLink || telegramLink ? (
                            <div className="info-middle__right">
                                {youtubeLink && (
                                    <button>
                                        <img src={YoutubeIcon} alt="" />
                                        <a href={youtubeLink}>Youtube</a>
                                    </button>
                                )}
                                {discordLink && (
                                    <button>
                                        <img src={DiscordLink} alt="" />
                                        <a href={discordLink}>Discord</a>
                                    </button>
                                )}
                                {telegramLink && (
                                    <button>
                                        <img src={TelegramLink} alt="" />
                                        <a href={telegramLink}>Telegram</a>
                                    </button>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFForm;
