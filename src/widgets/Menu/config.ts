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
        href: "https://dex.loopstarter.com",
      },
      {
        label: "Liquidity",
        href: "https://dex.loopstarter.com/pools",
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
        href: "https://loopstarter.com",
      },
      {
        label: "Tokens",
        href: "https://loopstarter.com/tokens",
      },
      {
        label: "Pairs",
        href: "https://loopstarter.com/pairs",
      },
      {
        label: "Accounts",
        href: "https://loopstarter.com/accounts",
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
        href: "https://voting.loopstarter.com",
      },
      {
        label: "Github",
        href: "https://github.com/loopstarter",
      },
      {
        label: "Docs",
        href: "https://docs.loopstarter.com",
      },
      {
        label: "Blog",
        href: "https://loopstarter.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/Loopstarter",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/loopstarter",
  },
];

export const MENU_HEIGHT = 88;
export const MENU_ENTRY_HEIGHT = 64;
export const SIDEBAR_WIDTH_FULL = 243;
export const SIDEBAR_WIDTH_REDUCED = 56;
