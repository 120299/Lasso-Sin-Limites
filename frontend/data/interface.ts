/* ********************************** */
/* SERVICIOS              */
/* ********************************** */

export interface Service {
  id: number;
  title: string;
  description: string;
  video: string;
  image: string;
  link: string;
}

/* ********************************** */
/* PARTNERS             */
/* ********************************** */
export interface Partner {
  name: string;
  logoUrl: string;
}
