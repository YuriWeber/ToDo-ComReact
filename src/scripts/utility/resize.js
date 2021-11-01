export default function resize(event, height, load=false) {
    // função para alterar automaticamente o tamanho dos textarea
    if (event) {
        const target = event.target ? event.target : event
        if (!load) {
            target.style.height = `${height}px`
            target.style.height = `${target.scrollHeight-(height/4)}px` // divisão para não sobrar espaço em baixo
        } else {
            return target.scrollHeight
        }
    }
}