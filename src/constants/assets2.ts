const ImageSource = {
  deck: () => import('../assets/DeckRenew.jpg'),
  hill: () => import('../assets/Hill.jpg'),
  neifb: () => import('../assets/Neifb.jpg'),
  grell: () => import('../assets/Grell.jpg'),
  wh: () => import('../assets/wh.jpg'),
  hek: () => import('../assets/Hekate.jpg'),
  apo: () => import('../assets/apo.jpg'),
  LR: () => import('../assets/LetsRoar.jpg'),
} as const;

export type ImageKeys = keyof typeof ImageSource;
export default ImageSource;