<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BrunchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\Store_Section_Controller;
use App\Http\Controllers\StoreController;
use App\Models\Admin;
use App\Models\SellerMan;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// for chat
Route::get('/user-stats', [UserController::class, 'getUserStats']);


// Route::middleware(['auth:sanctum'])->group(function () {
//        Route::get("/checkingAuthenticated" , function () {
//         return response()->json(["message" => "You are in " , "status" => 200] , 200);
//        });
//     });       


    Route::controller(RoleController::class)->group(function () {    
        Route::get('/role','index');
    });         

    Route::controller(CategoryController::class)->group(function () {        
        Route::get('/category','index_admin');
        Route::get('/category/{id}','index_seller');
        Route::post('/CategoryAdd/{id}','store');

    });         


Route::controller(StoreController::class)->group(function () {     
    Route::get('/store','index_admin');
    Route::get('/store/{id}','index_seller');
    Route::post('/StoreAdd/{id}','store');
    Route::get('/store/{id}','edit');
    Route::put('/updatestore/{id}','update');
    Route::delete('/deletestore/{id}','destroy');
});     

Route::controller(ProductController::class)->group(function () {  
    Route::get('/product','index_admin');
    Route::get('/product/{id}','index_seller'); 
    Route::post('/ProductAdd/{id}','store');

});     

Route::controller(SectionController::class)->group(function () {   
    Route::get('/section','index_admin');
    Route::get('/section/{id}','index_seller'); 
    Route::post('/SectionAdd/{id}','store');

});    
Route::controller(BranchController::class)->group(function () {   
    Route::get('/branch','index_admin');
    Route::get('/branch/{id}','index_seller'); 
    Route::post('/BranchAdd/{id}','store');

});  
Route::controller(Store_Section_Controller::class)->group(function () {   
    Route::post('/SectionAddToStore','store');
});      



Route::controller(SellerController::class)->group(function () {
        Route::get('/seller', 'index');
        Route::get('/seller/{id}','edit');
        Route::put('/updateseller/{id}','update');
        Route::delete('/deleteseller/{id}','destroy');
        Route::post('/sellerlogin','Login');
        Route::post('/sellerRegister','Register');
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::post('/sellerlogout/{id}', 'Logout');
       });
   
});

Route::controller(AdminController::class)->group(function () {
    Route::post('/adminlogin','Login');
    Route::post('/admin','Register');
 Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/adminlogout/{id}', 'Logout');
    });

});





