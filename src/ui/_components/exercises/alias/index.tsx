export * from './Form'

export const width = 256

export function Label(props: { children?: React.ReactNode; label: string }) {
    return (
        <label
            className="border-2 border-zinc-700 flex flex-col p-2 rounded-xl text-zinc-400 w-5/6"
            style={{ width: width }}
        >
            {props.label}
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
            rows={10}
            value={props.text ?? ''}
        />
    )
}
