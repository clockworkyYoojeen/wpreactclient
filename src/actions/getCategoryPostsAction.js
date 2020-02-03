export function getCategoryPosts(cat_id = 2, lang = 'ru') {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/posts?categories=${cat_id}&lang=${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "CATEGORY_POSTS_FETCH", items }))
            .catch(() => { });
    }
}