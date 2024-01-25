export type NFT = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  created_at: string;
  updated_at: string;
  is_disabled: true;
  is_nsfw: true;
};

export type NFTRequestResponse = {
  nfts: NFT[];
  next: string;
};

export type NFTMedia = {
  src: string;
  contentType: string;
};
