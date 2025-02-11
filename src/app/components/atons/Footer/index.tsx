import { MenuSocialMedia } from "../../Menu/MenuSocialMedia";

export const Footer = () => {

    return (
        <footer className="w-full bg-purple-dark/10 flex flex-col gap-y-3 justify-center items-center bg-black text-white/50 mt-[76px] !p-[14px] h-fit lg:flex-row-reverse lg:justify-end">
            <div className="lg:mx-auto  lg:w-4/5 lg:px-auto">
                <div className="lg:mx-auto lg:ml-[calc(40%)]">
                    <MenuSocialMedia />
                </div>
            </div>
            <p className="text-xs w-fit">Copyright © Francisco Italo • {new Date().getFullYear()}</p> </footer>
    )
};