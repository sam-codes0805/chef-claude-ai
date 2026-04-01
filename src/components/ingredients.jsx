export default function Ingredientslist(props) {
    const { list } = props;
    return (
        <section>
            {list.length > 0 && <div className="m-8 px-2">
                <h1 className="font-semibold mb-4">Ingredients on hand:</h1>
                <ul className="px-2 list-disc list-inside">
                    {list}
                </ul>
            </div>}
        </section>
    )
}