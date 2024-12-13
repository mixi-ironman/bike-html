<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Database\Models\Tenant;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::group(['namespace' => 'Store\MixiBike'], function () {
    //home
    Route::get('/', 'HomeController@index')->name('mixibike.home.index');
    Route::get('/contact', 'ContactController@index')->name('mixibike.contact.index');
    Route::get('/blog', 'BlogController@index')->name('mixibike.blog.index');
    Route::get('/blog/detail', 'BlogController@detail')->name('mixibike.blog.detail');

    Route::get('/products', 'ProductController@index')->name('mixibike.product.index');
    Route::get('/product/detail/{id}', 'ProductController@detail')->name('mixibike.product.detail');
    Route::get('/collection/{slug}', 'ProductController@collection')->name('mixibike.home.collection');

    Route::post('/product/detail/checkVariation', 'ProductController@checkVariation')->name('mixibike.checkVariation');
    Route::post('/product/get-variant', 'ProductController@getVariant')->name('mixibike.getVariant');

    Route::get('/account/profile', 'AccountController@profile')->name('mixibike.profile');
    Route::get('/account/order', 'AccountController@order')->name('mixibike.order');
    Route::get('/account/order/{id}', 'AccountController@orderDetail')->name('mixibike.order.detail');
    Route::get('/account/address', 'AccountController@address')->name('mixibike.address');
    Route::post('/account/address/{id}', 'AccountController@updateAddress')->name('mixibike.address.update');
    Route::post('/account/add/address', 'AccountController@addAddress')->name('mixibike.address.add');
    Route::post('/account/delete/{id}', 'AccountController@deleteAddress')->name('mixibike.address.delete');

    Route::get('/account/login', 'AccountController@login')->name('mixibike.login');
    Route::post('/account/login', 'AccountController@loginSend')->name('mixibike.login.post');
    Route::get('/account/register', 'AccountController@register')->name('mixibike.register');
    Route::post('/account/register', 'AccountController@registerSend')->name('mixibike.account.register.post');
    Route::get('/account/logout', 'AccountController@logout')->name('mixibike.account.logout');
    Route::post('/account/recover', 'AccountController@recover')->name('mixibike.account.recover');
    Route::get('/reset/{token}', 'AccountController@resetPassword')->name('mixibike.reset-password');
    Route::post('/reset/{token}', 'AccountController@reset')->name('mixibike.reset-password-action');

    Route::get('/blogs', 'BlogController@index')->name('mixibike.blogs');
    Route::get('/blogs/{id}', 'BlogController@detail')->name('mixibike.blogs.detail');

    Route::post('/contact', 'ContactController@send')->name('mixibike.contact.send');

    //cart
    Route::controller(CartController::class)->group(function () {
        //show cart
        Route::get('/cart', 'cart')->name('mixibike.cart');
        //add cart
        Route::post('/add-to-cart', 'addCart')->name('mixibike.cart.add');
        //remove cart
        Route::post('/remove-cart', 'removeCart')->name('mixibike.cart.remove');
        //update cart
        Route::post('/update-cart', 'updateCart')->name('mixibike.cart.update');

        Route::post('add-quickly', 'addQuickly')->name('mixibike.cart.quickly');
        //show checkout
        Route::get('/checkout', 'checkout')->name('mixibike.checkout');
        // check coupons
        ROute::post('/check-coupon', 'checkCoupons')->name('mixibike.checkCoupons');
        //action order
        Route::post('/order', 'order')->name('mixibike.order');
        Route::get('/get-item-cart', 'getCartItem')->name('mixibike.getCartItem');
    });
    Route::get('/get-district-by-province', 'ZoneController@getDistrictByProvince')->name('bingosite.get.district');

    Route::get('/get-ward-by-district', 'ZoneController@getWardByDistrict')->name('zone.get.ward');
    Route::get('/get-address-from-list', 'ZoneController@getAddressFromList')->name('getAddressFromList');

    Route::get('{content}', 'PageThemeController@pages')->name('mixibike.page');
    Route::fallback('PageThemeController@fallback');
});
Route::get('/make-login/{token}', 'Seller\LoginController@tokenBasedLogin')->middleware('throttle:2,1');