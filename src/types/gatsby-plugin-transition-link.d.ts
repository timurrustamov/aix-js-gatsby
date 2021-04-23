declare module 'gatsby-plugin-transition-link/AniLink' {
  import { Component } from 'react';

  interface AniLinkFade {
    fade: boolean;
  }
  type AniLinkPaintDripColors =
    | {
        color?: string;
      }
    | {
        hex?: string;
      };
  type AniLinkPaintDrip = AniLinkPaintDripColors & {
    paintDrip: boolean;
  };
  interface AniLinkSwipe {
    swipe: boolean;
  }
  interface AniLinkCover {
    cover: boolean;
    bg?: string;
  }
  type AniLinkTypes = AniLinkFade | AniLinkPaintDrip | AniLinkSwipe | AniLinkCover;

  interface AniLinkProps {
    to: string;
    direction?: string;
    duration?: number;
    top?: 'exit' | 'entry';
    entryOffset?: number;
    className?: string;
  }
  class AniLink extends Component<AniLinkProps & AniLinkTypes> {}
  export default AniLink;
}
