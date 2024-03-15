/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('show empty favorite restaurant', ({ I }) => {
    I.seeElement('#contentBody');

    I.see('Restaurant yang Anda Sukai', 'h2');
});

Scenario('Like one Restaurant', async ({ I }) => {
    I.see('Restaurant yang Anda Sukai', 'h2');

    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.resto-item .resto-item__content h2');

    const firstRestaurant = locate('.resto-item .resto-item__content h2 a').first();
    I.click(firstRestaurant);
    I.wait(2);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');

    const likedRestaurantTitle = await I.grabTextFrom('.resto-item .resto-item__content h2');

    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Like one Restaurant', async ({ I }) => {
    I.see('Restaurant yang Anda Sukai', 'h2');

    I.amOnPage('/');
    I.wait(2);
    I.seeElement('.resto-item');

    let firstRestaurant = locate('.resto-item .resto-item__content h2 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.resto-item .resto-item__content h2 a');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    firstRestaurant = locate('.resto-item .resto-item__content h2 a').first();
    I.click(firstRestaurant);

    I.wait(2);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Restaurant yang Anda Sukai', 'h2');
});
