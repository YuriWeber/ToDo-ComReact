import Block from "./Block.js"

export default function Blocks({data, setData}) {
    return (
        <section className="blocks-container">
            {data.map(block => (
                <Block 
                    block={block}
                    data={data}
                    setData={setData}
                    key={block.id}/>
            ))}
        </section>
    )
}