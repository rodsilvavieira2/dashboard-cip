import {
  FilePlusIcon,
  PieChartIcon,
  CommunityIcon,
  DollarSignIcon,
  GlassesIcon,
  SettingsIcon,
} from "../../icons";

export const navItems = [
  {
    id: 1,
    label: "Dashboard",
    link: "/",
    icon: <PieChartIcon />,
  },
  {
    id: 2,
    label: "Pedidos",
    link: "/",
    icon: <FilePlusIcon />,
  },
  {
    id: 3,
    label: "Produtos",
    link: "/",
    icon: <GlassesIcon />,
  },
  {
    id: 4,
    label: "Clients",
    link: "/",
    icon: <CommunityIcon />,
  },
  {
    id: 5,
    label: "Financeiro",
    link: "/",
    icon: <DollarSignIcon />,
  },
  {
    id: 6,
    label: "Usuários",
    link: "/",
    icon: <SettingsIcon />,
  },
];
