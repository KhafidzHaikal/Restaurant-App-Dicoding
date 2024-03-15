/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/restaurant-show-presenter';

describe('Showing all favorite restaurant', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurant have been liked', () => {
        it('should ask for the favorite restaurant', () => {
            const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);

            const data = new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurant,
            });

            expect(favoriteRestaurant.getAllRestaurant)
                .toHaveBeenCalledTimes(1);
        });
    });

    describe('When favorite restaurant exist', () => {
        it('should show the restaurant', (done) => {
            document.getElementById('restaurant').addEventListener('restaurant:updated', () => {
                expect(document.querySelectorAll('.resto-item').length).toEqual(2);
                done();
            });

            const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb, false);
            favoriteRestaurant.getAllRestaurant.and.returnValues([
                {
                    id: 11,
                    title: 'A',
                },
                {
                    id: 22,
                    title: 'B',
                },
            ]);
            const data = new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurant,
            });
        });
    });
});
