export function getSingleAd(id, lang = 'ru') {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/posts/101`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "SINGLE_AD", items }))
            .catch(() => { });
    }
}