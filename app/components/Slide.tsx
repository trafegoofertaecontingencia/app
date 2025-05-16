type PathProp = {
    path: String
}

export default function Slide({ path }: PathProp) {
    return(
        <img className="w-[100vw]" src={`${path}`} alt="" />
    )
}