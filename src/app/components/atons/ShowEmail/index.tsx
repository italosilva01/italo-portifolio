import CopyButton from "../CopyButton";

const EMAIL_ADDRESS = "italo.silvan87@gmail.com";

const ShowEmail = () => {

    const handleClickCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL_ADDRESS);
    }

    return <div className="">
        <div className="flex flex-col gap-y-1  lg:items-center ">
            <span className="text-purple-dark lg:text-xl">E-mail:</span>
            <div className="flex gap-2 w-full lg:flex-col lg:justify-center lg:items-center">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white/50 lg:text-xl">{EMAIL_ADDRESS}
                </a>
                <CopyButton onClick={handleClickCopyEmail} />
            </div>
        </div>

    </div >
}

export default ShowEmail;