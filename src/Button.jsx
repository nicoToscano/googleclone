export function Button1({ nameButton, urlButton }) {
  return (
    <div className="px-1.5 my-2.5">
      <a href={urlButton} className="bg-zinc-50 border border-zinc-50 hover:border-zinc-200 text-sm text-black font-extralight py-2 px-4 rounded h-9 min-w-14">
        {nameButton}
      </a>
    </div>
  )
    
  }

