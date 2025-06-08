"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SideBarOptions } from "@/services/Constants"
import { use } from "react"

export function AppSidebar() {

  const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className={"flex flex-col items-center justify-center p-4"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={200}
          className="w-[150px] h-[70px] object-cover rounded-2xl mb-4"
        />
        <Button className="w-full mt-5"><Plus /> Create New Interview</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index} className="p-1">
                  <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-50'}`}>
                    <Link href={option.path}>
                      <option.icon className={`${path == option.path && 'text-primary'}`}/>
                      <span className={`text-[16px] ${path == option.path && 'text-primary'}`}>{option.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
