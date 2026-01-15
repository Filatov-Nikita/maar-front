import type { ImageItem } from '@/types/shared';

export default function(appFetch: typeof $fetch) {
  return {
    all(params?: AllParams) {
      return appFetch<AreaItem[]>('uchastki26.php', {
        query: params,
      });
    },
    show(code: string) {
      return appFetch<[ AreaOne ]>('uchastki26_detail.php', { query: { code } });
    },
  }
}

export type AllParams = Partial<{
  cnt: number,
  hideid: string,
}>;

export interface AreaItem {
  name:     string;
  id:       string;
  code:     string;
  area:     string;
  mkad:     string;
  location: string;
  photo:    ImageItem[];
}

export interface AreaOne {
    id:              string,
    name:            string;
    ploshad_doma:    string;
    mkad:            string;
    location:        string;
    galery:          ImageItem[];
    kadastr:         string;
    type:            string;
    naznach:         string;
    gaz:             string;
    electro:         string;
    kanaliz:         string;
    vodosnab:        string;
    rasp_textbold:   string;
    rasp_textlights: string;
    rasp_photo:      string;
    rasp_domov:      string;
    rasp_ploshad:    string;
    rasp_infrostr:   string[];
    code:            string;
    seo_title:       string;
    seo_descr:       string;
    seo_keywords:    string;
}
