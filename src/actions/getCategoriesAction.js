export function getCategories(lang = 'ru') {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/categories?parent=0&_fields=name,id,cat_icon,posts_num&lang=${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "CATEGORIES_FETCH", items }))
            .catch(() => { });
    }
}