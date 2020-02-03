export function getRecentAds(lang = 'ru') {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/posts?per_page=6&lang=${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "RECENT_FETCH", items }))
            .catch(() => { });
    }
}