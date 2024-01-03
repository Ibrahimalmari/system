<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrunchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\StoreController;

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

// Route::middleware('auth:sanctum')->group(function () {
//     // User routes
//     Route::apiResource('users', UserController::class);

//     // Admin routes
//     Route::apiResource('admins', AdminController::class);
// });



// Route::middleware(['auth.user'])->group(function () {
//     // User routes
//     Route::get('/user/dashboard', [UserController::class, 'dashboard']);
// });

// Route::middleware(['auth.admin'])->group(function () {
//     // Admin routes
//     Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
// });

Route::middleware(['auth:sanctum'])->group(function () {
       Route::get("/checkingAuthenticated" , function () {
        return response()->json(["message" => "You are in " , "status" => 200] , 200);
       });
        Route::post('/adminlogout/{id}', [AdminController::class, 'Logout']);
        Route::post('/sellerlogout/{id}', [SellerController::class, 'Logout']);
    });        



Route::post('/sellerlogin',[SellerController::class,'Login']);
Route::post('/adminlogin',[AdminController::class,'Login']);
Route::post('/sellerRegister',[SellerController::class,'Register']);
Route::resource('admin',AdminController::class);

Route::get('/role',[RoleController::class,'index']);
Route::get('/category',[CategoryController::class,'index']);
Route::get('/store',[StoreController::class,'index']);
Route::get('/store',[BrunchController::class,'index']);

Route::post('/CategoryAdd',[CategoryController::class,'store']);
Route::post('/ProductAdd',[ProductController::class,'store']);
Route::post('/SellerAdd',[StoreController::class,'store']);
Route::post('/BrunchAdd',[BrunchController::class,'store']);


