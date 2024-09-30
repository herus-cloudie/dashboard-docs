

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Icon } from "@iconify/react/dist/iconify.js"

export function CustomAlert() {
  return (
    <Alert className="text-cyan-600" variant={'default'}>
      <Icon icon="material-symbols:info" width={20}/>
      <AlertTitle>info!</AlertTitle>
      <AlertDescription>
        If you are in Iran, please double check your internet connection and make sure you are using good vpn.
      </AlertDescription>
    </Alert>
  )
}
