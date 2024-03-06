import Avatar from "../../assets/avatar.png";

export default function About() {
  return (
    <section className="h-dvh w-dvw pb-[4px] bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437]">
      <div className="flex flex-col justify-between h-full bg-black p-6">
        <h1 className="font-fira text-[#999999] text-sm font-semibold">
          Michael Madlos
        </h1>

        <div className="flex flex-col gap-10">
          <div
            id="header-container"
            className="text-4xl  text-[#FAFAFA] font-geist flex flex-row flex-wrap gap-3 font-medium items-center max-w-[370px]"
          >
            <div className="">I'm</div>
            <div>a</div>
            <div className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text inline-block text-nowrap font-semibold">
              front-end
            </div>

            <div className="relative w-[100px] h-[40px] inline-block bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full">
              <img
                src={Avatar}
                alt=""
                className="object-cover h-[70px] w-full object-top absolute bottom-0"
              />
            </div>
            <div>developer</div>
          </div>
          <p className="text-[#999999] font-geist leading-7 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            eleifend urna nec molestie. Cras non sem sodales velit dictum
            molestie.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="font-fira text-[#FAFAFA] font-semibold p-[2px] w-full bg-clip-border bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-lg ">
            <span className="bg-black block py-4 text-sm rounded-lg ">
              LinkedIn
            </span>
          </button>
          <button className="font-fira font-semibold text-[#FAFAFA] rounded-lg text-sm py-4 w-full bg-[#2e2e2e]">
            Github
          </button>
        </div>
      </div>
    </section>
  );
}
