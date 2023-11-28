
const CategoryItem = ({ category }) => {
    return(
        <li className="nav-item ">
                <a className="nav-link text-light" aria-current="page" href="APP.JS">{category}</a>
        </li>
    )
}

export default CategoryItem;