import { ComponentProps, ReactNode } from "react"

interface MenuButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function MenuOptions(props: MenuButtonProps) {
  return (
    <button 
      className="flex items-center gap-3 ml-1 text-zinc-400 font-medium hover:bg-zinc-100" 
      {...props}
    />
  )
}