import Image from "next/image";
import Link from "next/link";
import { NFT, NFTMedia } from "@/lib/types";

const CardItemImage = ({ item, media }: { item: NFT; media: NFTMedia }) => {
  return (
    <Image
      src={media.src}
      alt={item.collection}
      width={300}
      height={200}
      style={{
        width: "100%",
        height: 200,
        display: "block",
        objectFit: "cover",
        backgroundColor: "var(--gray-5)",
      }}
    />
  );
};
const CardItemVideo = ({ item, media }: { item: NFT; media: NFTMedia }) => {
  return (
    <div className="w-full h-[200px] flex justify-center items-center">
      <video width="auto" height="200" autoPlay loop>
        <source src={media.src} type={media.contentType} /> 
        Cannot play video for {item.collection}
      </video>
    </div>
  );
};

export const CardItemMedia = ({ item, media }: { item: NFT; media: NFTMedia }) => {
  if (media.contentType.startsWith("video")) {
    return <CardItemVideo item={item} media={media} />;
  }
  return <CardItemImage item={item} media={media} />;
};

const DialogItemVideo = ({ item, media }: { item: NFT; media: NFTMedia }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <video width="auto" height="300" autoPlay loop>
        <source src={media.src} type={media.contentType} />
        Cannot play video for {item.collection}
      </video>
    </div>
  );
};
const DialogItemImage = ({ item, itemOSLink, media }: { item: NFT; itemOSLink: string; media: NFTMedia }) => {
  return (
    <Link href={itemOSLink}>
      <Image
        src={media.src}
        alt={item.collection}
        width={400}
        height={300}
        style={{
          width: "100%",
          height: 300,
          display: "block",
          objectFit: "cover",
          backgroundColor: "var(--gray-5)",
        }}
      />
    </Link>
  );
};
export const DialogItemMedia = ({ item, itemOSLink, media }: { item: NFT; itemOSLink: string; media: NFTMedia }) => {
  if (media.contentType.startsWith("video")) {
    return <DialogItemVideo item={item} media={media} />;
  }
  return <DialogItemImage item={item} itemOSLink={itemOSLink} media={media} />;
};
