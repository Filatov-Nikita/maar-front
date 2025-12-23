import type { ImageItem } from '@/types/shared';

export default function(appFetch: typeof $fetch) {
  return {
    all(params?: AllParams) {
      return appFetch<HouseItem[]>('objects.php', { query: params });
    },
    show(code: string) {
      return appFetch<[ HouseOne ]>('objects_detail.php', { query: { code } });
    },
  }
}

export type AllParams = Partial<{
  type: '4' | '5',
  cnt: number,
}>;

export interface HouseItem {
  name: string,
  id: string,
  code: string,
  type: string,
  area: string,
  location: string,
  photo: ImageItem[],
}

export interface HouseOne {
  name:              string;
  type:              string;
  preza:             string;
  galery:            ImageItem[];
  location:          string;
  udal:              string;
  uchastok:          string;
  ploshad_doma:      string;
  flors:             string;
  rooms:             string;
  sanuzels:          string;
  etap:              string;
  kogda:             string;
  textbold:          string;
  textlight:         string;
  "1floor_elements": string[];
  "1floor_map":      string;
  "1floor_galery":   ImageItem[];
  "2floor_elements": string[];
  "2floor_map":      string;
  "2floor_galery":   ImageItem[];
  rasp_textbold:     string;
  rasp_textlights:   string;
  rasp_photo:        string;
  raspgalery:        ImageItem[];
  rasp_domov:        string;
  rasp_ploshad:      string;
  rasp_infrostr:     string[];
  code:              string;
  seo_title:         string;
  seo_descr:         string;
  seo_keywords:      string;
}
