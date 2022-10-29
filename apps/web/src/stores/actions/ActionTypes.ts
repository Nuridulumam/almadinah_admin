export function actionPending(type: any) {
    return {
        type: type,
    };
}

export function actionSuccess(type: any, data: any) {
    return {
        type: type,
        data: data,
    };
}

export function actionError(type: any, error: any) {
    return {
        type: type,
        error: error,
    };
}
