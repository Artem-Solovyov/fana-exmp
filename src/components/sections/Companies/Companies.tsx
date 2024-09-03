import Image from "next/image";

export const Companies = () => {
  return (
    <div className="companies">
      <div className="companies__container desc">
        <Image src="/logo01.svg" width={170} height={30} alt="logo" />
        <Image src="/logo02.png" width={127} height={22} alt="logo" />
        <Image src="/logo03.png" width={111} height={44} alt="logo" />
        <Image src="/logo04.svg" width={143} height={29} alt="logo" />
        <Image src="/logo05.svg" width={130} height={41} alt="logo" />
        <div className="companies__flex">
          <Image src="/logo06.svg" width={209} height={30} alt="logo" />

          <Image src="/logo07.png" width={102} height={41} alt="logo" />
          <Image src="/logo08.png" width={40} height={40} alt="logo" />
          <Image src="/logo09.png" width={150} height={38} alt="logo" />
        </div>
      </div>
      <div className="companies__container mob">
        <div className="companies__flex">
          <Image src="/logo01.svg" width={170} height={30} alt="logo" />
          <Image src="/logo02.png" width={127} height={22} alt="logo" />
        </div>
        <div className="companies__flex">
          <Image src="/logo03.png" width={111} height={44} alt="logo" />
          <Image src="/logo04.svg" width={143} height={29} alt="logo" />
        </div>
        <div className="companies__flex">
          <Image src="/logo05.svg" width={130} height={41} alt="logo" />

          <Image src="/logo06.svg" width={209} height={30} alt="logo" />
        </div>
        <div className="companies__flex">
          <Image src="/logo07.png" width={102} height={41} alt="logo" />
          <Image src="/logo08.png" width={40} height={40} alt="logo" />
          <Image src="/logo09.png" width={150} height={38} alt="logo" />
        </div>
      </div>
    </div>
  );
};
