export default function TextUnderline({nameDirection, urlDirection}) {
    return (
        <div className="text-[14px] p-2 hover:underline">
            <a href={urlDirection}>{nameDirection}</a>
        </div>
        
    )
}