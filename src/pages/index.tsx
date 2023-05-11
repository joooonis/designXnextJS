import Layout from '@components/common/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="w-full absolute top-44 text-[#403227] title text-xl my-auto font-medium text-center">
          The story of a liite dugeong, MIRAE
        </div>

        <div className="absolute bottom-0 origin-bottom left-16">
          <Image
            className="leaf-1"
            src="/svg/leaf-green-1.svg"
            width={40}
            height={40}
            alt="leaf-1"
          />
        </div>
        <div className="absolute bottom-0 origin-bottom right-16 leaf-2">
          <Image
            src="/svg/leaf-green-2.svg"
            width={10}
            height={10}
            alt="leaf-2"
          />
        </div>
        <div className="reveal bg-center bg-[length:110%_110%] bg-[url('/mirae/background.png')] opacity-0 scale-110 mx-auto h-96 w-96 z-10 translate-y-60 items-center flex-col relative flex justify-center trnaslate-y-1/2">
          <Image
            className="absolute translate-y-1"
            src="/mirae/body.png"
            width={440}
            height={440}
            alt="mirae-body"
          />
          <Image
            className="fin-1 absolute left-40 origin-top-left"
            src="/mirae/fin-1.svg"
            width={70}
            height={70}
            alt="fin-1"
          />
          <Image
            className="fin-2 absolute -z-10 left-[13.5rem] top-40 origin-top"
            src="/mirae/fin-2.svg"
            width={36}
            height={36}
            alt="fin-2"
          />
          <Image
            className="fin-3 absolute -z-20 left-60 top-36 origin-top"
            src="/mirae/fin-3.svg"
            width={48}
            height={48}
            alt="fin-3"
          />
        </div>
        <div className="reveal translate-y-[28rem] z-10 opacity-0 items-center flex-col absolute top-1/4 w-full flex justify-center trnaslate-y-1/2">
          <Image
            className="hover:opacity-90 cursor-pointer -translate-y-16"
            src="/svg/enter-button.svg"
            width={120}
            height={120}
            alt="enter-button"
          />
        </div>
        <div className="absolute bottom-0 origin-bottom right-24 leaf-3">
          <Image
            src="/svg/leaf-green-3.svg"
            width={16}
            height={16}
            alt="leaf-3"
          />
        </div>
        <div className="relative" id="snow"></div>
      </div>
      `
    </Layout>
  );
}
