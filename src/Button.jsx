export function Button({ nameButton, urlButton }) {
  return (
    <div className="px-1.5 my-2.5">
      <button className="bg-zinc-50 border border-zinc-50 hover:border-zinc-200 text-sm text-black font-extralight py-2 px-4 rounded h-9 min-w-14" href={urlButton}>
        {nameButton}
      </button>
    </div>
  )
    
  }

