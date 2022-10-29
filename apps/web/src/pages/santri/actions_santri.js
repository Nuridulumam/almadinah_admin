import API from "../../stores/actions/API";
import { actionPending, actionSuccess, actionError } from "../../stores/actions/ActionTypes";

// ACTION TYPES TO DISPATCH: METHOD_URL_TYPES
export const GET_MONEV_SUSTAINABLE_PENDING = "GET_MONEV_SUSTAINABLE_PENDING";
export const GET_MONEV_SUSTAINABLE_SUCCESS = "GET_MONEV_SUSTAINABLE_SUCCESS";
export const GET_MONEV_SUSTAINABLE_ERROR = "GET_MONEV_SUSTAINABLE_ERROR";
export const POST_SUSTAINABLE_PENDING = "POST_SUSTAINABLE_PENDING";
export const POST_SUSTAINABLE_SUCCESS = "POST_SUSTAINABLE_SUCCESS";
export const POST_SUSTAINABLE_ERROR = "POST_SUSTAINABLE_ERROR";
export const PUT_SUSTAINABLE_PENDING = "PUT_SUSTAINABLE_PENDING";
export const PUT_SUSTAINABLE_SUCCESS = "PUT_SUSTAINABLE_SUCCESS";
export const PUT_SUSTAINABLE_ERROR = "PUT_SUSTAINABLE_ERROR";

export const MONEV_SUSTAINABLE_DATA = "MONEV_SUSTAINABLE_DATA";
export const SET_MONEV_SUSTAINABLE_MODAL = "SET_MONEV_SUSTAINABLE_MODAL";
export const SET_MONEV_SUSTAINABLE_MODAL_SIZE = "SET_MONEV_SUSTAINABLE_MODAL_SIZE";

// URL: URL_{URL}
const MONEV_SUSTAINABLE_URL = "/v1/monitoring-evaluation";

const get = (param, resolve) => (dispatch) => {
    dispatch(actionPending(GET_MONEV_SUSTAINABLE_PENDING));
    API.get(MONEV_SUSTAINABLE_URL, { params: param })
        .then((res) => {
            dispatch(actionSuccess(GET_MONEV_SUSTAINABLE_SUCCESS, res));
            const totalCount = res.data.data.count;
            const page = res.data.data.page;
            const maxPage = res.data.data.maxPage;
            const length = res.data.data.limit;
            let data = res.data.data.records.map((item, i) => ({
                ...item,
                no: i + 1 + (page - 1) * length,
            }));
            if (resolve) {
                resolve({
                    data,
                    page,
                    totalCount,
                    maxPage,
                    length,
                });
            }
        })
        .catch((err) => {
            dispatch(actionError(GET_MONEV_SUSTAINABLE_ERROR, err));
        });
};



const monevSustainable = {
    get
};
export default monevSustainable;

export const setMonevSustainableData = (data) => (dispatch) => dispatch({ type: MONEV_SUSTAINABLE_DATA, data });
