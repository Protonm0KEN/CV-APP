import { StackChoiceType } from "../../types/StackStype";
import "./PDFForm.scss";
import profileIcon from "../../assets/icons/profile.png";
import YoutubeIcon from "../../assets/icons/youtube.png";
import DiscordLink from "../../assets/icons/discord.png";
import TelegramLink from "../../assets/icons/telegram.png";
import { languageIcons } from "../features/languageConstants";
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
                    {technologies.length > 0 ? (
                        <>
                            <div>
                                {technologies.length > 0
                                    ? technologies.map((lang: any) => {
                                          return (
                                              <div key={lang}>
                                                  {lang === "JavaScript" ? (
                                                      <img
                                                          src={
                                                              languageIcons.javaScript
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "typeScript" ? (
                                                      <img
                                                          src={
                                                              languageIcons.typeScript
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "react" ? (
                                                      <img
                                                          src={
                                                              languageIcons.react
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "css" ? (
                                                      <img
                                                          src={
                                                              languageIcons.css
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "vue" ? (
                                                      <img
                                                          src={
                                                              languageIcons.vue
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "html" ? (
                                                      <img
                                                          src={
                                                              languageIcons.html
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "python" ? (
                                                      <img
                                                          src={
                                                              languageIcons.python
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "Sql" ? (
                                                      <img
                                                          src={
                                                              languageIcons.sql
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "Php" ? (
                                                      <img
                                                          src={
                                                              languageIcons.php
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "Java" ? (
                                                      <img
                                                          src={
                                                              languageIcons.java
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "aspnet" ? (
                                                      <img
                                                          src={
                                                              languageIcons.aspnet
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "http" ? (
                                                      <img
                                                          src={
                                                              languageIcons.http
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "react-native" ? (
                                                      <img
                                                          src={
                                                              languageIcons.ReactNative
                                                          }
                                                      />
                                                  ) : null}
                                                  {lang === "webpack" ? (
                                                      <img
                                                          src={
                                                              languageIcons.webpack
                                                          }
                                                      />
                                                  ) : null}
                                              </div>
                                          );
                                      })
                                    : null}
                            </div>
                        </>
                    ) : null}
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
