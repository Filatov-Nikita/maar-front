import type { ImageItem } from '@/types/shared';

export default function(appFetch: typeof $fetch) {
  return {
    all(params: AllParams) {
      return appFetch<ArticleItem[]>('news26.php', {
        query: params,
      });
    },
    show(code: string) {
      return appFetch<[ ArticleOne ]>('news_detail26.php', { query: { code } });
    },
  }
}

export type AllParams = Partial<{
  type: '6' | '7' | '8',
  cnt: number,
}>;


export interface ArticleItem {
  name:   string;
  rubr:   string;
  author: string;
  date:   string;
  code:   string;
  img:    ImageItem;
}

export interface ArticleOne {
  name:           string;
  text1:          string;
  text2:          string;
  detail_text:    string;
  date:           string;
  rubr:           string;
  author:         string;
  author_subtext: string;
  author_img:     ImageItem;
  code:           string;
  seo_title:      string;
  seo_descr:      string;
  seo_keywords:   string;
  img:            ImageItem;
}
