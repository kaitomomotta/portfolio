import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import instagramIcon from '../assets/Instagram_icon.png';
import linkedinIcon from '../assets/linkedin_logo.jpg'
import githubIcon from '../assets/github_logo.jpg'
import spotifyIcon from '../assets/spotify_logo.png'

export default function Socials() {
    const linkedin_url = "https://www.linkedin.com/in/abel-roinsard/";
    const github_url = "https://github.com/kaitomomotta";
    const instagram_url = "https://www.instagram.com/abel.art_/";
    const spotify_url = "https://open.spotify.com/user/abroins?si=08c066380a24459b";
    return (
        <>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center pb-10">
                💬 Socials 📱
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-1/2 mx-auto">
                <Card isPressable onPress={() => window.open(linkedin_url)}>
                    <CardHeader className="flex">
                        <Image
                            alt="Linkedin icon"
                            height={40}
                            width={40}
                            src={linkedinIcon}
                            className="mr-4"
                        />
                        <div className="w-full">
                            <p className="text-md font-semibold">Linkedin</p>
                            <p className="text-sm text-gray-600">Abel Roinsard</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card isPressable onPress={() => window.open(github_url)}>
                    <CardHeader className="flex">
                        <Image
                            alt="GitHub icon"
                            height={40}
                            width={40}
                            src={githubIcon}
                            className="mr-4"
                        />
                        <div className="w-full">
                            <p className="text-md font-semibold">GitHub</p>
                            <p className="text-sm text-gray-600">kaitomomotta</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card isPressable onPress={() => window.open(instagram_url)}>
                    <CardHeader className="flex">
                        <Image
                            alt="Instagram icon"
                            height={40}
                            width={40}
                            src={instagramIcon}
                            className="mr-4"
                        />
                        <div className="w-full">
                            <p className="text-md font-semibold">Instagram</p>
                            <p className="text-sm text-gray-600">@abel.art_</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card isPressable onPress={() => window.open(spotify_url)}>
                    <CardHeader className="flex">
                        <Image
                            alt="Spotify icon"
                            height={40}
                            width={40}
                            src={spotifyIcon}
                            className="mr-4"
                        />
                        <div className="w-full">
                            <p className="text-md font-semibold">Spotify</p>
                            <p className="text-sm text-gray-600">Abel</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </>
    );
}
