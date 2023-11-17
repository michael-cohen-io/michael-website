import PageHeader from "@/components/layout/page-header";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <PageHeader title="About me" />
      <div className="mx-5 flex max-w-screen-xl items-start justify-between w-full my-4">
        <div className="z-10 w-full max-w-lg px-1 xl:px-0">
          <p className="font-light">
            How&apos;s it going? I&apos;m a software developer based out of
            Brooklyn, NY. I currently work as the software development lead for
            the Creator team at OpenSea.
          </p>
          <br />
          <p className="font-light">
            We are focused on providing the best in class tools for creators in
            a one stop shop on OpenSea. We aim to be the most trusted and
            versatile tool for any crypto-curious creators who are looking to
            enter the world of web3 without needing to know its highly technical
            details.
          </p>
          <br />
          <p className="font-light">
            I went to the University of Florida, where I majored in Computer
            Science and Entrepreneurship. I&apos;ve been coding and tinkering
            with computers since I was 8 years old.
          </p>
          <br />
          <p className="font-light">
            are you more oldschool? read on at{" "}
            <Link
              href="/MichaelCohenResume.pdf"
              className="text-accent-color hover:underline"
            >
              {" "}
              my_resume_final_final_copy_NEW.pdf
            </Link>
          </p>
        </div>
        <Image
          src="/profile.jpg"
          alt="Michael Profile image"
          width="400"
          height="400"
          className="grayscale mr-2 rounded-3xl hover:grayscale-0"
        />
      </div>
    </>
  );
}
