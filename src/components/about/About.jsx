import Avatar from "../../assets/avatar.png";
import Nav from "./Nav";
import Stack from "./Stack";

export default function About() {
  return (
    <section className="w-dvw pb-[4px] bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] sm:h-full sm:pb-0 sm:pr-[6px] sm:bg-gradient-to-b sm:max-w-[500px] flex">
      <div className="flex flex-col gap-20 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] p-6 pb-20 grow ">
        <Nav />

        <div>
          <h1 className="font-fira text-[#999999] text-sm font-semibold">
            Michael Madlos
          </h1>
          <div
            id="header-container"
            className="text-6xl  text-[#FAFAFA] font-geist flex flex-row flex-wrap gap-x-3  font-extrabold items-center max-w-[360px] tracking-tight leading-12"
          >
            <span className="">I'm</span>
            <span>a</span>
            <div className="relative w-[100px] h-[40px] inline-block bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full">
              <img
                src={Avatar}
                alt=""
                className="object-cover h-[70px] w-full object-top absolute bottom-0 -scale-x-100 sm:scale-x-100"
              />
            </div>
            <span className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text inline-block text-nowrap ">
              front-end
            </span>

            <div>developer</div>
          </div>
        </div>
        <Stack />
      </div>
    </section>
  );
}
