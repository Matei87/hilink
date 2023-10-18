export interface INAV_LINKS {
  href: string;
  key: string;
  label: string;
}

export type IPEOPLE_URL = string;

export interface IFEATURES {
  title: string;
  icon: string;
  description: string;
}

export interface IButtonProps {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline';
  full?: boolean;
}

export interface ICampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export interface IFooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export interface IFooterLinkSocial {
  title: string;
  links: string[];
}

export interface IFooterContact {
  title: string;
  links: { label: string; value: string }[];
}
