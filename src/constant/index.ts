import { fireFoxLogo, folderLogo, plasmaLogo, settingLogo, terminalLogo } from "@/assets";
import { IMG, SidebarItems } from "@/type";
import { Icon, LucideWorkflow, UserCogIcon, Workflow } from "lucide-react";

export const images: IMG[] = [
  {
    id: 1,
    href: plasmaLogo,
    tooltip:"App Launcher"
  },
  {
    id: 2,
    href: terminalLogo,
    tooltip:"Konsole"
  },
 {
    id:5,
    href:fireFoxLogo,
    tooltip:"FireFox"
  }
];




export const sideItems:SidebarItems[]=[
  {
    id:1,
    icon:UserCogIcon,
    name:"About Me"
  },

  {
    id:2,
    icon:Workflow,
    name:"Work"
  }
]






