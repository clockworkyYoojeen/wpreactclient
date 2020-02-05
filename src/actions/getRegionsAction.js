export function getRegions(lang) {
    return (dispatch) => {
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wp/v2/region?_fields=id,name`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch({ type: "REGIONS_FETCH", items }))
            .catch(() => { });
    }
}