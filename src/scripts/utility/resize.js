export default function resize(event, height) {
    if (event) {
        const target = event.target ? event.target : event
        target.style.height = height
        target.style.height = `${target.scrollHeight}px`
    }
}