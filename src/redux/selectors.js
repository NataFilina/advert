export const selectorItems = state => state.cars.cars.items;
export const selectorCar = state => state.cars.car;
export const selectorIsShowModal = state => state.cars.isShowModal;
export const selectorFavorites = state => state.favorites.favorites;
export const selectorGlobalLoading = state => state.root.isLoading;
export const selectorGlobalError = state => state.root.error;
