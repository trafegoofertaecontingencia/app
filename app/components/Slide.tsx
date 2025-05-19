type PathProp = {
    path: String
}

export default function Slide({ path }: PathProp) {
    return(
        <img src={`${path}`} alt="" />
    )
}