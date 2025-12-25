export const BevelButton = () => {
    return <div className='m-10 flex gap-10'>
        {/* inset 0 2px 1px -1px white, inset 0 0 1px #ffffff, inset 0 -2px 1px -1px rgb(0 0 0 / 15%), 0 0 0 0.5px rgb(0 0 0 / 25%), 0 0 2px rgb(0 0 0 / 25%), 0 1px 1px -1px rgb(0 0 0 / 25%) */}
        {/* 0 1px 1px -1px rgb(0 0 0 / 50%), 0 0 2px rgb(0 0 0 / 10%), 0 0 0 0.5px rgb(0 0 0 / 10%), inset 0 0 1px rgb(0 0 0 / 25%), inset -30px -30px 2px -29px white, inset 30px -30px 2px -29px white, inset -30px 30px 2px -29px white, inset 30px 30px 2px -29px white */}
        <button className='bg-neutral-400/15 font-medium text-xs rounded-xs flex overflow-hidden relative group cursor-pointer' style={{
            boxShadow: "0 0 0 0.5px rgb(0 0 0 / 50%), 0 0 2px rgb(0 0 0 / 40%), 0 0 2px rgb(0 0 0 / 20%), 0 0 0 1px rgb(255 255 255 / 15%)"
        }}>
            {/* <div className='absolute inset-0 size-full sunk-edge rounded-xs' style={{
        boxShadow: `
        inset 0 0 2px rgb(0 0 0 / 25%)
        `
      }} /> */}
            <div className='absolute inset-0 size-full mix-blend-overlay rounded-xs group-active:opacity-0' style={{
                boxShadow: `
                    inset 5px 5px 1px -4px rgb(255 255 255 / 40%), 
                    inset -5px 5px 1px -4px rgb(255 255 255 / 40%) 
                `
            }} />
            <div className='absolute inset-0 size-full mix-blend-multiply rounded-xs group-active:rotate-180' style={{
                boxShadow: `
                    inset 5px -5px 1px -4px rgb(0 0 0 / 15%), 
                    inset -5px -5px 1px -4px rgb(0 0 0 / 15%) 
                `
            }} />
            <div className='bg-red-500 self-stretch w-2 block' />
            <div className='px-3 py-1 group-active:pt-1.5 group-active:pb-0.5'>Cancel</div>
        </button>


        <button className='bg-neutral-400/30 font-medium text-xs rounded-xs flex overflow-hidden relative group cursor-pointer' style={{
            boxShadow: "0 0 0 0.5px rgb(0 0 0 / 50%), 0 0 2px rgb(0 0 0 / 40%), 0 0 2px rgb(0 0 0 / 20%), 0 0 0 1px rgb(255 255 255 / 15%)"
        }}>
            <div className='absolute inset-0 size-full mix-blend-overlay rounded-xs group-active:opacity-0' style={{
                boxShadow: `
                    inset 5px 5px 1px -4px rgb(255 255 255 / 40%), 
                    inset -5px 5px 1px -4px rgb(255 255 255 / 40%)
                `
            }} />
            <div className='absolute inset-0 size-full mix-blend-multiply rounded-xs group-active:rotate-180' style={{
                boxShadow: `
          inset 5px -5px 1px -4px rgb(0 0 0 / 15%), 
          inset -5px -5px 1px -4px rgb(0 0 0 / 15%) 
        `
            }} />
            <div className='px-3 py-1 group-active:pt-1.5 group-active:pb-0.5'>Continue</div>
        </button>
    </div>
}