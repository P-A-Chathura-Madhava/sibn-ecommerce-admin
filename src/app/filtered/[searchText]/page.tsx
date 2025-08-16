import { AppSidebar } from '@/components/ui/app-sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Navbar from '@/ui-core/components/organisms/Navbar'
import React from 'react'

function FilteredProducts() {
  return (
        <div>
      {/* <Navbar /> */}
      <div className="flex">
        <AppSidebar />
        <div className="px-8 w-full">
          <SidebarTrigger />
        </div>
      </div>
    </div>
  )
}

export default FilteredProducts