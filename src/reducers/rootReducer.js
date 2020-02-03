const initState = {
    categories: [],
    categoriesInfo: [],
    regions: [],
    items: [],
    search_results: [],
    loading: true
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'CHANGE_LOADER') {
        return {
            ...state,
            loading: action.loading,
        }
    }
    if (action.type === 'CATEGORIES_INFO') {
        return {
            ...state,
            categoriesInfo: action.items,
            loading: false
        }
    }
    if (action.type === 'CATEGORIES_FETCH') {
        return {
            ...state,
            categories: action.items,
            loading: false
        }
    }
    if (action.type === 'REGIONS_FETCH') {
        return {
            ...state,
            regions: action.items,
            loading: false
        }
    }
    if (action.type === 'SR2_FETCH') {
        return {
            ...state,
            items: action.items,
            loading: false
        }
    }
    if (action.type === 'SR_FETCH') {
        return {
            ...state,
            items: action.items,
            loading: false
        }
    }
    if (action.type === 'CATEGORY_POSTS_FETCH') {
        return {
            ...state,
            items: action.items,
            loading: false
        }
    }
    if (action.type === 'RECENT_FETCH') {
        return {
            ...state,
            items: action.items,
            loading: false
        }
    }
    // if (action.type === 'TOGGLE_LOADING') {
    //     return {
    //         ...state,
    //         loading: false,
    //     }
    // }
    return state;
}

export default rootReducer