import TextUnderline from './TextUnderline.jsx'

export function Footer() {
    return (
        <footer className='flex flex-col absolute inset-x-0 bottom-0 bg-zinc-50 text-[14px] text-[#1f1f1f] font-extralight'>
            <div className='px-7 py-3 h-12'>
                <h3>Ecuador</h3>
            </div>

            <div className='flex flex-row justify-between px-7 py-3 border-t border-t-zinc-200 h-12'>
                <div className='flex flex-row items-center'>
                    <TextUnderline
                    className='px-2'
                    nameDirection="Sobre Google"
                    urlDirection='https://about.google/?utm_source=google-EC&utm_medium=referral&utm_campaign=hp-footer&fg=1'/>
                    <TextUnderline
                    className='px-2'
                    nameDirection="Publicidad"
                    urlDirection='https://ads.google.com/intl/es-419/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' />
                    <TextUnderline
                    className='px-2'
                    nameDirection="Negocios"
                    urlDirection='https://www.google.com/business/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1' />
                    <TextUnderline
                    className='px-2'
                    nameDirection="Cómo funciona la Búsqueda"
                    urlDirection='https://www.google.com/search/howsearchworks/?fg=1' />
                </div>
                <div className='flex flex-row items-center'>
                    <TextUnderline
                    className='px-2'
                    nameDirection="Privacidad"
                    urlDirection='https://policies.google.com/privacy?hl=es-419&fg=1' />
                    <TextUnderline
                    className='px-2'
                    nameDirection="Condiciones"
                    urlDirection='https://policies.google.com/terms?hl=es-419&fg=1' />
                    <TextUnderline
                    className='px-2'
                    nameDirection="Configuración"
                    urlDirection='https://policies.google.com/terms?hl=es-419&fg=1' />
                </div>
            </div>            
        </footer>
    )
}