export function getSearchRes(search = null, cat_id = null, reg_id = null, lang = 'ru') {
    var keyword = ''
    var categories = ''
    var regions = ''
    if(search){
        keyword = `&search=${search}`
    }
    if(cat_id){
        categories = `categories=${cat_id}`
    }
    if(reg_id){
        regions = `&region=${reg_id}`
    }
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/posts?${categories}${regions}${keyword}&lang=${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "SR_FETCH", items }))
            .catch(() => { });
    }
}