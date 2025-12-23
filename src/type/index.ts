import { MouseEventHandler, RefObject } from "react"

export interface IMG {
    id:number
    href:string
    tooltip:string
}


export interface Drag {
    img:string,
    placeholder:string
    id:string
    onClick:MouseEventHandler
  
}
export type WindowType = "folder" | "terminal" | "personal";

export interface WindowStore {
  zIndex: number;
  folder: boolean;
  terminal: boolean;

  openWindow: (window: WindowType) => void;
  closeWindow: (window: WindowType) => void;
  bringToFront: () => void;
}

export interface SidebarItems{
    id:number
    icon:React.ElementType,
    name:string

}