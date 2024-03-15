/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    // eslint-disable-next-line no-undef
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({
            id: 1,
        });
    });

    // eslint-disable-next-line no-undef
    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        // eslint-disable-next-line no-undef
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });

    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await TestFactories.createLikeButtonInitiatorWithRestaurant({ id: 1 });

        // hapus dulu film dari daftar film yang disukai
        await FavoriteRestaurantIdb.deleteRestaurant(1);

        // kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        // eslint-disable-next-line no-undef
        expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
});
