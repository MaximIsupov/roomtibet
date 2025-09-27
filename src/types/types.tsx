export type NavLink = {
  name: string
  href: string
}

export type CustomSelectOption = {
  label: string,
  value: string
}

export type Programms = {
    title: string,
    imageSrc: string,
    text?: string,
    backgroundColor?: string
}

export type GalleryImage = {
    src: string,
    alt: string,
    big?: boolean
}

export type DirectionCardProps = {
  title: string;
  subtitle: string;
  imagePath: string;
  href: string;
  rating?: number;
  price?: number;
  priceCurrency?: '$' | '₽';
}

export type BlogPost = {
    imageLink: string,
    title: string,
    shortDescription: string,
    href: string,
    postDate: string,
}
