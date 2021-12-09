import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.defifarms.org",
      },
      {
        label: "Liquidity",
        href: "https://exchange.defifarms.org/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://defifarms.info",
      },
      {
        label: "Tokens",
        href: "https://defifarms.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://defifarms.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://defifarms.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.defifarms.org",
      },
      {
        label: "Github",
        href: "https://github.com/defifarms",
      },
      {
        label: "Docs",
        href: "https://docs.defifarms.org",
      },
      {
        label: "Blog",
        href: "https://defifarms.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/DefifarmsNFT",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/DeFiFarmsNFTs",
  },
];

export const MENU_HEIGHT = 88;
export const MENU_ENTRY_HEIGHT = 64;
export const SIDEBAR_WIDTH_FULL = 243;
export const SIDEBAR_WIDTH_REDUCED = 56;
