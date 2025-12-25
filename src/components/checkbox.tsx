type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

const cn_thumb = `
    w-1/2 h-full rounded-[1px] 
    ml-0 absolute
    flex items-center justify-center
    bg-white dark:bg-neutral-100 
    peer-checked:ml-5
    peer-checked:mr-0 
`.trim()

export const Checkbox = ({ name, className, type, ...props }: CheckboxProps) => {
    return (
        <label htmlFor={name} className="bg-neutral-400/30 dark:bg-neutral-600/50 rounded-[2px] has-checked:bg-blue-600 dark:has-checked:bg-blue-500 cursor-pointer active:opacity-50 w-10 flex items-center relative overflow-hidden border-[0.5px] border-current/20">
            <input
                type="checkbox"
                className="hidden peer"
                id={name}
                {...props}
            />
            <span className="opacity-50 w-5 text-center block text-white">I</span>
            <span className="opacity-50 w-5 text-center block">O</span>
            {/* Thumb */}
            <div className={cn_thumb} style={{
                transition: 'all 0.1s cubic-bezier(0.3, 0, 0.2, 1)',
                boxShadow: '0 0 1px rgb(0 0 0 / 50%)'
            }}>
                <svg width="1em" height="0.75em" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 dark:opacity-100">
                    <path d="M7 1L7 5" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" />
                    <path d="M5 1L5 5" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" />
                    <path d="M3 1L3 5" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" />
                    <path d="M1 1L1 5" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" />
                </svg>

            </div>
        </label>
    )
}