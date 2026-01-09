"use client";

import * as React from "react";
import {
  BookUser,
  Earth,
  ChartColumn,
  Image,
  User,
  Users,
  Bookmark,
  BriefcaseBusiness,
  HandCoins,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Brayan Lasso",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Panel de Control",
      url: "#",
      icon: ChartColumn,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Usuarios",
      url: "#",
      icon: User,
      items: [
        {
          title: "Perfil",
          url: "#",
        },
        {
          title: "Lista de Usuarios",
          url: "#",
        },
      ],
    },
    {
      title: "Medios",
      url: "#",
      icon: Image,
      items: [
        {
          title: "Galería",
          url: "#",
        },
      ],
    },
    {
      title: "Categorias",
      url: "#",
      icon: Bookmark,
      items: [
        {
          title: "Listado de Categorias",
          url: "#",
        },
      ],
    },
    {
      title: "Proyectos",
      url: "#",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "Nuevo Proyecto",
          url: "#",
        },
        {
          title: "Listado de Proyectos",
          url: "#",
        },
      ],
    },
    {
      title: "Ubicaiones",
      url: "#",
      icon: Earth,
      items: [
        {
          title: "Listado de Paises",
          url: "#",
        },
        {
          title: "Listado de Ciudades",
          url: "#",
        },
      ],
    },

    {
      title: "Servicios",
      url: "#",
      icon: BookUser,
      items: [
        {
          title: "Listado de Servicios",
          url: "#",
        },
      ],
    },

    {
      title: "Clientes",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Listado de Clientes",
          url: "#",
        },
      ],
    },

    {
      title: "Facturación",
      url: "#",
      icon: HandCoins,
      items: [
        {
          title: "Generar Pedido",
          url: "#",
        },
        {
          title: "Listado de Pedidos",
          url: "#",
        },
        {
          title: "Facturas",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
