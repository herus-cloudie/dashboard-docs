import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icon } from '@iconify/react';

import SearchCommand from '../custom/searchCommand'

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant="outline">Search <Icon icon="oui:search" /></Button>
      </DialogTrigger>
      <DialogContent>
        <SearchCommand />
      </DialogContent>
    </Dialog>
  )
}
