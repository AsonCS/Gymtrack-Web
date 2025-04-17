export * from './Form'

export function Label(props: {
    children?: React.ReactNode
    label: string
    onClick?: () => void
}) {
    return (
        <label className="border-2 border-zinc-700 flex flex-col gap-2 p-2 rounded-xl text-zinc-400 w-full">
            <span onClick={props.onClick}>
                {props.label}
                {props.onClick ? <span>+/-</span> : <></>}
            </span>
            {props.children}
        </label>
    )
}

export function InputText(props: {
    onChange: (text: string) => void
    readOnly?: boolean
    required?: boolean
    text?: string | null
}) {
    return (
        <input
            className={`bg-black border-2 p-1 rounded-md focus:outline-none ${
                props.readOnly
                    ? 'border-zinc-700 text-zinc-700'
                    : 'border-white text-white'
            }`}
            onChange={(e) => props.onChange(e.target.value)}
            readOnly={props.readOnly ?? false}
            required={props.required ?? false}
            style={{
                backgroundColor: 'black',
                borderRadius: '0.375rem',
                padding: '0.25rem',
            }}
            type="text"
            value={props.text ?? ''}
        />
    )
}

export function Textarea(props: {
    onChange: (text: string) => void
    required?: boolean
    text?: string | null
}) {
    return (
        <textarea
            className="bg-black border-2 border-white p-1 rounded-md text-white focus:outline-none"
            onChange={(e) => props.onChange(e.target.value)}
            required={props.required ?? false}
            rows={20}
            style={{
                backgroundColor: 'black',
                borderRadius: '0.375rem',
                padding: '0.25rem',
            }}
            value={props.text ?? ''}
        />
    )
}
