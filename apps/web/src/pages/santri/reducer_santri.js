import {
    GET_MONEV_SUSTAINABLE_PENDING,
    GET_MONEV_SUSTAINABLE_SUCCESS,
    GET_MONEV_SUSTAINABLE_ERROR,
    POST_SUSTAINABLE_PENDING,
    POST_SUSTAINABLE_SUCCESS,
    POST_SUSTAINABLE_ERROR,
    PUT_SUSTAINABLE_PENDING,
    PUT_SUSTAINABLE_SUCCESS,
    PUT_SUSTAINABLE_ERROR,
    MONEV_SUSTAINABLE_DATA,
    SET_MONEV_SUSTAINABLE_MODAL,
    SET_MONEV_SUSTAINABLE_MODAL_SIZE,
} from "./actions_santri";

const initialState = {
    pending: false,
    pending_download: false,
    pending_post: false,
    pending_put: false,
    pending_delete: false,
    error: null,
    data: null,
    detailData: null,
    isOpenModal: false,
    modalType: "",
    modalSize: "md",
};

const monevSustainable = (state = initialState, action) => {
    switch (action.type) {
        case GET_MONEV_SUSTAINABLE_PENDING:
            return {
                ...state,
                pending: true,
            };
        case GET_MONEV_SUSTAINABLE_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data,
            };
        case GET_MONEV_SUSTAINABLE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case POST_SUSTAINABLE_PENDING:
            return {
                ...state,
                pending_post: true,
            };
        case POST_SUSTAINABLE_SUCCESS:
            return {
                ...state,
                pending_post: false,
                data: action.data,
            };
        case POST_SUSTAINABLE_ERROR:
            return {
                ...state,
                pending_post: false,
                data: action.data,
            };
        case PUT_SUSTAINABLE_PENDING:
            return {
                ...state,
                pending_put: false,
                error: action.error,
            };
        case PUT_SUSTAINABLE_SUCCESS:
            return {
                ...state,
                pending_put: false,
                data: action.data,
            };
        case PUT_SUSTAINABLE_ERROR:
            return {
                ...state,
                pending_put: false,
                error: action.error,
            };
        case MONEV_SUSTAINABLE_DATA:
            return {
                ...state,
                detailData: action.data,
            };
        case SET_MONEV_SUSTAINABLE_MODAL:
            return {
                ...state,
                isOpenModal: action.data.isOpen,
                modalType: action.data.modalType,
            };
        case SET_MONEV_SUSTAINABLE_MODAL_SIZE:
            return {
                ...state,
                modalSize: action.data.size,
            };
        default:
            return state;
    }
};

export default monevSustainable;
