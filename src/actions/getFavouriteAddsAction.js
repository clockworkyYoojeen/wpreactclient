export function getFav(ids, lang) {

    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/posts?include=${ids}&lang=${lang}&_fields=id,post_category,post_region,region,date,post_author,post_image,title,price`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "FAV_FETCH", items }))
            .catch(() => { });
    }
}