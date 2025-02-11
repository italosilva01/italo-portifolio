import { useMobile } from "@/app/hooks/UseMobile"
import ContainerSection from "../../atons/ContainerSection"
import { Label } from "../../atons/Label"
import { LetsTalk } from "../../atons/LetsTalk"
import TitleSection from "../../atons/ShowMyName"
import ShowEmail from "../../atons/ShowEmail"
import GoToTop from "../../atons/GoToTop"

const SIZE_ICON_WHATSAPP_MOBILE = 24
const SIZE_ICON_WHATSAPP_DESKTOP = 38

const Conect = () => {
    const isMobileScreen = useMobile();

    const sizeIconWhatsapp = isMobileScreen ? SIZE_ICON_WHATSAPP_MOBILE : SIZE_ICON_WHATSAPP_DESKTOP

    return (
        <ContainerSection id='contact' className='w-full flex flex-col gap-y-6 justify-center items-center '>
            <Label text='📬 Contatos' className='md:mx-auto w-fit' />
            <TitleSection
                text="Entre<br/> em contato"
                classList="mb-4 block md:mx-auto md:hidden"
            />
            <TitleSection
                text="Vamos conversar"
                classList="mb-4 hidden md:mx-auto md:block"
            />
            <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row lg:justify-center lg:mt-[100px]">

                <LetsTalk className="w-44 h-10 lg:w-60 lg:h-[60px] lg:text-xl" sizeIcon={sizeIconWhatsapp} />
                <ShowEmail />

            </div>
            <GoToTop />
        </ContainerSection>
    )
}

export default Conect