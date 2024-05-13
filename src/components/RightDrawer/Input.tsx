import { ChangeEventHandler, KeyboardEventHandler } from "react"

interface InputProps {
    onChange:  ChangeEventHandler,
    placeholder: string,
    className: string,
    onKeyDown: KeyboardEventHandler,
    value: string
}

export function Input({placeholder, onChange, className, onKeyDown, value}:InputProps) {
    return <div>
      <div className="text-white text-sm font-medium text-left py-2">
        
      </div>
      <input onChange={onChange} value={value} placeholder={placeholder} onKeyDown={onKeyDown} className={`w-full px-2 py-1 rounded-lg border-slate-200 bg-zinc-900 text-slate-200 ${className}`} />
    </div>
}