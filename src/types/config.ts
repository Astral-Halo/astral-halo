import type I18nKey from '@i18n/I18nKey';

export type ButtonSubConfig<T extends string> = T extends 'text'
  ? {
      /**
       * The text of the button.
       *
       * 按钮的文本。
       */
      text: string | I18nKey;
    } & (
      | {
          /**
           * The URL of the button.
           *
           * 按钮的 URL。
           */
          href?: string;
        }
      | {
          /**
           * The function to be called when the button is clicked.
           *
           * 当按钮被点击时要调用的函数。
           */
          onclick?:
            | string
            | {
                id: string;
                function: (this: HTMLElement, ev: MouseEvent) => unknown;
              };
        }
    )
  : T extends 'icon'
    ? {
        /**
         * The icon of the button. Should be a name of iconify icon.
         *
         * 按钮的图标。应该是一个 iconify 图标的名称。
         */
        icon: string;
        /**
         * The text of the button.
         *
         * 按钮的文本。
         */
        text?: string | I18nKey;
      } & (
        | {
            /**
             * The URL of the button.
             *
             * 按钮的 URL。
             */
            href?: string;
          }
        | {
            /**
             * The function to be called when the button is clicked.
             *
             * 当按钮被点击时要调用的函数。
             */
            onclick?:
              | string
              | {
                  id: string;
                  function: (this: HTMLElement, ev: MouseEvent) => unknown;
                };
          }
      )
    : never;

export type SiteConfig = {
  /**
   * The title of the site.
   *
   * 站点的标题。
   */
  title: string;
  /**
   * The subtitle of the site.
   *
   * 站点的副标题。
   */
  subtitle: string;
  /**
   * The language of the site.
   *
   * 站点的语言。
   */
  lang: string;
  /**
   * The favicon of the site.
   *
   * 站点的 favicon。
   */
  favicon: string[];
  /**
   * The number of posts displayed per page.
   *
   * 每页显示的文章数量。
   */
  postsPerPage: number;
};

export type ProfileConfig = {
  /**
   * The avatar of the profile.
   *
   * 头像。
   */
  avatar: string;
  /**
   * The name of the profile.
   *
   * 名字。
   */
  name: string;
  /**
   * The bio of the profile.
   *
   * 简介。
   */
  bio?: string;
  /**
   * The links of the profile.
   *
   * 链接。
   */
  links: {
    /**
     * The title of the link.
     *
     * 链接的标题。
     */
    name: string;
    /**
     * The URL of the link.
     *
     * 链接的 URL。
     */
    url: string;
    /**
     * The icon of the link. Should be a name of iconify icon.
     *
     * 链接的图标。应该是一个 iconify 图标的名称。
     */
    icon: string;
  }[];
};

export type NavbarConfig = {
  /**
   * The items displayed in the center of the navbar.
   *
   * 在导航栏中间显示的项目。
   */
  navbarCenterItems: ButtonSubConfig<'text'>[];
  /**
   * The items displayed in the right of the navbar.
   *
   * 在导航栏右侧显示的项目。
   */
  navbarRightItems: {
    /**
     * The items displayed only in wide screen (greater than 768px).
     *
     * 仅在宽屏幕（大于 768px）显示的项目。
     */
    onlyWide: ButtonSubConfig<'icon'>[];
    /**
     * The items displayed always.
     *
     * 总是显示的项目。
     */
    always: ButtonSubConfig<'icon'>[];
  };
};

export type ToolBarConfig = {
  /**
   * Whether to enable the side toolbar.
   *
   * 是否启用侧边工具栏。
   */
  enable: boolean;
  /**
   * The items displayed in the side toolbar.
   *
   * 在侧边工具栏中显示的项目。
   */
  items: ButtonSubConfig<'icon'>[];
};

export type LicenseConfig = {
  /**
   * Whether to enable the license.
   *
   * 是否启用许可证。
   */
  enable: boolean;
  /**
   * The name of the license.
   *
   * 许可证的名称。
   */
  name: string;
  /**
   * The link of the license.
   *
   * 许可证的链接。
   */
  url: string;
};

export type FooterConfig = {
  /**
   * The start year of the copyright.
   *
   * 版权开始年份。
   */
  copyrightYear: number;
  /**
   * The items displayed in the right of the footer.
   *
   * 在页脚右侧显示的项目。
   */
  rightItems: (string | { text: string; link?: string; class?: string })[][];
};

export type ArticleConfig = {
  /**
   * Whether to enable the table of contents.
   *
   * 是否启用目录。
   */
  toc: boolean;
  /**
   * Whether to enable the word count.
   *
   * 是否启用字数统计。
   */
  wordCount: boolean;
  /**
   * The configuration of the reading time.
   *
   * 阅读时间的配置。
   */
  readingTime: {
    /**
     * Whether to enable the reading time.
     *
     * 是否启用阅读时间。
     */
    enable: boolean;
    /**
     * The words per minute of the reading time.
     *
     * 阅读时间的每分钟字数。
     */
    wordsPerMinute: {
      /**
       * The words per minute of CJK characters.
       *
       * CJK 字符的每分钟阅读字数。
       */
      cjk: number;
      /**
       * The words per minute of non-CJK words.
       *
       * 非 CJK 单词的每分钟阅读字数。
       */
      nonCjk: number;
    };
  };
};

export type SearchConfig = {
  /**
   * Whether to enable search.
   *
   * 是否启用搜索。
   */
  enable: boolean;
  /**
   * `'pagefind'` | `'algolia'`.
   *
   * Algolia is not implemented yet, just a placeholder. Please use Pagefind.
   *
   * Algolia 尚未实现，只是一个占位符。请使用 Pagefind。
   */
  provider: 'pagefind' | 'algolia';
};

export type CommentConfig = {
  /**
   * Whether to enable comments.
   *
   * 是否启用评论。
   */
  enable: boolean;
  /**
   * The provider of the comments.
   *
   * 评论的提供者。
   */
  provider: 'twikoo' | 'giscus';
  /**
   * The configuration of Twikoo.
   *
   * Twikoo 的配置。
   *
   * @see https://twikoo.js.org/
   */
  twikoo?: {
    /**
     * The envID of Twikoo.
     *
     * Twikoo 的 envID。
     */
    envId: string;
    /**
     * The region of Twikoo backend.
     *
     * Twikoo 后端的地区设置。
     */
    region?: string;
  };
  /**
   * The configuration of Giscus.
   *
   * Giscus 的配置。
   *
   * @see https://giscus.app/
   */
  giscus?: {
    /**
     * The repo used by Giscus.
     *
     * Giscus 使用的 repo。
     */
    repo: `${string}/${string}`;
    /**
     * The repo ID generated by Giscus.
     *
     * Giscus 生成的 repo ID。
     *
     * @see https://giscus.app/
     */
    repoId: string;
    /**
     * The category used by Giscus.
     *
     * Giscus 使用的 discussion 分类。
     *
     * @suggest Announcement
     */
    category: string;
    /**
     * The category ID generated by Giscus.
     *
     * Giscus 生成的分类 ID。
     *
     * @see https://giscus.app/
     */
    categoryId: string;
    /**
     * The mapping of the discussion.
     *
     * 讨论的映射。
     *
     * @suggest 'og:title'
     * @see https://giscus.app/
     */
    mapping:
      | 'pathname'
      | 'url'
      | 'title'
      | 'og:title'
      | {
          type: 'specific' | 'number';
          term: string | number;
        };
    /**
     * The theme of Giscus.
     *
     * Giscus 的主题。
     *
     * @default 'preferred_color_scheme'
     * @see https://giscus.app/
     */
    theme?: string;
    /**
     * The position of the comment box.
     *
     * 评论框的位置
     *
     * @default 'bottom'
     */
    inputPosition?: 'top' | 'bottom';
    /**
     * Whether to enable reactions.
     *
     * 是否启用表情。
     *
     * @default false
     */
    reactionsEnabled?: boolean;
    /**
     * Whether to enable metadata emit.
     *
     * 是否启用元数据输出。
     *
     * @default false
     * @see https://giscus.app/
     */
    emitMetadata?: boolean;
    /**
     * The language setting of Giscus.
     *
     * Giscus 的语言设置。
     *
     * @default siteConfig.lang
     */
    lang?: string;
    /**
     * Whether to lazy load the comment area.
     *
     * 是否懒加载评论区
     *
     * @default true
     */
    lazyLoad?: boolean;
  };
};
