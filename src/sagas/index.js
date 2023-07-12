import { articleSaga } from "./articleSaga";

export function* initSagas(sagaMiddleware) {
	Object.values(articleSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
