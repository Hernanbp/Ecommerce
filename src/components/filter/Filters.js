import { Filter } from "./Filter"

const categories = [
    'All',
    'jewelery',
    `men's clothing`,
    `women's clothing`,
    'electronics',
]

export const Filters = () => {

    return (
        <div className="filters">
            <b style={{ marginBottom: "1em" }}>Categories:</b>
            <div style={{ display: "flex" }}>
                {categories.map((category) =>
                (<Filter
                    key={category}
                    category={category}
                />)
                )}
            </div>
        </div>
    )
}
