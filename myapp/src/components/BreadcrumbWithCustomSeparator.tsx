import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};
type activePage = {
  active: React.ReactNode;
}

export function BreadcrumbWithCustomSeparator({ items,active }: BreadcrumbProps & activePage) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
      {items.map((item,index) => {
        return (
          <>
            <BreadcrumbItem key={index}> 
              <BreadcrumbLink asChild>
                <Link href="">{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
          </>
        )
      })}
      
      
        <BreadcrumbItem>
          <BreadcrumbPage>{active}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
