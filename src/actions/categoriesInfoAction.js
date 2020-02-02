export function getCategoriesInfo(lang = 'ru') {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/categories?per_page=30&parent=0&_fields=name,children_info,cat_icon,slug,id&lang=${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "CATEGORIES_INFO", items }))
            .catch(() => { });
    }
}